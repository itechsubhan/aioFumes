
import './App.css';
import './components/card/First'
import Cl1 from './components/Cl1/Cl1';
import Cl2 from './components/Cl2/Cl2';
import Cl3 from './components/Cl3/Cl3';
import Navi from './components/Navbar/Navi';
// import Card from './components/card/Card.jsx';
function App() {
  return (
    <div className = "app">
    <Navi />
    <Cl1 />
    <Cl2 />
    <Cl3 />
    </div>
  );
}
export default App;
