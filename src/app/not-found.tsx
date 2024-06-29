import Link from "next/link";


export default function NotFoundPage() {
    return (
        <div>
            <div >
                404 Not Found <br />
                <Link href={'/'}>Home</Link>
            </div>
        </div >
    )
}
