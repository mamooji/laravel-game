import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Fragment } from 'react';

const Dashboard = (props) => {
    console.log(props);
    const games = props.games.data;
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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Your Logged In
                        </div>
                        <div className="px-6 pb-6">
                            <Link
                                href={route('games.store')}
                                method="post"
                                as="button"
                                className={`inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300`}
                            >
                                Create Game
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        {games.map((game) => {
                            return (
                                <Fragment key={game.id}>
                                    <div className="my-4 flex items-center justify-between divide-y p-6 text-gray-900 dark:text-gray-100">
                                        <div className="flex flex-col">
                                            <span>
                                                Host: {game.player_one.name}
                                            </span>
                                            <span>
                                                Player Two:{' '}
                                                {game?.player_two?.name ??
                                                    'empty'}
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
                                            className="rounded-md bg-green-500 px-4 py-2 transition-colors hover:bg-green-800"
                                        >
                                            join game
                                        </Link>
                                    </div>
                                    <hr className="bg-white" />
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
