import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ProfileLayout from "@/Layouts/ProfileLayout";
import UpdateProfileInformation from "./Partials/UpdateProfileInformationForm";

export default function Edit({ auth, mustVerifyEmail, status}) {
    return (
        <Authenticated
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-1 w-[900px] flex bg-base-200">
                <div className=" mt-3">
                    <UpdateProfileInformation
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                    {/* <div className="flex mt-5 flex-row-reverse">
                        <UpdateProfileInformation
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl bg-secondary p-2 rounded-lg"
                        />
                        <IpkBox />
                    </div> */}
                </div>
                <ProfileLayout nama={auth.user.name} nim={auth.user.nim} />
            </div>
        </Authenticated>
    );
}
