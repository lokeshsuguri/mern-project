import Update from './updateuser/Update';
import AddUser from './adduser/AddUser';
import './App.css';

import User from './getUser/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const route=createBrowserRouter([
  {
    path: '/',
    element: <User/>
  },
  {
    path: '/add',
    element: <AddUser/>
  },
  {
    path: '/update/:id',
    element: <Update/>
  }
  ]);

  return (
    <div className="App">
     
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
