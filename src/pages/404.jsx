import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
	<div className="bg-[#FF6A3D] px-2 -mt-16 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
                <div className="flex flex-col items-center justify-center">                  
                    <p className="md:text-lg lg:text-xl text-gray-600 mt-8">Halaman yang antum tuju belum atau tidak tersedia</p>
                    <Link to="/" className="flex items-center space-x-2 btn btn-primary hover:bg-cyan-500 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150" title="Return Home">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Error