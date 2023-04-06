import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
