import './App.css';
import React from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Feed from "./components/Feed/Feed"
import Widgets from "./components/Widgets/Widgets"
import Login from "./components/Login/Login"
import { useStateValue } from './StateProvider';

function App ()
{
  // user from the dispatch from login 
  const [{user}, dispatch]= useStateValue()

  return (
    <div className="app">
     {/* if there is not user render the login page else render the header, sidebar feed .... */ }
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>

    
  );
}

export default App;
