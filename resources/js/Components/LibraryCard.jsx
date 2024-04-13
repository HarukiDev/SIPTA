import React from "react";

export default function LibraryCard() {
    return (
        <div className="card card-side bg-base-100 shadow-xl overflow-hidden">
            <figure className="border-[35px] border-secondary">
                <img className="border-[10px] border-primary"
                    src="/images/skripsi.png"
                    alt="Movie"
                />
            </figure>
            <div className="card-body grow-0">
                <h2 className="card-title">Perancangan Sistem Informasi Pada Aplikasi Honkai Star Rail</h2>
                <p>Deskripsi:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porta  nisi, et iaculis sapien. Aliquam ac tincidunt elit, eu lacinia  dolor.</p>
            </div>
        </div>
    );
}
