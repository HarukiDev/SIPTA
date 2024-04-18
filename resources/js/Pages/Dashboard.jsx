import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Main from "./Dashboard/main";
import { usePage } from "@inertiajs/react";

export default function Dashboard({ props, auth, akademik }) {
    console.log(usePage().props)
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
            totalsks, metodologi, kkn, ipk
            <Head title="Dashboard" />
            <Main
                nama={auth.user.name}
                totalsks={akademik[0].totalsks}
                metodologi={akademik[0].metodologi}
                kkn={akademik[0].kkn}
                ipk={akademik[0].ipk}
            />
        </Authenticated>
    );
}
