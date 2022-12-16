import "./app.css";
import About from "./components/About/About";
import Conect from "./components/Conect/Conect";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
  
  return (
    <div className="App">
       
    <Header/>
    <Home mypage="Home"/>
    <About mypage="About"/>
    <Conect mypage="Conect"/>
    
    </div>
  );
}

export default App;
