import { Link } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <div>
            <div >
                404 Not Found <br />
                <Link to={'/'}>Home</Link>
            </div>
        </div >
    )
}
