import React from "react";

export default function IpkBox({ totalsks, s1, s2, s3, s4, s5, s6, s7, s8 }) {
    return (
        <div className="flex flex-col bg-primary rounded-lg px-16 pt-5 pb-10 ml-5">
            <h1 className="font-extrabold mb-3 text-3xl text-center">IP Semester</h1>
            <p className="font-semibold">Akumulasi SKS : {totalsks}</p>
            <div className="flex flex-row gap-5 flex-wrap flex-auto text-center auto-cols-max mt-5">
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            1
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s1 === 4 ? "4.00" : s1}</p>
                </div>
                <div>
                    <div className="flex flex-auto px-2 py-0 mb-1  flex-wrap bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            2
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s2 === 4 ? "4.00" : s2}</p>
                </div>
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            3
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s3 === 4 ? "4.00" : s3}</p>
                </div>
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            4
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s4 === 4 ? "4.00" : s4}</p>
                </div>
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            5
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s5 === 4 ? "4.00" : s5}</p>
                </div>
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            6
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s6 === 4 ? "4.00" : s6}</p>
                </div>
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            7
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s7 === 4 ? "4.00" : s7}</p>
                </div>
                <div>
                    <div className="flex px-2 py-0 mb-1 bg-neutral rounded-box text-neutral-content">
                        <span className="font-bold font-mono text-3xl p-3 ">
                            8
                        </span>
                    </div>
                    <p className="font-semibold text-lg">{s8 === 4 ? "4.00" : s8}</p>
                </div>
            </div>
        </div>
    );
}
