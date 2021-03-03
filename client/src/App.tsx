import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Mypage from './Components/Mypage';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Main from './Components/Main';

function App() {
  const [isMain, setIsMain] = useState<boolean>(true);
  return (
    <>
      {isMain ? (
        <div>
          <Route exact path="/">
            <Main setIsMain={setIsMain}></Main>
          </Route>
        </div>
      ) : (
        <div>
          <Nav />
          <Switch>
            <Route exact={true} path="/home">
              <Home />
            </Route>
            <Route exact={true} path="/login" render={() => <Login />} />
            <Route exact={true} path="/mypage" render={() => <Mypage />} />
            <Route exact={true} path="/signup" render={() => <Signup />} />
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
