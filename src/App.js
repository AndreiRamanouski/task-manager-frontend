import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Taskpage from "./pages/taskpage/taskpage.component";
import DetailsPage from "./pages/detailspage/detailspage.component";
import CreateTaskPage from "./pages/createtaskpage/createtaskpage.component";
import AddUserPage from "./pages/adduserpage/adduserpage.component";
import SigninAndSignupPage from "./pages/signin-and-signup-page/signin-and-signup-page.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/tasks' element={<Taskpage/>}/>
        <Route path='/tasks/:taskId' element={<DetailsPage/>}/>
        <Route path='/tasks/create' element={<CreateTaskPage/>}/>
        <Route path='/users' element={<AddUserPage/>}/>
        <Route path='/signin' element={<SigninAndSignupPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
