import Echo from '@/echoTypescript';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function Show(props: PageProps) {
    const [game, setGame] = useState(props.game);
    useEffect(() => {
        Echo.private('lobby').listen('GameJoined', () => {
            router.reload({
                only: ['game'],
            });
        });
    }, [game]);

    useEffect(() => {
        setGame(props.game);
    }, [props.game]);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Current Game
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-black dark:text-white">
                            GAME ID: {game.id}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            player 1: {game.player_one?.name}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            player 2: {game?.player_two?.name ?? 'empty'}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            player 3: {game?.player_three?.name ?? 'empty'}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            {/*{JSON.stringify(props.game, '0', undefined)}*/}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
