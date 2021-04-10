import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import User from "./Components/User"
import AdditoinalDocument from "./Components/AdditoinalDocument"
import Collections from "./Components/Collections";
import Communication from './Components/Communication';
import LoanApplication from './Components/LoanApplication';
import IOT from './Components/IOT'
import Insurance from './Components/Insurance'
import Loans from './Components/Loans'
import Remark from './Components/Remark'
function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/"> Home</Link>
        <Link to="/Collections">Collections</Link>
        <Link to="/additionalDocument">AdditoinalDocument</Link>
        <Link to="/communication">Communication</Link>
        <Link to="/insurance">nsurance</Link>
        <Link to="/iot">IOT</Link>
        <Link to="/loanApplication">LoanApplication</Link>
        <Link to="/loans">Loans</Link>
        <Link to="/remark">Remark</Link>
        <Switch>
          <Route exact path="/"><User /></Route>
          <Route exact path="/Collections"><Collections /></Route>
          <Route exact path="/additionalDocument"><AdditoinalDocument /></Route>
          <Route exact path="/communication"><Communication /></Route>
          <Route exact path="/insurance"><Insurance /></Route>
          <Route exact path="/iot"><IOT /></Route>
          <Route exact path="/loanApplication"><LoanApplication /></Route>
          <Route exact path="/loans"><Loans /></Route>
          <Route exact path="/remark"><Remark /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
