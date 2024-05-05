import React from "react";
import { useForm } from "@inertiajs/react";

export default function Trow({ nim, name, email, index, database }) {
    const { delete: destroy } = useForm({
        id: index,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route(`${database}.destroy`, { dosen: index })); // Menyertakan 'nim' sebagai parameter 'dosen'
    };

    return (
        <tr>
            <th>{index}</th>
            <th>{nim}</th>
            <td>{name}</td>
            <th>{email}</th>
            <th className="flex flex-row gap-2">
                <a href={route(`${database}.show`, { dosen: index})} className="btn btn-success">Show</a>
                <a href={route(`${database}.edit`, { dosen: index})} className="btn btn-warning">Edit</a>
                <form onSubmit={handleSubmit} >
                    <button className="btn btn-error" type="submit">Delete</button>
                </form>
            </th>
        </tr>
    );
}