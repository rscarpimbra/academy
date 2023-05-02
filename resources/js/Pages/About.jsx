import {Head}                   from "@inertiajs/react";
import GuestLayout              from '@/Layouts/GuestLayout';
import Navbar from "@/Partials/Navbar";


export default function About({ auth }){
    return(
        <>

            <GuestLayout>

                <Head title="About" />

                <Navbar auth={auth}/>


                <div className="container mx-auto">
                    <h1>About page.</h1>

                    <h5>New Implementation</h5>
                </div>
            </GuestLayout>

        </>
    )
}
