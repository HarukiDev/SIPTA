import Authenticated from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import ProfileLayout from "@/Layouts/ProfileLayout";

export default function Edit({ auth, mustVerifyEmail, status }) {
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

            <div className="py-12 flex">
                {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                </div> */}
                <div className="hero mx-4">
                    <div className="hero-content w-[770px] mr-6 flex flex-row bg-secondary rounded-lg">
                        <div>
                            <h1 className="text-3xl font-extrabold text-base-100">
                                IPK Semester
                            </h1>
                            <p className="text-white">Semester 1</p>
                            <p className="text-white">Semester 2</p>
                            <p className="text-white">Semester 3</p>
                            <p className="text-white">Semester 4</p>
                            <p className="text-white">Semester 5</p>
                            <p className="text-white">Semester 6</p>
                            <p className="text-white">Semester 7</p>
                            <p className="text-white">Semester 8</p>
                        </div>
                        <div className="text-base-100 flex flex-row">
                            <div className="w-6 h-56 bg-primary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-light"
                                    style={{
                                        width: "50%",
                                        transform: "rotate(180deg)",
                                    }}
                                ></div>
                            </div>
                            <div className="w-6 h-56 bg-primary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-light"
                                    style={{
                                        width: "100%",
                                        transform: "rotate(180deg)",
                                    }}
                                ></div>
                            </div>
                            <div className="w-6 h-56 bg-primary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-light"
                                    style={{
                                        width: "40%",
                                        transform: "rotate(180deg)",
                                    }}
                                ></div>
                            </div>
                            <div className="w-6 h-56 bg-primary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-light"
                                    style={{
                                        width: "70%",
                                        transform: "rotate(180deg)",
                                    }}
                                ></div>
                            </div>
                            <div className="w-6 h-56 bg-primary rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary-light"
                                    style={{
                                        width: "100%",
                                        transform: "rotate(180deg)",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Element yang akan ditempatkan di kanan */}
                <ProfileLayout />
            </div>
        </Authenticated>
    );
}
