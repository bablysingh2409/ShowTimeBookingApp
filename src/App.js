import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children:[
      {
        path:'/',
        element:<ShowList/>
      },
      {
        path:'/show-details/:id',
        element:<ShowDetails/>
      }
    ]
  }
])
 
  return (
    <RouterProvider router={router}>
    <div className="">
    </div>
    </RouterProvider>
  );
}

export default App;
