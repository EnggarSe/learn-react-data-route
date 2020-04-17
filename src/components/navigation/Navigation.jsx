import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

export default class Navigation extends Component {
   render() {
      return (
         <nav>
            <ul>
               <li>
                  <Link to="/">Todos</Link>
               </li>
               <li>
                  <Link to="/register">Daftar</Link>
               </li>

            </ul>
         </nav>
      )
   }
}
