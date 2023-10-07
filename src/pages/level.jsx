import Card from "../components/card"
import html from "../assets/html.png"

const Level = () => {
    const levels = [{
        title: "Kelas 7",
        description: "ujian untuk kelas 7",
        link: "/exam-7",
        btn: "Masuk", 
        img: html
    }, {
        title: "Kelas 8 dan 9",
        description: "ujian untuk kelas 8 dan 9",
        link: "/exam-coding",
        btn: "Masuk",
        img: html
    }]
    return (
        <div className="hero min-h-screen bg-base-200 flex justify-center space-x-3">
            {levels.map((kelas, key) => {
                return (
                    <Card key={key} title={kelas.title} desc={
                        kelas.description
                    } link={kelas.link} btn={kelas.btn} img={kelas.img} />
                )
            })}
        </div>
    )
}
export default Level