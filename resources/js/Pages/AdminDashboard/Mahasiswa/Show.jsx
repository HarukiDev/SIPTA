import React from "react";
import AdminDashboard from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";

export default function Show() {
    const { user } = usePage().props; // Akses 'mahasiswa' dari properti halaman
    console.log(usePage().props);

    return (
        <AdminDashboard database="admin">
            <div className="py-1 w-[900px] h-[400px] flex drop-shadow-2xl">
                <div className="mt-3 flex flex-row gap-3">
                    <div className="avatar">
                        <div className="rounded pointer-events-none">
                            {user.image ? (
                                <img
                                    src={`${window.assetPath}/storage/${user.image}`}
                                    alt="Profile Picture"
                                />
                            ) : (
                                <img src="/images/guest.png" alt="Guest" />
                            )}{" "}
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
                                        No. Induk Mahasiswa
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">{user.nim}</td>
                                </tr>

                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Nama Mahasiswa
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">{user.name}</td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Dosen Pembimbing Akademik
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {user.dospem}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Alamat Mahasiswa
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {user.alamat}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Nomor Telepon
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light"> {user.telp}</td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Tempat Lahir
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {user.tempatlahir}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Tanggal lahir
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {user.tanggallahir}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Jenis Kelamin
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {user.jeniskelamin}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Kewarganegaraan
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {user.kewarganegaraan}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Agama
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {user.agama}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <a
                            href={route("admin")}
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
