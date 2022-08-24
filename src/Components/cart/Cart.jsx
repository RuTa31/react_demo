import './Cart.module.css';
import Introduction from '../../page/Introduction'
import { Link, navigate } from 'react-router-dom';
const Cart =({data})=>{
                return(
                <div className="mini_card">
                    <div className="image_page">
                        <img height='400px' className='ggg' src={data.imageUrl} alt="" />
                    </div>
                    <div className='mini_button'>
                        <div className='mini-text'>
                            <h3>{data.name}</h3>
                            <h3>{data.time + " " + data.kind}</h3>
                        </div>
                        <div className='button_conten'>
                            <Link to="introduction" state={data}>
                                <button className='button_gg' >Delgerengvi</button>
                            </Link>
                            
                            
                        </div>
                    </div>
                </div>
                )
}
export default Cart;


