import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Level from "../pages/level"
import Exams2 from "../pages/exam2"
import Exams1 from "../pages/exam1"
import Error from "../pages/404"
import Creator from "../pages/creator"
import Canvas from "../pages/canvas"
import Result from "../pages/result"
const Path = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exams-class" element={<Level/>}/>
            <Route path="/exam-coding" element={<Exams2/>}/>
            {/* <Route path="/exam-7" element={<Exams1/>}/>
            <Route path="/creator" element={<Creator/>}/>
            <Route path="/canvas" element={<Canvas/>}/> */}
            <Route path="/hasil" element={<Result/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    )
}
export default Path