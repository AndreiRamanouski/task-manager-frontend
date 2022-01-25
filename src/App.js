import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Taskpage from "./pages/taskpage/taskpage.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/tasks' element={<Taskpage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
