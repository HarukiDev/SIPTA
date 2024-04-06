import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-row sm:justify-center items-center pt-6 sm:pt-0 bg-base-300 shadow-lg">
            <img src="/images/bg-login.png" alt="" className="h-[100%] w-[46.2%] absolute z-0 top-0 left-0 opacity-80" />
            <div className="bg-white rounded-l-xl z-10">
                <Link href="/">
                    <img
                        src="/images/logo-login.png"
                        alt="Logo"
                        className="w-72 h-96"
                    />
                </Link>
            </div>

            <div className="w-96 h-96 sm:max-w-md px-5 py-8 bg-white overflow-hidden rounded-r-lg">
                {children}
            </div>
        </div>
    );
}
