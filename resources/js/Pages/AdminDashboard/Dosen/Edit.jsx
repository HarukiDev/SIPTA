import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Link, useForm, usePage } from "@inertiajs/react";
import AdminDashboard from "@/Layouts/AdminLayout";

export default function Edit({ mustVerifyEmail, status }) {
    const { dosens } = usePage().props; // Akses 'mahasiswa' dari properti halaman
    console.log(usePage().props);

    const { data, setData, patch, errors, processing } =
        useForm({
            name: dosens.name,
            telp: dosens.telp,
            jurusan: dosens.jurusan,
            bidang: dosens.bidang,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("admin.update", { user: user.id }), data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    return (
        <AdminDashboard database="admin">
            <div className="flex flex-col ml-2 bg-base-100 drop-shadow-xl px-8 py-3 mt-0 rounded-lg">
                <h1 className="text-secondary text-xl font-bold mb-3 ">
                    Data Pribadi Mahasiswa
                </h1>
                <form onSubmit={submit} className="flex flex-col">
                    <InputLabel htmlFor="name" value="Nama" />
                    <TextInput
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                        className="mt-1 block w-full"
                    />
                    <InputError className="mt-2" message={errors.name} />

                    <InputLabel
                        htmlfor="telp"
                        value="Nomor telepon"
                    />
                    <TextInput
                        id="telp"
                        value={data.telp}
                        onChange={(e) => setData("telp", e.target.value)}
                        required
                        isFocused
                        autoComplete="telp"
                        className="mt-1 block w-full"
                    />
                    <InputError className="mt-2" message={errors.telp} />

                    <InputLabel htmlfor="jurusan" value="Jurusan" />
                    <TextInput
                        id="jurusan"
                        value={data.jurusan}
                        onChange={(e) => setData("jurusan", e.target.value)}
                        required
                        isFocused
                        autoComplete="jurusan"
                        className="mt-1 block w-full"
                    />
                    <InputError className="mt-2" message={errors.jurusan} />

                    <InputLabel htmlfor="bidang" value="Bidang" />
                    <TextInput
                        id="bidang"
                        value={data.bidang}
                        onChange={(e) => setData("bidang", e.target.value)}
                        required
                        isFocused
                        autoComplete="bidang"
                        className="mt-1 block w-full"
                    />
                    <InputError className="mt-2" message={errors.bidang} />

                    <div className="flex items-center gap-4 mt-5">
                        <PrimaryButton className="bg-secondary text-white" disabled={processing}>
                            Simpan
                        </PrimaryButton>
                    </div>
                    <a
                            href={route("dosen")}
                            className="btn btn-primary w-20 h-8 self-end mr-4"
                        >
                            Back
                        </a>
                </form>
            </div>
        </AdminDashboard>
    );
}
