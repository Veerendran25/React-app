import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Club1 from './Club-1.jsx'
import Club2 from './Club-2.jsx'
import Club3 from './Club-3.jsx'
import Club4 from './Club-4.jsx'
import Club5 from './Club-5.jsx'
import Club6 from './Club-6.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> 
  },
  {
    path: "Header",
    element:<Header/> 
  }
  ,
  {
    path:"Club1",
    element:<Club1/>
  }
  ,
  {
    path:"Club2",
    element:<Club2/>
  }
  ,
  {
    path:"Club3",
    element:<Club3/>
  }
  ,
  {
    path:"Club4",
    element:<Club4/>
  }
  ,
  {
    path:"Club5",
    element:<Club5/>
  }
  ,
  {
    path:"Club6",
    element:<Club6/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
