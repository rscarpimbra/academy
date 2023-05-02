import Navbar from "@/Partials/Navbar";

export default function Guest({ children }) {
    return (
        <>

            <div className="min-h-screen sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50 dark:bg-gray-900">
                <div>

                    {children}
                </div>
            </div>
        </>

    );
}
