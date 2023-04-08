
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbo from './components/Jumbo';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Copyright from './components/Copyright';


function App() {
  return (


    <>
      <div>

        <div style={{ margin: "10px" }}>
          <Navbar />
        </div>

        <div style={{ margin: "50px", marginBottom: "150px" }}>
          <Jumbo />
        </div>

        <div style={{ margin: "50px", display: "flex" }}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>

        <div style={{textAlign: 'center' }}>
          <Copyright />
        </div>

      </div>
    </>
  )
}

export default App;
