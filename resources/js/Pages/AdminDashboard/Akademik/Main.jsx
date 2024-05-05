import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import Trow from "@/Components/Trow";

export default function AdminDashboard() {
    const { dosens } = usePage().props; // Akses 'mahasiswa' dari properti halaman
    console.log(usePage().props);

    return (
        <AdminLayout>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nomor</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Iterasi melalui array mahasiswa.data */}
                        {dosens.map((item, index) => (
                            <Trow
                                key={index}
                                index={item.id}
                                name={item.name}
                                nim={item.telp}
                                email={item.bidang}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
