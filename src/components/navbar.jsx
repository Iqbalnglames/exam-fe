import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-lg fixed z-10 top-0">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Exams</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/hasil'}>Hasil Akhir</Link></li>
                    <li>
                        <details>
                            <summary>
                                Pilih Kelas
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><Link to={'exam-7'}>Kelas 7</Link></li>
                                <li><Link to={'exam-coding'}>Kelas 8 dan 9</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar