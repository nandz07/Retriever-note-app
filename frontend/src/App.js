
import './App.css';
// import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements,Outlet} from 'react-router-dom'
import { Fragment } from 'react';

// import { LandingPage } from './screens/LandingPage/LandingPage';
import Home from './components/Home';
import Data from './components/Data';
import MyNotes from './screens/MyNotes/MyNotes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}/>
        <Route path='/data' element={<Data />}/>
        <Route path='/mynotes' element={<MyNotes />}/>
        
      </Route>
    )
  )
  return (
    <Fragment>
      
      <RouterProvider router={router}/>
     
    </Fragment>
  );
}

const Root=()=>{
  return(
    <>
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />
    </>
  )
}
export default App;
