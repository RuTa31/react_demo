import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./page/Home";
import Introduction from "./page/Introduction";
import Order_page from "./page/Order_page";
import Room from "./page/Room";
import Header from "./Components/Headers/Headers.jsx"
function App() {
  return (
    <div>
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/introduction" element={<Introduction />}/>
              <Route path="/order" element={<Order_page />}/>
              <Route path='/Room' element={<Room />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
