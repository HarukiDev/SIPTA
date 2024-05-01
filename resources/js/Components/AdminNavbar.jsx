import React from "react";
import Search from "./Search";

export default function AdminNavbar() {
    return (
        <div className="flex flex-col relative">
            {/* Foto */}
            <img
                className="absolute top-0 right-0 z-10 pointer-events-none"
                src="/images/logo-admin.png"
                alt="Logo"
            />
            {/* Navbar */}
            <div className="navbar bg-base-100 mt-[114px] z-0 relative">
                <ul className="menu menu-horizontal py-3 mx-14 w-full shadow-xl rounded-xl">
                    <li>
                        <a href={route("admin")}>Mahasiswa</a>
                    </li>
                    <li>
                        <a>Dosen</a>
                    </li>
                    <li>
                        <a>Tugas Akhir</a>
                    </li>
                    <li>
                        <a>Akademik</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}