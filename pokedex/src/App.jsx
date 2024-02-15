
import './App.css'
import IndPokemon from './IndPokemon';
import MainPage from './MainPage';
import Pokelist from './Pokelist';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = [{
  path : '/' , 
  element : <MainPage />
} , 
{
  path : '/pokemon/:pokemon' , 
  element : <Pokelist />
} , 
{
  path : '/Individual/:Individual' ,
  element : <IndPokemon />
}];

const router = createBrowserRouter(routes);

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
