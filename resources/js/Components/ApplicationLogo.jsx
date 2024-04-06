import { Link } from "@inertiajs/react"

export default function ApplicationLogo({ className1, className2 }) {
    return (
        <Link href="/dashboard" className={className1}>
            <img src="/images/logo.svg" alt="Logo" className={className2} />
        </Link>
    );
}
