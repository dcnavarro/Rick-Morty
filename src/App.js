import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import SearchBar from "./components/SearchBar/SearchBar"
import Home from "./components/Home/Home"
import CreateCharacter from './components/CreateCharacter/CreateCharacter';


function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar />
      <SearchBar />
      <Routes>
      <Route exact path="/" component={Home}></Route>
      <Route path="/character/:id" component={Card}></Route>
      <Route exact path= "/character/create" component={CreateCharacter}></Route>
      </Routes>
    </div>
  )
}

export default App;
