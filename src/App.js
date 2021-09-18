import React from 'react';
import CreatePassenger from './Passenger/CreatePassenger'
import FlightDetails from './FlightDetails/FlightDetails';
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './Passenger/UserLogin';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'

const App = () => {
  return (

      <div className="App">
          <Header/>
          <header className="App-header">
          </header>
            <Switch>
              <Route
                  exact
                  path='/schedule'
                  render={(props) => <FlightDetails {...props} />} />

              <Route
                  exact
                  path='/login'
                  render={(props) => <UserLogin {...props} />} />
                <Route
                    exact
                    path='/register'
                    render={(props) => <CreatePassenger {...props} />} />

                <Route
                    exact
                    path='/admin'
                    render={(props) => <AdminLogin {...props} />} />
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
