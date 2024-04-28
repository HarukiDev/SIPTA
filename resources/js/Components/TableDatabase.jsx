import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function TableDatabase({
    database,
    nim,
    name,
    email,
    password,
    telp,
    dospem,
    alamat,
    ttl,
    jeniskelamin,
    kewarganegaraan,
    agama,
}) {
    return (
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
                    {database.map((data, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{data.nim}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td className="flex flex-row gap-2">
                                <PrimaryButton className="bg-success">
                                    Show
                                </PrimaryButton>
                                <PrimaryButton className="bg-warning">
                                    Edit
                                </PrimaryButton>
                                <PrimaryButton className="bg-error">
                                    Delete
                                </PrimaryButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
