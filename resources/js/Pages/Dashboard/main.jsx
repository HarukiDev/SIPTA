import React from "react";

export default function main({ nama, totalsks, metodologi, kkn, ipk }) {
    return (
        <div className="overflow-hidden min-h-full bg-base-200 pb-7">
            <div className="hero mx-4 mt-2">
                <div className="hero-content w-[990px] mr-6 flex-col lg:flex-row-reverse bg-secondary rounded-lg">
                    <img src="/images/welcome.svg" className="max-w-sm" />
                    <div>
                        <h1 className="text-3xl font-extrabold text-base-100">
                            Hai, {nama}
                        </h1>
                        <p className="py-6 text-base-100">
                            Selamat Datang di Website Sistem Informasi
                            Pendaftaran Tugas Akhir Program Studi Teknik
                            Informatika Universitas Sriwijaya
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero m-4">
                <div className="hero-content w-[990px] h-12 mr-6 flex-col lg:flex-row-reverse rounded-lg bg-base-100 drop-shadow-[2px_6px_2px_rgba(26,51,101,0.8)]">
                    <div>
                        <p className="py-6 text-black">
                            Dimohon Kepada Mahasiswa Untuk Menjalankan Semua
                            Persyaratan Untuk Daftar Tugas Akhir
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex mx-6">
                <div className="w-[50%] bg-base-100 h-72 rounded-lg drop-shadow-2xl ml-2">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-xl font-bold">
                                Persyaratan pengajuan tugas akhir
                            </h1>
                            <p className="pt-10">
                                <div className="flex flex-col items-start">
                                    <p className="mb-1 text-l">
                                        <i
                                            class={
                                                totalsks >= 130
                                                    ? "bx bx-checkbox-checked"
                                                    : "bx bx-checkbox"
                                            }
                                        >
                                            Jumlah SKS yang telah ditempuh 130
                                            SKS
                                        </i>
                                    </p>
                                    <p className="mb-1 text-l">
                                        <i
                                            class={
                                                metodologi
                                                    ? "bx bx-checkbox-checked"
                                                    : "bx bx-checkbox"
                                            }
                                        >
                                            Telah lulus mata kuliah Metodologi
                                            Penelitian Komunikasi
                                        </i>
                                    </p>
                                    <p className="mb-1 text-l">
                                        <i
                                            class={
                                                kkn
                                                    ? "bx bx-checkbox-checked"
                                                    : "bx bx-checkbox"
                                            }
                                        >
                                            Telah menyelesaikan KKN atau Kerja
                                            Praktik
                                        </i>
                                    </p>
                                    <p className="mb-1 text-l">
                                        <i
                                            class={
                                                ipk >= 2.0
                                                    ? "bx bx-checkbox-checked"
                                                    : "bx bx-checkbox"
                                            }
                                        >
                                            Indeks Prestasi Kumulatif minimal
                                            2,00
                                        </i>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] bg-base-100 h-72 content-between rounded-lg drop-shadow-2xl ml-5">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-xl font-bold">
                                Tahapan tugas akhir
                            </h1>
                            <div
                                className="radial-progress mt-4 text-secondary bg-base-200"
                                style={{
                                    "--value": "20",
                                    "--size": "12rem",
                                    "--thickness": "1.5rem",
                                }}
                                role="progressbar"
                            >
                                20%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
