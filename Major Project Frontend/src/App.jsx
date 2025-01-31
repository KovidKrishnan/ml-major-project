import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import About from "./components/About";
import Documents from './components/Documents'
import Home from "./components/Home.jsx"
import Code from "./components/Code.jsx"
import Team from "./components/Team.jsx"
import NotFound from "./components/NotFound.jsx"
import MultiResponseAPI from "./components/MultiResponseAPI.jsx";
function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/code" element={<Code />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/backend" element={<MultiResponseAPI/>}/>
      </Routes>
    </Router>
  );
}

export default App;
