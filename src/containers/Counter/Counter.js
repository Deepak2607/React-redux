import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  
    render () {
        return (
            <div>
            
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.inc1} />
                <CounterControl label="Decrement" clicked={this.props.dec1}  />
                <CounterControl label="Add 5" clicked={this.props.inc5}  />
                <CounterControl label="Subtract 5" clicked={this.props.dec5}  />
            </div>
            
            <div>
                <CounterControl label="Store Result" clicked={()=> this.props.storeResult(this.props.ctr)} />
            </div>
            
            {this.props.results.map(result =>
            <div key={result.id}>
            <p style={{marginBottom:'15px'}} >
            <button style={{backgroundColor:'white'}} onClick={()=>this.props.deleteResult(result.id)}>✖</button>
            &nbsp; Result is {result.counter}</p>
            </div>
            )}

            </div>
            
        );
    }
}

const mapStateToProps=(state)=> {
        return{
            ctr:state.ctr.counter,
            results:state.res.results
        }  
    }

    const mapDispatchToProps=(dispatch)=> {

        return{
            inc1:()=> dispatch({
                type:'INC_BY_1'
            }),
            inc5:()=> dispatch({
                type:'INC_BY_5',
                value:5
            }),
            dec1: () =>  dispatch({
                   type:"DEC_BY_1",
            }),
            dec5: () =>  dispatch({
                   type:"DEC_BY_5",
                   value:5
            }),
            storeResult: (res_counter) =>  dispatch({
                   type:"STORE_RESULT",
                   ctr:res_counter
            }),
            deleteResult: (resultId) =>  dispatch({
                   type:"DELETE_RESULT",
                   id: resultId
            })
        }
    }



export default connect(mapStateToProps,mapDispatchToProps)(Counter);