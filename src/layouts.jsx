import Navbar from "./components/navbar"
import Path from "./components/routers"
import Toast from "./components/toast"

const Layouts = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[70px]">
                <Path />
            </div>
        </>
    )
}
export default Layouts