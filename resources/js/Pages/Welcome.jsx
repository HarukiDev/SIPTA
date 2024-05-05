import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-base-100 dark:bg-dots-lighte selection:bg-primary selection:text-black">
                <div className="flex flex-col items-center w-96 h-96 bg-primary rounded-xl drop-shadow-xl">
                    <ApplicationLogo className1="mt-5 mb-8" className2="w-64" />
                    <h1 className="mb-6 text-secondary text-xl font-extrabold">Welcome</h1>
                    <div>
                        {props.auth.user ? (
                            <a
                                href={route("dashboard")}
                                className="btn btn-secondary font-semibold text-white hover:text-gray-200"
                            >
                                Dashboard
                            </a>
                        ) : (
                            <>
                                <a
                                    href={route("login")}
                                    className="btn btn-secondary font-semibold text-white hover:text-gray-200"
                                >
                                    Log in
                                </a>

                                {/* <Link
                                    href={route("register")}
                                    className="ml-4 font-semibold text-gray-700 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-primary"
                                >
                                    Register
                                </Link> */}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style> */}
        </>
    );
}
