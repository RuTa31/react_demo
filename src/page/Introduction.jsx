import './page-css/Introduction.css'
import { Link, useLocation } from 'react-router-dom'
const Introduction = ()=> {
    const loc= useLocation();
    // console.log("%%%%%%%%%%%%", loc)
    return(
        <div>
            <div className="order_page">
                <div className="order_image">
                    <div className="order_image_conten">
                        <img className="gg_gg" src={loc.state.imageUrl} alt="gg" />
                    </div>
                </div>
                <div className="order_text_about">
                    <div className="order_text_json">
                        <h3>{loc.state.name}</h3>
                        <h3>{loc.state.kind}</h3>
                        <h3>{loc.state.time}</h3>
                        <h3>{loc.state.content}</h3>
                    </div>
                    <div>
                        <Link to="/order" state={loc.state}>
                            <button className="order_button_1">zahialah</button>
                        </Link>
                        <Link to="/">
                            <button className="order_button_1">back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Introduction;