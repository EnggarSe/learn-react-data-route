import React from 'react';
import Form from './components/form/Form'
import Navigation from './components/navigation/Navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FormRegister from "./components/formRegister/FormRegister"

function App() {
   return (
      <Router>
         <Navigation/>
         <h1 style ={{textAlign:"center"}}>Learn Form</h1>
         <Switch>
            <Route path='/register'>
               <FormRegister/>
            </Route>
            <Route path = '/'>
               <Form/>
            </Route>
         </Switch>

      </Router>
   );
}

export default App;
