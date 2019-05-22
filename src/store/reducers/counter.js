const initialState= {
    counter:0,
}

const counterReducer=(state=initialState, action)=> {
    
    if(action.type==="INC_BY_1"){
        return{
            ...state,
            counter:state.counter+1
        }
    }else if(action.type==="INC_BY_5"){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }else if(action.type==="DEC_BY_1"){
        return{
            ...state,
            counter:state.counter-1
        }
    }else if(action.type==="DEC_BY_5"){
        return{
            ...state,
            counter:state.counter-action.value
        }
    }
    
    
    return state;
}

export default counterReducer;