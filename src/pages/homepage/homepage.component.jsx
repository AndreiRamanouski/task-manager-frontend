import React from "react";
import './homepage.style.scss';

import Introduction from "../../components/introduction/introduction.component";

const HomePage = () => (
    
  <div className="homepage">
    <h1>Welcome to Task Manager</h1>

    <div className="introduction-cotainer">
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
    text='Create tasks for your company'
    actionUri='/tasks/create'
    />
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
    text='Assign users'
    actionUri='/tasks/create'
    />
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' 
    text='Manage your tasks'
    actionUri='/tasks'
    />
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1611095564985-89765398121e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
    text='Add new users'
    actionUri='/users'
    />
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
    text='Stay up-to-date-'
    actionUri='/tasks'
    />
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
    text='Any time anywhere'
    actionUri='/tasks'
    />    
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
    text='Report to your customers'
    actionUri='/tasks'
    /> 
    <Introduction 
    imagesrc='https://images.unsplash.com/photo-1560131914-2e469a0e8607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
    text='Improve your workflow'
    actionUri='/tasks'
    />
    
    </div>
  </div>
)

export default HomePage;