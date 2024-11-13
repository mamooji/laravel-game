import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Echo from '../echoTypescript';

const Dashboard = (props: any) => {
    const [games, setGames] = useState([...props.games.data]);
    const user = usePage().props.auth.user;

    useEffect(() => {
        Echo.private('lobby').listen('GameJoined', (event: any) => {
            // const gameId = event.game.id;
            // const playerTwoId = event.game.player_two_id;
            // const playerThreeId = event.game.player_three_id;
            // const isGameFull: boolean =
            //     playerTwoId !== null && playerThreeId !== null;
            // if (isGameFull) {
            //     setGames(games.filter((game) => game.id !== gameId));
            // }
            router.reload({
                only: ['games'],
            });
        });
    }, [games]);

    useEffect(() => {
        setGames([...props.games.data]);
    }, [props.games.data]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between overflow-hidden bg-white px-6 py-6 shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="text-gray-900 dark:text-gray-100">
                            Welcome {user.name}!
                        </div>
                        <Link
                            href={route('games.store')}
                            method="post"
                            as="button"
                            className={`inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300`}
                        >
                            Create Game
                        </Link>
                    </div>

                    {games.map((game: any) => {
                        return (
                            <div
                                key={game.id}
                                className="mt-6 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"
                            >
                                <div className="my-4 flex items-center justify-between divide-y p-6 text-gray-900 dark:text-gray-100">
                                    <div className="flex flex-col">
                                        <span>
                                            Host: {game.player_one.name}
                                        </span>
                                        <span>
                                            Player Two:{' '}
                                            {game?.player_two?.name ?? 'empty'}
                                        </span>
                                        <span>
                                            Player Three:{' '}
                                            {game?.player_three?.name ??
                                                'empty'}
                                        </span>
                                    </div>

                                    <Link
                                        href={route('games.join', game)}
                                        method="post"
                                        as="button"
                                        className="rounded-md border-none bg-green-500 px-4 py-2 transition-colors hover:bg-green-800"
                                    >
                                        join game
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
