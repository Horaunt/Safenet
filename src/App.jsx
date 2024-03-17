import SignLog from '../components/SignLog'
import Login from '../components/Login'
import Landing from '../components/Landing';
import SignUp from '../components/SignUp'

import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/signlog" exact>
            <SignLog/>
          </Route>
        </Switch>
      </Router>
      
    </>
  )
}

export default App
