import { Link } from "react-router-dom"

const Card = ({ desc, title, link, btn, img }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <Link to={link} className="btn btn-primary">{btn}</Link>
                </div>
            </div>
        </div>
    )
}
export default Card