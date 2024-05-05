import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import FormTA from "@/Components/FormTA";

export default function TugasAkhir({auth}) {
    return (
        <Authenticated
        auth={auth}
        >
            <div className="flex flex-col justify-center ml-10">
              <h1 className="text-secondary text-3xl font-bold mb-10 text-center">Penyerahan Tugas Akhir</h1>
                <FormTA />
            </div>
        </Authenticated>
    );
}
