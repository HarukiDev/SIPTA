import React from "react";

export default function DataProfile(nama) {
  return (
    <div className="ml-16 bg-base-100 shadow-lg p-2 mt-2 rounded-lg overflow-auto">
      <h1 className="text-secondary text-xl font-bold mb-3 text-left">
        Data Pribadi Mahasiswa
      </h1>
      <table className="table-auto w-[700px] drop-shadow-xl">
        <tbody>
          <tr>
            <th className="text-secondary pr-3 text-left">No. Induk Mahasiswa</th>
            <td className="pr-1">:</td>
            <td className="font-light">{{nama}.user.nim}</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Dosen Pembimbing Akademik</th>
            <td className="pr-1">:</td>
            <td className="font-light">Bu Desty Rodiah</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Nama Mahasiswa</th>
            <td className="pr-1">:</td>
            <td className="font-light">Aerith Gainsborough</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Alamat Mahasiswa</th>
            <td className="pr-1">:</td>
            <td className="font-light">Jl. Soekarno hatta, Lr. Chamber</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Nomor Telepon</th>
            <td className="pr-1">:</td>
            <td className="font-light">081224547099</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Tempat Lahir</th>
            <td className="pr-1">:</td>
            <td className="font-light">Ashaigaoka, Japan</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Tanggal lahir</th>
            <td className="pr-1">:</td>
            <td className="font-light">12 April 2003</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Jenis Kelamin</th>
            <td className="pr-1">:</td>
            <td className="font-light">Perempuan</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Kewarganegaraan</th>
            <td className="pr-1">:</td>
            <td className="font-light">Indonesia</td>
          </tr>
          <tr>
            <th className="text-secondary pr-3 text-left">Agama</th>
            <td className="pr-1">:</td>
            <td className="font-light">Islam</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
