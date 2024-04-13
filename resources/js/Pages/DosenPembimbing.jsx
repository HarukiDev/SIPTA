import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import FilterDosen from "@/Components/FilterDosen";
import DosenCard from "@/Components/DosenCard";
import { Head } from "@inertiajs/react";


export default function DosenPembimbing() {
    return (
        <Authenticated>
            <Head title="Dosen Pembimbing" />
            <div className="mx-4 mt-2 bg-base-200">
                <div className="flex flex-col">
                    <div className="">
                        <FilterDosen />
                    </div>
                    <div className="flex flex-wrap flex-auto overflow-hidden gap-3">
                        <DosenCard />
                        <DosenCard />
                        <DosenCard />
                        <DosenCard />
                        <DosenCard />
                        <DosenCard />
                        <DosenCard />
                        <DosenCard />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
