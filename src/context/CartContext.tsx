import React,{createContext, useContext, useReducer} from "react";

type Product = {id: number; name: string; price: number; quantity?: number, image: string, status: string;}

type State = {items: Product[]};

type Action = 
| {type: 'ADD_ITEM'; payload: Product}
| {type: 'REMOVE_ITEM'; payload: number}
| {type: 'UPDATE_QTY'; payload: {id: number; quantity: number}}
| {type: 'CLEAR'};

const initialState: State = {items: []};

function reducer(state: State, action: Action): State {
    console.log("Reducer called with", action);
    switch (action.type) {
        case 'ADD_ITEM': {
            try {
                const found = state.items.find((i)=> i.id === action.payload.id);
                if (found) {
                    return {
                        items: state.items.map(i => 
                            i.id === action.payload.id ? {...i, quantity: (i.quantity || 1) + (action.payload.quantity||1)}: i),
                    }
                }
                return {...state, items: [...state.items, {...action.payload, quantity: action.payload.quantity || 1}]};
            } catch (error) {
                console.error(error)
            }
        }
        case 'REMOVE_ITEM':
            return {items: state.items.filter((i) => i.id !== action.payload)};
        case 'UPDATE_QTY':
            return {items: state.items.map((i) => (i.id === action.payload.id ? {...i, quantity: action.payload.quantity} : i))};
        case 'CLEAR':
            return {items: []};
        default:
            return state;
    }
}

interface CartContexttype{
    items: Product[];
    addItem: (p: Product) => void;
    removeItem: (id: number) => void;
    updateQty: (id: number, quantity: number) => void;
    clear: () => void;
    subtotal: number;
}

const CartContext = createContext<CartContexttype | undefined>(undefined);

export const CartProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addItem = (p: Product) => dispatch({type: 'ADD_ITEM', payload: p})
    const removeItem = (id: number) => dispatch({type: 'REMOVE_ITEM', payload: id})
    const updateQty = (id: number, quantity: number) => dispatch({type: 'UPDATE_QTY', payload: {id, quantity}})
    const clear = () => dispatch({type:'CLEAR'});

    const subtotal = state.items.reduce((s, i) => s + (i.price * (i.quantity||1)), 0);
    return(
        <CartContext.Provider value={{ items: state.items, addItem, removeItem, updateQty, clear, subtotal}} >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("use cart must be used within a cartprovider");
    }
    return context;
};