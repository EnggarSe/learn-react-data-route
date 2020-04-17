import React, { Component } from 'react'
import Moment from "moment"
import './form.css'

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todo: "",
      };
   }
   handleChange = (event) => {
      this.setState({
         todo: event.target.value
      });
      // const inputName = event.target.value;
      // this.setState((prevState) =>({
      //    ...prevState,
      //    name : inputName,
      // })); Cara 2
   };
   handleSubmit = (event) => {
      event.preventDefault();
      const todos = localStorage.getItem("todo");
      const todoData = {
         todo: this.state.todo,
         ceatedAt: Moment().format("MMMM Do YYYY"),
      };
      const getLocalStorage = todos === null ? [] : JSON.parse(todos);
      getLocalStorage.push(todoData);

      localStorage.setItem("todo", JSON.stringify(getLocalStorage));

      window.location.reload();
      alert(JSON.stringify(todoData))
   }

   editTodo = (index) => {
      const todos = JSON.parse(localStorage.getItem("todo"));
      const todoNew = prompt("masukan todo baru");

      const newTodo = {
         todo: todoNew,
         ceatedAt: Moment().format("MMMM Do YYYY"),
      }
      todos.splice(index, 1, newTodo);
      localStorage.setItem("todo", JSON.stringify(todos));
      window.location.reload();
   }
   hapusTodo = (index) => {
      const confirmBox = window.confirm("Yakin Untuk Hapus");      
      if (confirmBox === true) {
         const todos = JSON.parse(localStorage.getItem("todo"));
         todos.splice(index, 1);
         console.log(typeof todos.length);
         
         localStorage.setItem("todo", JSON.stringify(todos));
       
      }


   }

   render() {
      const todos = JSON.parse(localStorage.getItem("todo"));
      console.log(todos);

      return (
         <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
               <form onSubmit={this.handleSubmit}>
                  <input type="text" name="name" placeholder="todo" onChange={this.handleChange} defaultValue={this.state.name} />
                  <button type="submit">Masuk</button>
               </form>
            </div>
            <div>
               {Array.isArray(todos) ? todos.map((element, index) => {
                  return (
                     <div id="mainContent" style={{ display: "flex", justifyContent: "center", }} key={index}>
                        <div>
                           <p>{element.todo}</p>
                        </div>
                        <div>
                           <button onClick={() => { this.editTodo(index); }}>Edit</button>
                           <button onClick={() => { this.hapusTodo(index); }}>Hapus</button>
                        </div>

                     </div>
                  )
               }) : <p>Data Bukan Array</p>}
            </div>
         </div>
      )
   }
}
