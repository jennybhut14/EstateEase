// import "./layout.scss"
import Homepage from "./routes/homepage/Homepage";
import {Layout, RequireAuth } from "./routes/layout/Layout";
import Listpage from "./routes/listPage/Listpage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
import Profilepage from "./routes/profilepage/Profilepage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Profupdate from "./routes/profupdate/Profupdate";
import NewPostPage from "./routes/newPostPage/NewPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout/>
      ),
      children:[
        {
          path:"/",
          element:(<Homepage/>)
        },
        {
          path:"/list",
          element:(<Listpage/>),
          loader : listPageLoader
        }, 
        {
          path:"/:id",
          element:(<SinglePage/>),
          loader :singlePageLoader
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/",
      element:( <RequireAuth/>),
      children:[
        {
          path:"/profile",
          element:(<Profilepage />),
          loader : profilePageLoader
        },
        {
          path:"/profile/update",
          element : <Profupdate/>
        },
        {
          path:"/add",
          element : <NewPostPage/>
        }
      ]
    }
  ]);


  return (
  
    <RouterProvider router={router}/> 
  )
}

export default App; 