import {useEffect, useState}            from "react";

import {Head, Link}                     from "@inertiajs/react";
import { useTranslation }               from "react-i18next";

import AuthenticatedLayout              from '@/Layouts/AuthenticatedLayout';
import Skeleton                         from "@/Components/Skeleton";

export default function Show({ auth, language }) {

    const [getData, setGetData]     = useState([]);
    const { t, i18n }               = useTranslation("other/courses")

    useEffect(() => {

        /* Return all Data based on the language.  */
        async function fetchCourses() {
            const API = `/courses/all/1`;

            try {

                const toReturn = await axios.get(API);

                setGetData(toReturn.data)
            }catch (e){
                console.log(e)
            }
        }
        fetchCourses().then(r => {});
    }, [])





    return (
        <AuthenticatedLayout
            user={auth.user}
            language={language}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{t('title')}</h2>}
        >
            <Head title={ t('title') } />


            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm text-left mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{ t('sub title') }</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">{ t('sub title description')}</p>
                    </div>


                    {/* Creating the List of Courses. */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        { getData.map((course, index) =>(

                            <div key={index}  className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">

                                <Link  href={route('courses.course.show', course.uuid)}>
                                    <img className="p-4 w-full rounded-lg"
                                         src={ course.img_path }
                                         alt=""/>
                                </Link>

                                <div className="px-5 pb-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">{ course.title }</a>
                                    </h3>
                                    <span className="text-gray-500">{ course.cat_description }</span>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{ course.sub_title }</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}








