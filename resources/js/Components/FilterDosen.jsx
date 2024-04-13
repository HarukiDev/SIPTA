import { usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function FilterDosen() {
    const { get } = usePage().props; // Menggunakan usePage() hook untuk mendapatkan instance page
    const [formData, setFormData] = useState({
        nama_dosen: "",
        jurusan: "",
        bidang_keahlian: "",
    }); // Menggunakan useState() hook untuk mengelola state formulir

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    }

    function onSubmit(e) {
        e.preventDefault();
        get("/dospem", formData); // Menggunakan method post pada instance page untuk mengirim data ke endpoint Laravel
    }

    return (
      <div className="flex items-center justify-center bg-base-100 w-[990px] h-[100px] drop-shadow-lg rounded-lg my-3">
        <form onSubmit={onSubmit} className="flex flex-row">
            <input
                type="text"
                placeholder="Nama Dosen"
                id="nama_dosen"
                value={formData.nama_dosen}
                onChange={handleChange}
                className="mr-2"
            />
            <select
                className="select w-full max-w-xs mr-2"
                id="jurusan"
                value={formData.jurusan}
                onChange={handleChange}
                
            >
                <option disabled selected>
                    Jurusan
                </option>
                <option>TI</option>
                <option>SI</option>
                <option>SK</option>
            </select>
            <select
                className="select w-full max-w-xs mr-2"
                id="bidang_keahlian"
                value={formData.bidang_keahlian}
                onChange={handleChange}
            >
                <option disabled selected>
                    Bidang Keahlian
                </option>
                <option>Machine Learning</option>
                <option>Image Processing</option>
                <option>Data Mining</option>
            </select>
            
            <button type="submit" className="ml-4 bg-secondary py-2 px-2 text-white rounded-lg">Search</button>
        </form>
      </div>

    );
}
