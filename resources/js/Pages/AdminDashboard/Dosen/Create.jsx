import { useState, React } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import Alert from "@/Components/Alert";

export default function Create() {
    const [message, setMessage] = useState("");
    const { data, setData, processing, errors } = useForm({
        telp: "",
        name: "",
        jurusan: "",
        bidang: "",
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

        axios
            .post(route("dosen.store"), data)
            .then(() => setMessage("Berhasil ditambahkan"))
            .then(() => {
                window.location.reload();
            });
    };

    return (
        <AdminLayout database="dosen">
            {message && (
                <Alert message={message} onClose={() => setMessage("")} />
            )}
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="jurusan" value="Jurusan" />

                    <TextInput
                        id="jurusan"
                        type="text"
                        name="jurusan"
                        value={data.jurusan}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.jurusan} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="telp" value="Nomor WA" />

                    <TextInput
                        id="telp"
                        type="text"
                        name="telp"
                        value={data.telp}
                        className="mt-1 block w-full"
                        autoComplete="new-telp"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.telp} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="bidang" value="Bidang" />

                    <TextInput
                        id="bidang"
                        type="bidang"
                        name="bidang"
                        value={data.bidang}
                        className="mt-1 block w-full"
                        autoComplete="new-bidang"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.bidang} className="mt-2" />
                </div>

                <PrimaryButton
                    type="submit"
                    className="mt-4"
                    disabled={processing}
                >
                    Create
                </PrimaryButton>
            </form>
        </AdminLayout>
    );
}
