import { createContext, useContext, useState } from "react";

export const SeatContext = createContext();

export const SeatProvider = ({children}) => {
    
    const [seatA, setSeatA] = useState( new Array(20).fill({
        'id' : "",
        'type': "",
        'name' : "",
        'content' : "",
        'humanName' : "",
        'Phone' : "",
        'mail' : "",
        'too' : "",
    }) );
    const [seatB, setSeatB] = useState( new Array(20).fill('') );
    const [seatC, setSeatC] = useState( new Array(20).fill('') );
    

    return (
        <SeatContext.Provider value={{seatA, setSeatA, seatB, setSeatB, seatC, setSeatC}}>
            {children}
        </SeatContext.Provider>
    )
}

export const useSeatContext = () => useContext(SeatContext);


