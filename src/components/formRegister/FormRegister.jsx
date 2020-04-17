import React, { Component } from 'react'

export default class FormRegister extends Component {
   constructor (props){
      super(props);
      this.state = {
         name : "",
         email : "",
      }
   }
   
   handleSubmit = (event) =>{
      event.preventDefault();
      const dataUser = {
         name : this.state.name,
         email : this.state.email,
      }
      alert(JSON.stringify(dataUser))
   }
   handleChange = (event)=>{
      const eventValue = event.target.value;
      const eventName = event.target.name;
      console.log(eventName);
      this.setState({
         [eventName]:eventValue
      });

      // this.setState((prevState) =>({
      //    [eventName] : eventValue,
      // })); Cara 2
      
   }
   
   render() {
      return (
         <div style ={{display:"flex", justifyContent:"center"}}>
            <form onSubmit={this.handleSubmit}>
               <input type="text" name="name" placeholder="name" onChange ={this.handleChange}/>
               <input type="email" name ="email" placeholder="email" onChange ={this.handleChange}/>
               <input type="text" name="username" placeholder="username" onChange ={this.handleChange}/>
               <button type="submit">Daftar</button>
            </form>
         </div>
      )
   }
}
