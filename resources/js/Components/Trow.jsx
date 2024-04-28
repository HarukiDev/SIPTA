import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function Trow({ nim, name, email, index }) {
    const { delete: destroy } = useForm({
        id: index,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("admin.destroy", { user: index })); // Menyertakan 'nim' sebagai parameter 'user'
    };

    return (
        <tr>
            <th>{index}</th>
            <th>{nim}</th>
            <td>{name}</td>
            <th>{email}</th>
            <th className="flex flex-row gap-2">
                <PrimaryButton className="bg-success">Show</PrimaryButton>
                <PrimaryButton className="bg-warning">Edit</PrimaryButton>
                <form onSubmit={handleSubmit} >
                    <button className="btn btn-error" type="submit">Delete</button>
                </form>
            </th>
        </tr>
    );
}