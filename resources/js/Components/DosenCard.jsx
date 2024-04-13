import React from "react";

export default function DosenCard() {
    return (
        <div className="card w-60 border-none shadow-xl bg-secondary text-white pt-3 pb-5">
            <figure>
                <div className="avatar">
                    <div className="w-36 rounded-full">
                        <img src="/images/aertih.jpg" />
                    </div>
                </div>
            </figure>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title text-[12px] font-medium">
                    Dr. Aerith Gainsborough M.Cs
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline text-[12px]">Image processoring</div>
                </div>
                <p className="text-sm ">WA : 088899010101</p>
            </div>
        </div>
    );
}
