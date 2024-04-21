import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { usePage } from "@inertiajs/react";

import IpkBox from "@/Components/IpkBox"; // Add this import statement

export default function Edit({ auth, akademik, image }) {
    // console.log(usePage().props)
    let data = akademik.data[0].akademiks;
    return (
        <Authenticated
            auth={auth}
            akademik={akademik}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-1 w-[900px] h-[400px] flex bg-base-200">
                <div className=" mt-3">
                    <div className="ml-16 bg-base-100 shadow-lg p-2 mt-2 rounded-lg overflow-auto">
                        <h1 className="text-secondary text-xl font-bold mb-3 text-left">
                            Data Pribadi Mahasiswa
                        </h1>
                        <table className="table-auto w-[700px] drop-shadow-xl">
                            <tbody>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        No. Induk Mahasiswa
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {auth.user.nim}
                                    </td>
                                </tr>

                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Nama Mahasiswa
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {auth.user.name}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Dosen Pembimbing Akademik
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {auth.user.dospem}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Alamat Mahasiswa
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {auth.user.alamat}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Nomor Telepon
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {auth.user.telp}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Tempat Lahir
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {auth.user.tempatlahir}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Tanggal lahir
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {auth.user.tanggallahir}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Jenis Kelamin
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {auth.user.jeniskelamin}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Kewarganegaraan
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {auth.user.kewarganegaraan}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-secondary pr-3 text-left">
                                        Agama
                                    </th>
                                    <td className="pr-1">:</td>
                                    <td className="font-light">
                                        {" "}
                                        {auth.user.agama}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>{" "}
                    <div className="flex mt-5 flex-row-reverse">
                        {/* {Akademikss.map((akademiks, index) => ( */}
                            <IpkBox
                                // key={index}
                                totalsks={data.totalsks}
                                s1={data.s1}
                                s2={data.s2}
                                s3={data.s3}
                                s4={data.s4}
                                s5={data.s5}
                                s6={data.s6}
                                s7={data.s7}
                                s8={data.s8}
                            />
                        {/* ))} */}
                    </div>
                </div>
                <ProfileLayout nama={auth.user.name} nim={auth.user.nim} image={auth.user.image} />
            </div>
        </Authenticated>
    );
}
