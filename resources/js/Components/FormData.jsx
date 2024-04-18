import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/react";

export default function FormData() {
    const { data, setData, post } = useForm({
        judul: "",
        topik: "",
        excerpt: "",
        penulis: "",
        nim: "",
        dospem: "",
        jurusan: "",
        tahunajaran: "",
    }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('update'));
    };

    return (
        <div className="flex flex-col ml-16 bg-base-100 shadow-lg p-2 mt-2 rounded-lg">
            <h1 className="text-secondary text-xl font-bold mb-3 ">
                Data Pribadi Mahasiswa
            </h1>

            <form onSubmit={submit} className="flex flex-col">
                <InputLabel htmlfor="judul" value="No. Induk Mahasiswa" />
                <TextInput
                    id="judul"
                    type="text"
                    name="judul"
                    value={data.judul}
                    onChange={handleChange}
                    className="mt-1 block w-[650px]"
                    isFocused={true}
                />
                <InputLabel htmlfor="topik" value="Dosen Pembimbing Akademik" />
                <TextInput
                    id="topik"
                    type="text"
                    name="topik"
                    value={data.topik}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="excerpt" value="Nama Mahasiswa" />
                <TextInput
                    id="excerpt"
                    type="text"
                    name="excerpt"
                    value={data.excerpt}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="nim" value="Alamat Mahasiswa" />
                <TextInput
                    id="nim"
                    type="text"
                    name="nim"
                    value={data.nim}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="dospem" value="Nomor Telepon" />
                <TextInput
                    id="dospem"
                    type="text"
                    name="dospem"
                    value={data.dospem}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="jurusan" value="Tempat Lahir" />
                <TextInput
                    id="jurusan"
                    type="text"
                    name="jurusan"
                    value={data.jurusan}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="tahunajaran" value="Tanggal lahir" />
                <TextInput
                    id="tahunajaran"
                    type="text"
                    name="tahunajaran"
                    value={data.tahunajaran}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="tahunajaran" value="Jenis Kelamin" />
                <TextInput
                    id="tahunajaran"
                    type="text"
                    name="tahunajaran"
                    value={data.tahunajaran}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="tahunajaran" value="Kewarganegaraan" />
                <TextInput
                    id="tahunajaran"
                    type="text"
                    name="tahunajaran"
                    value={data.tahunajaran}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <InputLabel htmlfor="tahunajaran" value="Agama" />
                <TextInput
                    id="tahunajaran"
                    type="text"
                    name="tahunajaran"
                    value={data.tahunajaran}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                />
                <button
                    type="submit"
                    className="mt-3 bg-secondary py-2 px-2 text-white rounded-lg self-end"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
}
