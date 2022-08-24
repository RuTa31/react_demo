import './page-css/  Oder.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import {OrderContext, useOrderContext} from '../Providers/OrderProvider'


console.log()
const Order_page = ()=> {
    const {orderpro, setOrderpro} = useContext(OrderContext);
    const data = useLocation();
    const[name1, setName1] = useState('');
    const[pnumber, setPnumber] = useState('');
    const[mail, setMail] = useState('');
    const[too, setToo] = useState('');
    const[changeData, setChangeData] = useState('');
    useEffect(()=>{
        console.log("6666666666666666666999999", orderpro);
    },[orderpro])
    const [bottol, setBottol] = useState(true)
    const change = () => {
        setOrderpro([...orderpro, {
            'id' : data.state.id,
            'name' : data.state.name,
            'URl' : data.state.imageUrl,
            'content' : data.state.content,
            'humanName' : name1,
            'Phone' : pnumber,
            'mail' : mail,
            'too' : too
        }])
        setBottol(false)
    }


    return(
        <div>
            <div className="order_page">
                <div className="order_image">
                    <div className="order_image_conten">
                        <img className="gg_gg" src={data.state.imageUrl} alt="gg" />
                    </div>
                </div>
                <div className="order_text_about">
                    <div>
                        <h1>{data.state.name}</h1>
                        <form>
                            <label>name</label><br />
                            <input type="text" name="name"  onChange={(e)=> setName1(e.target.value)} /><br />
                            <label>phone number</label><br />
                            <input type="text" name="phonenumber" onChange={(e)=> setPnumber(e.target.value)} /><br />
                            <label>e-mail</label><br />
                            <input type="text" name="mail" onChange={(e)=> setMail(e.target.value)} /><br />
                            <label>number</label><br />
                            <input type="number"  id="tentacles" name="number" min="1" max="100" onChange={(e)=> setToo(e.target.value)}></input><br />
                            <br /><br />
                        </form>
                    </div>
                    <div>
                        <>
                            {bottol ?
                                <button className="order_button_1" onClick={change}>hadgalhuu</button>
                            :
                                <Link to="/Room" >
                                    <button className="order_button_1" >zahialah</button>
                                </Link>
                            }
                        </>
                        <Link to="/introduction">
                            <button className="order_button_1">back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order_page;
