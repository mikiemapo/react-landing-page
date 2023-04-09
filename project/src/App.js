
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

        <div>
          <Navbar />
        </div>


        <div style={{margin: "50px"}}>
              <div>
                <Jumbo />
              </div>

              <div style={{display: "flex" }}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
        </div>


        <div>
          <Copyright />
        </div>

      </div>
    </>
  )
}

export default App;
