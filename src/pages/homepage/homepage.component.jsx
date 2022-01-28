import React from "react";
import './homepage.style.scss';

import Introduction from "../../components/introduction/introduction.component";

const HomePage = () => (
    
  <div className="homepage">
    <h1>Welcome to Task Manager</h1>

    <div className="introduction-cotainer">
    <Introduction imagesrc='' text='Create tasks for your company'/>
    <Introduction imagesrc='' text='Assign users'/>
    <Introduction imagesrc='' text='Manage your tasks'/>
    <Introduction imagesrc='' text='Add new users'/>
    <Introduction imagesrc='' text='Stay up-to-date'/>
    <Introduction imagesrc='' text='Assign tasks any time anywhere'/>    
    <Introduction imagesrc='' text='Report to your customers'/>    
    <Introduction imagesrc='' text='Improve your workflow'/>
    
    </div>
  </div>
)

export default HomePage;