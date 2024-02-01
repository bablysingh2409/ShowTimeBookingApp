import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import ShowList from "./components/ShowList";

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children:[
      {
        path:'/',
        element:<ShowList/>
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
