import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

// type Game = {
//     created_at: string;
//     id: number;
//     player_one_id: number;
//     player_two_id?: number;
//     player_three_id?: number;
//     updated_at: string;
// };
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
                                className={`inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300`}
                            >
                                Create Game
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        {games.map((game) => {
                            return (
                                <div
                                    key={game.id}
                                    className="p-6 text-gray-900 dark:text-gray-100"
                                >
                                    Player 1: {game.player_one_id}
                                    Player 2: {game.player_two_id ??
                                        'null'}{' '}
                                    Player 3: {game.player_three_id ?? 'null'}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
