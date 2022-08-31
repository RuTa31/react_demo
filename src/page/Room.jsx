import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";
import {getDoc,doc, setDoc, addDoc, collection} from 'firebase/firestore';
import {db} from "../data/json/key"
import { contains } from "@firebase/util";
import {SeatContext, useSeatContext} from '../Providers/SeatProvider';
import {OrderContext, useOrderContext} from '../Providers/OrderProvider'
import "./page-css/Room.css"


const Room = ()=> {
    //! ============ order pagees awch bga data ===========================
    const {orderpro, setOrderpro} = useContext(OrderContext); 
    // console.log("!!!!!!!!!!!!!!!", orderpro[0].name)
    //! ============ suudal hesgiin data =====================
    const {seatA, setSeatA, seatB, setSeatB, seatC, setSeatC} = useSeatContext();
    const [value,setValue] = useState({})
    console.log('uu', seatA)
    //! ============ data oorchilj bga heseg =================
    const change = (el, index) => {
        const xx = {
            'id' : el.target.id,
            'type': true,
            'name' : orderpro[0].name,
            'content' : orderpro[0].content,
            'humanName' : orderpro[0].humanName,
            'Phone' : orderpro[0].Phone,
            'mail' : orderpro[0].mail,
            'too' : orderpro[0].too
        }   
        
            const newState = [...seatA]
            newState[el.target.id] = xx
            
            setSeatA(newState)
        
        console.log("???????????????", seatA)    
    }
    useEffect(() => {
        console.log("111111111111", seatA)
    },[seatA])
    //!===================== firebase ==========================
    const onclick = async () =>{
        const namegg = orderpro[0].name
        const newCityRef = doc(collection(db, `movs${namegg}`));
        await setDoc(doc(db, "movies", orderpro[0].name), {
           seatA: seatA
        }   );
        
        // const movie = doc(db, "movies", orderpro[0].name);
        // await setDoc(movie ,{nem: orderpro[0].name, nnnn: orderpro[0].URL} );  
        // console.log("tes")
      
    }

    return(
        <div className="Roomcontainer">
            <div className="sandal">
                <h1>Suudal songoh</h1>
                <div className="seatcon">
                    <div className="seat1">
                        {seatA.map((element, index) => {
                            console.log("@@@@@@@@@@@@@@@", index)
                            // const visibilityState = el.visibility==true ? "visible" : "hidden";
                            return(
                                <div className="none_div">
                                    <button className="clickbox" id={index} onClick={change} onChange={(e) => console.log("===========", e)} ></button>
                                </div>
                                )
                        })} 
                    </div>
                </div>
                    <button onClick={onclick}>click me</button>
            </div>
            <div className="batalga">
                <h1>Songol batalgaajuulah heseg</h1>
                <div className="batContainer">
                    <div className="Medeelel">
                        <h3>Ner: </h3>
                        <h3>{orderpro[0].humanName}</h3>
                        <h3>kino: </h3>
                        <h3>{orderpro[0].name}</h3>
                        <h3>e-mail: </h3>
                        <h3>{orderpro[0].mail}</h3>
                        <h3>utas: </h3>
                        <h3>{orderpro[0].Phone}</h3>
                    </div>
                    <div className="room_zurag">
                        <img height="50%" src={orderpro[0].URL} alt="" />
                        <h3>hasjkdfhjkhs</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Room;