import React from "react"; // Add the missing import statement for React
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ProfileLayout from "@/Layouts/ProfileLayout";
import UploadAvatar from "./Partials/UploadAvatar";
import { usePage } from "@inertiajs/react";
import Alert from "@/Components/Alert";

export default function Edit({ auth }) {
    const { session } = usePage().props;

    return (
        <Authenticated
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Profile
                </h2>
            }
        >
            {session && session.success && <Alert message={session.success} />}
            <Head title="Profile" />

            <div className="py-1 w-[900px] flex bg-base-200">
                <div className=" mt-3">
                    <UploadAvatar />
                </div>
                <ProfileLayout nama={auth.user.name} nim={auth.user.nim} image={auth.user.image} />
            </div>
        </Authenticated>
    );
}
