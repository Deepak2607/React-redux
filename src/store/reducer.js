const initialState= {
    counter:0,
    results:[]
}

const reducer=(state=initialState, action)=> {
    
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
    }else if(action.type==="STORE_RESULT"){
        return{
            ...state,
            results:state.results.concat({id: Date.now(), counter: state.counter}),
        }
    }else if(action.type==="DELETE_RESULT"){
        
        const updatedItems= state.results.filter((item)=>{
            return item.id!==action.id
        })
        return{
            ...state,
            results:[].concat(updatedItems)
        }
    }
    
    return state;
}

export default reducer;