import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import Trow from "@/Components/Trow";

export default function AdminDashboard() {
    const { mahasiswa } = usePage().props; // Akses 'mahasiswa' dari properti halaman
    console.log(usePage().props);

    return (
        <AdminLayout database="admin">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Iterasi melalui array mahasiswa.data */}
                        {mahasiswa.map((item, index) => (
                            <Trow
                                key={index}
                                index={item.id}
                                name={item.name}
                                nim={item.nim}
                                email={item.email}
                                database="admin"
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
