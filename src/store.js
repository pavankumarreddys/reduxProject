import { createStore } from "redux";

const initialData ={
    userName:"",
    mobile:"",
    balance:null
}

function accountReducer(state=initialData,action){
    switch(action.type){
        case "Deposit":
            return {...state,balance:state.balance+ +action.payload};
        case "Withdraw":
            return {...state, balance:state.balance - +action.payload};
        case "nameUpdate":
            return{...state,userName:action.payload};
        case "mobileUpdate":
            return {...state,mobile:action.payload};
        default:
            return state
    }

}

const store = createStore(accountReducer);

export default store;