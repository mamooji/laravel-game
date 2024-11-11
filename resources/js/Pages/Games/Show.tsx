import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function Show(props) {
    console.log(props);

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
                            Testing
                            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                            {/*// @ts-expect-error*/}
                            {JSON.stringify(props.game, '0', undefined)}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
