import { createContext, useState, useContext } from "react";
export const OrderContext = createContext();
export const OrderProvider = ({children}) => {
    const [orderpro, setOrderpro] = useState("")
    return (
        <OrderContext.Provider value={{orderpro, setOrderpro}}>
            {children}
        </OrderContext.Provider>
    )
}
export const useOrderContext = () => useContext(OrderContext);