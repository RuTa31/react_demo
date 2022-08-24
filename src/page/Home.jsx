import './page-css/Home.css'
import Cart from '../Components/cart/Cart';
import json from '../data/json/MovieData2.json'
const Home =()=>{
    // console.log(json)
    return(
        <div className="home_container">
            {json.map((el)=>{
                return(
                    <>
                        <Cart data={el}/>
                    </>
                )
            })}
        </div>
    )
}
export default Home;