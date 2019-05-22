const initialState= {
    results:[]
}

const resultReducer=(state=initialState, action)=> {
    
    if(action.type==="STORE_RESULT"){
        return{
            ...state,
            results:state.results.concat({id: Date.now(), counter: action.ctr}),
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

export default resultReducer;