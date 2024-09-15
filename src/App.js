import React from "react";
import ReactDOM from "react-dom/client"
import Header from './Components/Header';
import Body from './Components/Body'
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

import {RouterProvider, createBrowserRouter,Outlet} from 'react-router-dom';

const AppLayout=()=>{
    return(
        <div className="app">
             <Header/>
             <Outlet/>  {/*outlet contains the path link*/}
        </div>
    )
}
 const appRoute=createBrowserRouter([
       {
            path:"/",
            element:<AppLayout/>,
            
            children:[
               {
                    path:'/',
                    element:<Body/>
               },
               {
                    path:"/about",
                    element:<AboutUs/>
               },
               {
                path:"/contact",
                element:<ContactUs/>
               },
               {
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu/>
               }
            ],
            errorElement:<Error/>
            
       },
      
 ]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>)