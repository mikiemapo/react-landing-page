
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbo from './components/Jumbo';
import Cards from './components/Cards';


function App() {
  return (
    <>
    <div style={{margin: "50px"}}>     
      <Jumbo/>
    </div>
    
    <div style={{margin: "50px",display: "flex"}}>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
   
    
    </>
    )
}

export default App;
