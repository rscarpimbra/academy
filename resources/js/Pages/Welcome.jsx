import { Link, Head }   from '@inertiajs/react';
import Navbar           from '../Partials/Navbar';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <Navbar auth={auth}/>

            <div className="relative sm:flex min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                {/*<div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">*/}
                {/*    {auth.user ? (*/}
                {/*        <Link*/}
                {/*            href={route('dashboard')}*/}
                {/*            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"*/}
                {/*        >*/}
                {/*            Dashboards*/}
                {/*        </Link>*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*            <Link*/}
                {/*                href={route('about')}*/}
                {/*                className="mr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"*/}
                {/*            >*/}
                {/*                About*/}
                {/*            </Link>*/}
                {/*            <Link*/}
                {/*                href={route('login')}*/}
                {/*                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"*/}
                {/*            >*/}
                {/*                Log in*/}
                {/*            </Link>*/}

                {/*            <Link*/}
                {/*                href={route('register')}*/}
                {/*                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"*/}
                {/*            >*/}
                {/*                Register*/}
                {/*            </Link>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</div>*/}

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
<h1>Principal</h1>
                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<h1>testing</h1>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
<h1>New Test</h1>
                    </div>
                </div>
            </div>

       </>
    );
}
