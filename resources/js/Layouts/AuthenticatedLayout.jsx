import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Authenticated({ auth, akademik, children, className1 }) {
    useEffect(() => {
        themeChange(false);
    }, []);

    const [btnActive, setBtnActive] = useState(() => {
        // Coba untuk mendapatkan status tombol dari penyimpanan lokal
        const storedStatus = localStorage.getItem("btnActive");
        // Jika tidak ada status yang disimpan, gunakan false sebagai default
        return storedStatus ? JSON.parse(storedStatus) : false;
    });

    const handleClick = () => {
        const newStatus = !btnActive;
        // Simpan status baru ke penyimpanan lokal
        localStorage.setItem("btnActive", JSON.stringify(newStatus));
        setBtnActive(newStatus);
    };

    return (
        <div className={"flex" + className1}>
            {/* Elemen tetap */}
            <div className="flex flex-col min-h-full w-[235px] bg-base-100 drop-shadow-2xl items-center pb-64 fixed">
                <ApplicationLogo className2={"w-[196px] h-[156.65px] mt-5"} />
                <div className="flex flex-col mt-10">
                    <a
                        href={route("dashboard")}
                        className={`btn bg-base-100 border-transparent hover:bg-primary focus:bg-primary focus:text-base-100 text-center ${
                            btnActive ? 'active:bg-primary' : ''
                        }`}
                        onClick={handleClick}
                    >
                        Beranda
                    </a>
                    <a
                        href={route("tugasakhir")}
                        className={`btn bg-base-100 border-transparent hover:bg-primary focus:bg-primary focus:text-base-100 text-center ${
                            btnActive ? 'active:bg-primary' : ''
                        }`}
                        onClick={handleClick}
                    >
                        Tugas Akhir
                    </a>
                    <a
                        href={route("dospem")}
                        className={`btn bg-base-100 border-transparent hover:bg-primary focus:bg-primary focus:text-base-100 text-center ${
                            btnActive ? 'active:bg-primary' : ''
                        }`}
                        onClick={handleClick}
                    >
                        Dosen Pembimbing
                    </a>
                    <a
                        href={route("profile.edit")}
                        className={`btn bg-base-100 border-transparent hover:bg-primary focus:bg-primary focus:text-white text-center ${
                            btnActive ? 'active:bg-primary' : ''
                        }`}
                        onClick={handleClick}
                    >
                        Profil
                    </a>
                </div>
                <div className="flex mt-48">
                    <p className="mr-1">Mode: </p>
                    <label className="cursor-pointer grid place-items-center">
                        <input
                            type="checkbox"
                            data-toggle-theme="light,dark"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>

            {/* Elemen yang akan muncul di bawah elemen tetap */}
            <div className="ml-[235px]">{children}</div>
        </div>
    );
}
