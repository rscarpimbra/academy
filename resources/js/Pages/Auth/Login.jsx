import {useEffect, useState} from 'react';
import Checkbox                 from '@/Components/Checkbox';
import GuestLayout              from '@/Layouts/GuestLayout';
import InputError               from '@/Components/InputError';
import InputLabel               from '@/Components/InputLabel';
import PrimaryButton            from '@/Components/PrimaryButton';
import TextInput                from '@/Components/TextInput';
import { Head, Link, useForm }  from '@inertiajs/react';
import Navbar from "@/Partials/Navbar";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [formData, setFormData]   = useState({
      email: '',
      password: ''
    })

    const { email, password}        = formData

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const onChange = (e) => {
        setData((prevState) => ({
            ...prevState,
                [e.target.id]: e.target.value,
        }))
    }

    return (
        <GuestLayout>

            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}


            <section className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
                <div className="grid h-screen place-items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:gap-20 lg:py-16 lg:grid-cols-12">
                    <div className="flex-col justify-between hidden col-span-6 mr-auto lg:flex xl:mb-0">
                        <div>
                            <a href="#"
                               className="inline-flex items-center mb-6 text-2xl font-semibold text-gray-900 lg:mb-10 dark:text-white">
                                <img className="w-8 h-8 mr-2"
                                     src="/images/warne-smr.png" alt="logo" />
                                    Warner Academy
                            </a>
                            <div className="flex">
                                <svg className="w-5 h-5 mr-2 text-primary-600 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Get
                                        started quickly</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Integrate with
                                        developer-friendly APIs or choose low-code.</p>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <svg className="w-5 h-5 mr-2 text-primary-600 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Support
                                        any business model</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Host code that you
                                        don't want to share with the world in private.</p>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <svg className="w-5 h-5 mr-2 text-primary-600 shrink-0" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold leading-none text-gray-900 dark:text-white">Join
                                        millions of businesses</h3>
                                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Flowbite is trusted
                                        by ambitious startups and enterprises of every size.</p>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#"
                                       className="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Term
                                        & Conditions</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-sm text-gray-500 hover:underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mb-6 text-center lg:hidden">
                        <a href="#"
                           className="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white">
                            <img className="w-8 h-8 mr-2"
                                 src="/images/warne-smr.png" alt="logo"/>
                                Warner Academy
                        </a>
                    </div>
                    <div
                        className="w-full col-span-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0">
                        <div className="p-6 space-y-4 lg:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                                Welcome back
                            </h1>
                            <h6 className="-mt-10">Log in to your account</h6>

                            <form className="space-y-4 lg:space-y-6"onSubmit={submit}>

                                <div className="relative">
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        onChange={onChange}
                                        className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "/>
                                    <label htmlFor="email"
                                           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Email
                                    </label>

                                    <InputError message={errors.email} className="mt-2" />
                                </div>


                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={onChange}
                                        className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "/>
                                    <label htmlFor="small_outlined"
                                           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Password
                                    </label>

                                    <InputError message={errors.password} className="mt-2" />
                                </div>


                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                   required=""/>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <a href="#"
                                       className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                        password?</a>
                                </div>
                                <button type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                    in to your account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#"
                                                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                    up here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/*<form onSubmit={submit}>*/}
            {/*    <div>*/}
            {/*        <InputLabel htmlFor="email" value="Email" />*/}

            {/*        <TextInput*/}
            {/*            id="email"*/}
            {/*            type="email"*/}
            {/*            name="email"*/}
            {/*            value={data.email}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="username"*/}
            {/*            onChange={(e) => setData('email', e.target.value)}*/}
            {/*        />*/}

            {/*        <InputError message={errors.email} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="password" value="Password" />*/}

            {/*        <TextInput*/}
            {/*            id="password"*/}
            {/*            type="password"*/}
            {/*            name="password"*/}
            {/*            value={data.password}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="current-password"*/}
            {/*            onChange={(e) => setData('password', e.target.value)}*/}
            {/*        />*/}

            {/*        <InputError message={errors.password} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="block mt-4">*/}
            {/*        <label className="flex items-center">*/}
            {/*            <Checkbox*/}
            {/*                name="remember"*/}
            {/*                checked={data.remember}*/}
            {/*                onChange={(e) => setData('remember', e.target.checked)}*/}
            {/*            />*/}
            {/*            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>*/}
            {/*        </label>*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center justify-end mt-4">*/}
            {/*        {canResetPassword && (*/}
            {/*            <Link*/}
            {/*                href={route('password.request')}*/}
            {/*                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"*/}
            {/*            >*/}
            {/*                Forgot your password?*/}
            {/*            </Link>*/}
            {/*        )}*/}

            {/*        <PrimaryButton className="ml-4" disabled={processing}>*/}
            {/*            Log in*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </GuestLayout>
    );
}
