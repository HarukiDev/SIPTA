import React from "react";
import { Link } from "@inertiajs/react";

export default function ProfileLayout({ nama, nim }) {
    return (
        <div className="fixed top-0 right-0 flex flex-col min-h-full w-[235px] bg-base-100 drop-shadow-2xl items-center pb-64 pt-16">
            <h1 className="font-bold">Akun Sipta</h1>
            <div className="flex flex-col mt-10 items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="/images/guest.png" alt="Guest" />
                    </div>
                </div>
                <p className="mt-3 font-semibold">{nama}</p>
                <p className="text-sm font-medium">{nim}</p>
            </div>
            <div className="flex flex-col mt-16">
                <a
                    href={route("dashboard")}
                    className="mb-1 bg-base-100 border-transparent text-center font-medium text-base"
                >
                    Ganti Profil
                </a>
                <details className="dropdown">
                    <summary className="btn font-medium text-base font-['inter'] bg-transparent hover:bg-transparent hover:border-transparent border-transparent drop-shadow-none">
                        Akun
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <a href={route("reset")}>Ganti Password</a>
                        </li>
                        <li>
                            <a href={route("update")}>Edit Profil</a>
                        </li>
                    </ul>
                </details>
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="font-medium text-base text-error"
                >
                    Logout
                </Link>
            </div>
        </div>
    );
}
