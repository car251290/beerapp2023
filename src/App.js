import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Beers from "./Pages/Beers/Beers";
import Details from "./Pages/Details/Details";
import CollapsibleExample from "./Pages/CollapseDetails/CollapsibleExample";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:id" element={<Details />} />
          <Route path="/Collapse/:id" element={<CollapsibleExample/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
