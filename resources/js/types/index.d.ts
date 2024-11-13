import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}
export interface Game {
    id: number;
    player_one_id: number;
    player_two_id?: number;
    player_three_id?: number;
    player_one: User;
    player_two?: User;
    player_three?: User;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    game: Game;
    games: Array<Game>;
    ziggy: Config & { location: string };
};
