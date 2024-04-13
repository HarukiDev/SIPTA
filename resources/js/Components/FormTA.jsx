import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/react";

export default function FormTA() {
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

        post(route("tugasakhir"));
    };

    return (
        <form onSubmit={submit} className="flex flex-col">
            <InputLabel htmlfor="judul" value="Judul" />
            <TextInput
                id="judul"
                type="text"
                name="judul"
                value={data.judul}
                onChange={handleChange}
                className="mt-1 block w-[950px]"
                isFocused={true}
            />
            <InputLabel htmlfor="topik" value="Topik" />
            <TextInput
                id="topik"
                type="text"
                name="topik"
                value={data.topik}
                onChange={handleChange}
                className="mt-1 block w-full"
            />
            <InputLabel htmlfor="excerpt" value="Excerpt" />
            <TextInput
                id="excerpt"
                type="text"
                name="excerpt"
                value={data.excerpt}
                onChange={handleChange}
                className="mt-1 block w-full"
            />
            <InputLabel htmlfor="nim" value="Nim" />
            <TextInput
                id="nim"
                type="text"
                name="nim"
                value={data.nim}
                onChange={handleChange}
                className="mt-1 block w-full"
            />
            <InputLabel htmlfor="dospem" value="Dospem" />
            <TextInput
                id="dospem"
                type="text"
                name="dospem"
                value={data.dospem}
                onChange={handleChange}
                className="mt-1 block w-full"
            />
            <InputLabel htmlfor="jurusan" value="Jurusan" />
            <TextInput
                id="jurusan"
                type="text"
                name="jurusan"
                value={data.jurusan}
                onChange={handleChange}
                className="mt-1 block w-full"
            />
            <InputLabel htmlfor="tahunajaran" value="Tahun Ajaran" />
            <TextInput
                id="tahunajaran"
                type="text"
                name="tahunajaran"
                value={data.tahunajaran}
                onChange={handleChange}
                className="mt-1 block w-full"
            />
            <div className="mt-3 text-secondary">
                File :{" "}
                <input
                    type="file"
                    id="file"
                    className="file-input file-input-secondary w-full max-w-xs file-input-md	"
                />
            </div>
            <button
                type="submit"
                className="mt-5 bg-secondary py-3 px-10 text-white rounded-lg self-end"
            >
                Submit
            </button>
        </form>
    );
}
