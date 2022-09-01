import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";
import {getDoc, doc, setDoc, addDoc, collection, getDocFromCache} from 'firebase/firestore';
import {db} from "../data/json/key"
import { contains } from "@firebase/util";
import {SeatContext, useSeatContext} from '../Providers/SeatProvider';
import {OrderContext, useOrderContext} from '../Providers/OrderProvider'
import "./page-css/Room.css"


const Room = ()=> {
    //? ================= read data ==============================
    const [newdata, setNewdata] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    const read_data = async () => {

      const docRef = doc(db, "movies", orderpro[0].name);

      try {
          const doc = await getDoc(docRef);
          setNewdata(doc.data().seatA)
        //   console.log("Cached document data:", doc.data().seatA);
        } catch (e) {
            setNewdata(seatA)
            // console.log("Error getting cached document:", e);
        } finally {
          setLoading(false)
        }
    }
    useEffect(() => {
        read_data();
    },[])
    // useEffect(() => {
    //     console.log("#####", newdata)
    // },[newdata])
    
    //! ============ order pagees awch bga data ===========================
    const {orderpro, setOrderpro} = useContext(OrderContext); 
    console.log("!!!!!!!!!!!!!!!", orderpro[0].name)
    //! ============ suudal hesgiin data =====================
    const {seatA, setSeatA, seatB, setSeatB, seatC, setSeatC} = useSeatContext();
    const [value,setValue] = useState({})
    // console.log('uu', seatA)
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
        
            const newState = [...newdata]
            newState[el.target.id] = xx
            setNewdata("")
            setNewdata(newState)
           
        
        // console.log("???????????????", seatA)    
    }
    useEffect(() => {
        console.log("111111111111", newdata)
    },[newdata])
    //!===================== firebase ==========================
    const onclick = async () =>{
        await setDoc(doc(db, "movies", orderpro[0].name), {
           seatA: newdata
        }   );

    }

    return(
        <div className="Roomcontainer">
            <div className="sandal">
                <h1>Suudal songoh</h1>
                <div className="seatcon">
                    <div className="seat1">
                        {!loading && newdata.map((element, index) => {
                            console.log("@@@@@@@@@@@@@@@", element.type)
                            const container = element.type ? {display: 'none'} : {display: 'block'};
                            return(
                                <div className="none_div" >
                                    <button style={container} className="clickbox" id={index} onClick={change} onChange={(e) => console.log("===========", e)} ></button>
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