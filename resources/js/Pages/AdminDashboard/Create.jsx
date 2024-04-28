import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";

export default function Create() {
    const { data, setData, processing, errors } = useForm({
        name: "",
        email: "",
        nim: "",
        password: "",
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

        axios.post(route("admin.store"), data);
    };

    return (
        <AdminLayout>
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
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="nim" value="NIM" />

                    <TextInput
                        id="nim"
                        type="text"
                        name="nim"
                        value={data.nim}
                        className="mt-1 block w-full"
                        autoComplete="new-nim"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.nim} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
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
