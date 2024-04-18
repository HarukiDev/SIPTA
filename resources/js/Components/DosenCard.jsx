import React from "react";

export default function DosenCard({ nama, bidang, wa, foto }) {
    return (
        <a href={`https://wa.me/${wa}`} className="hover:opacity-[90%] card w-72 border-none shadow-xl bg-secondary text-white pt-3 pb-5">
            <figure>
                <div className="avatar">
                    <div className="w-36 rounded-full">
                        {foto ? (
                            <img src={`/images/${nama}.jpg`} alt={nama} />
                        ) : (
                            <img src="/images/guest.png" alt="Guest" />
                        )}
                    </div>
                </div>
            </figure>
            <div className="card-body flex flex-col items-center grow-0 ">
                <h2 className="card-title text-[15px] font-medium">{nama}</h2>
                <p className="text-[14px] ">Telp : +{wa}</p>
                <div className="card-actions">
                    {bidang.map((field) => (
                        <div className="badge badge-outline flex flex-auto text-[12px]">
                            {field}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
}
