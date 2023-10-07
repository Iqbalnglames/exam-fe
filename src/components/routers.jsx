import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Level from "../pages/level"
import Exams2 from "../pages/exam2"
import Exams1 from "../pages/exam1"
import Error from "../pages/404"
const Path = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exams-class" element={<Level/>}/>
            <Route path="/exam-coding" element={<Exams2/>}/>
            <Route path="/exam-7" element={<Exams1/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    )
}
export default Path