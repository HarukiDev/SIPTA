import React from "react";
import AdminDashboard from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";

export default function Show() {
    const { dosens } = usePage().props; // Akses 'mahasiswa' dari properti halaman
    console.log(usePage().props);

    return (
        <AdminDashboard database="admin">
            <div className="py-1 w-[900px] h-[400px] flex drop-shadow-2xl">
                <div className="mt-3 flex flex-row gap-3">
                    <div className="avatar">
                        <div className="rounded pointer-events-none">
                            {dosens.foto ? (
                                <img
                                    src={`/images/${dosens.name}.jpg`}
                                    alt={dosens.name} // Fix: Replace 'nama' with 'dosens.name'
                                />
                            ) : (
                                <img src="/images/guest.png" alt="Guest" />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col bg-base-100 shadow-lg p-2 mt-2 rounded-lg overflow-auto">
                        <h1 className="text-secondary text-xl font-bold mb-3 text-left">
                            Data Pribadi Mahasiswa
                        </h1>
                        <table className="table-auto w-[700px] drop-shadow-xl">
                            <tbody>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Nama
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {dosens.name}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Bidang
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {dosens.bidang}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Nomor Telepon
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {dosens.telp}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <a
                            href={route("dosen")}
                            className="btn btn-primary w-20 h-8 self-end mr-4"
                        >
                            Back
                        </a>
                    </div>{" "}
                    <div className="flex mt-5 flex-row-reverse"></div>
                </div>
            </div>
        </AdminDashboard>
    );
}
