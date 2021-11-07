 import React, { Component } from 'react'
 const Heading =()=>{
    return (
         <h1>Add two Numbers</h1>
     );
 }

const Input =  class  extends React.Component{
  
    constructor (){
        super()
        this.state = {input1:0 ,input2:0 }
        this.handeler=(e)=>{
            console.log(e);
        this.setState({[e.target.id]:e.target.value})  /*[e.target.id]*key word */
    }
    } 
    
    render (){
         console.log(this.state);
        return (
           
            <div>
                <input type='number' placeholder='Enter first Number' 
                value={this.state.input1} onChange={this.handeler} id='input1'></input>
                <br/>
                 <input type='number' placeholder='Enter second Number' 
                value={this.state.input2} onChange={this.handeler}id='input2'></input>
                <br/>
                <button type='button'onClick={()=>{this.props.sum(this.state.input1 ,this.state.input2)}}>show Result</button>  
            </div>
        )}

    
}
 



const Result =({ item })=>{
    return (
        <div>
            <p> Result  is : {item}</p>
        </div>
    )
}




export default class Form extends React.Component {
    constructor(){
            super()

         this.state={input :''}

         this.sum =(n1,n2)=>{
           let sum =Number(n1) + Number(n2);
           console.log(sum);
           this.setState({input:sum})


         }
          
    }

    render(){

        return (
            <div>
                <Heading/>
               
                <Input sum={this.sum}/>
                <br/>
             
                <Result item={this.state.input}/>
            </div>
        )
    }
}
