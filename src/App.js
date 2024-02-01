import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import BookingForm from "./components/BookingForm";

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
      },
      {
        path:'/book-show/:showName',
        element:<BookingForm/>
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
