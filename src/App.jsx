import SignLog from '../components/SignLog'
import Login from '../components/Login'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignLog/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
        </Switch>
      </Router>
      
    </>
  )
}

export default App
