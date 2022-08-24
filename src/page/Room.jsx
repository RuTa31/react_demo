import { useContext, useState } from "react"
import { useLocation } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";
import {getDoc,doc, setDoc} from 'firebase/firestore';
import {db} from "../data/json/key"
import { contains } from "@firebase/util";
import {SeatContext, useSeatContext} from '../Providers/SeatProvider';
import {OrderContext, useOrderContext} from '../Providers/OrderProvider'
import "./page-css/Room.css"
const Room = ()=> {
    const {orderpro, setOrderpro} = useContext(OrderContext);
    // const {seat}= useContext(SeatContext)
    const {seatA, setSeatA, seatB, setSeatB, seatC, setSeatC} = useSeatContext();
    console.log("%%%%%%%%%%%", orderpro)
    const change = (el, index) => {
        if (el == true) {
            el=false
        }
        console.log("???????????????", seatA)
        el.target.style.visibility = 'hidden'
    }
    return(
        <div className="Roomcontainer">
            <div className="sandal">
                <h1>Suudal songoh</h1>
                <div className="seatcon">
                    <div className="seat1">
                        <label> A</label>
                        {seatA.map((el, index) => {
                            console.log("@@@@@@@@@@@@@@@", el)
                            const visibilityState = el==true ? "visible" : "hidden";
                            return(
                                // <button style={{visibility: seatA[index]== ? el.target.style.visibility = "visible" : el.target.style.visibility = "hidden"}} className="clickbox" id={index} onClick={(el)=> el.target.style.visibility = 'hidden'}></button>
                                <button style={{visibility: visibilityState}} className="clickbox" id={index} onClick={(el) => change(el)} ></button>
                                
                                )
                        })}
                        <label> A</label><br /><br />
                    </div>
                    <div className="seat1">
                        <label> B</label>
                        {seatB.map((el, index) => {
                            return(
                                <button className="clickbox" id={index} onClick="sd"></button>
                            )
                        })}
                        <label> B</label>
                    </div>
                    <div className="seat1">
                        <label> C</label>
                        {seatC.map((el, index) => {
                            return(
                                <button className="clickbox" id={index} onClick={(el)=> el.target.style.visibility = 'hidden'}></button>
                            )
                        })}
                        <label> C</label>
                    </div>
                </div>
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