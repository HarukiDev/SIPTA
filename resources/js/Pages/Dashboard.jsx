import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Main from "./Dashboard/main";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ props, auth, akademik }) {
    // console.log(usePage().props);
    return (
        <Authenticated
            auth={auth}
            akademik={akademik}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <Main
                nama={auth.user.name}
                totalsks={akademik.data[0].akademiks.totalsks}
                metodologi={akademik.data[0].akademiks.metodologi}
                kkn={akademik.data[0].akademiks.kkn}
                ipk={akademik.data[0].akademiks.ipk}
            />
        </Authenticated>
    );
}
