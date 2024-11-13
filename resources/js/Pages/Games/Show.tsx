import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function Show(props) {
    const game = usePage().props.game;

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
                            player 1: {game.player_one_id}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            player 2: {game?.player_two_id ?? 'empty'}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            player 3: {game?.player_three_id ?? 'empty'}
                        </div>
                        <div className="p-6 text-black dark:text-white">
                            {JSON.stringify(props.game, '0', undefined)}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
