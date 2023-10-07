import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Ahlan Wa Sahlan</h1>
                    <p className="py-6">selamat datang di platform ujian berbasis komputer</p>
                    <Link to={'/exams-class'} className="btn btn-primary">Mulai Ujian</Link>
                </div>
            </div>
        </div>
    )
}
export default Home