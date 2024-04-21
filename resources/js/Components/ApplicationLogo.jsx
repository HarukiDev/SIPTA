import React, { useEffect, useState } from "react"; // Import React from the 'react' module
import { Link } from "@inertiajs/react";

export default function ApplicationLogo({ className1, className2 }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setTheme(currentTheme);
    }, []);

    return (
        <Link href="/dashboard" className={className1}>
            {theme === "light" ? (
                <img src="/images/Light-Logo.svg" alt="Logo" className={className2} />
            ) : (
                <img src="/images/Logo1.svg" alt="Logo" className={className2} />
            )}
        </Link>
    );
}
