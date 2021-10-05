import React from 'react';
import CreatePassenger from './Passenger/CreatePassenger'
import FlightDetails from './FlightDetails/FlightDetails';
import UserLogin from './Passenger/UserLogin';
import Reservation from './Passenger/Reservation';
import CreateReservation from './Passenger/CreateReservation';
import SearchSchedule from './Passenger/SearchSchedule';
import SearchSchedule2 from './Passenger/SearchSchedule2';
import Contacts from './Contacts/Contacts';
import CancelFlight from './Passenger/CancelFlight';
import MapContainer from './RouteMap/MapContainer';
import Home from './Home/Home';
import Rules from './Rules/Rules';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Video from './Video/Video';
import Header from './Header/Header'
import Footer from './Footer/Footer'

const App = () => {
  return (
      <div className="App">
          <Header/>
          <header className="App-header">
          </header>
          <div className="auth-wrapper">
              <div className="auth-inner">
              <Switch>
                <Route
                    exact
                    path='/'
                    render={(props) => <Home {...props} />} />
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
                    path='/contact'
                    render={(props) => <Contacts {...props} />} />
                <Route
                    exact
                    path='/video'
                    render={(props) => <Video {...props} />} />
                  <Route
                      exact
                      path='/rule'
                      render={(props) => <Rules {...props} />} />
                  <Route
                      exact
                      path='/search'
                      render={(props) => <SearchSchedule {...props} />} />
                  <Route
                      exact
                      path='/search2'
                      render={(props) => <SearchSchedule2 {...props} />} />
                  <Route
                      exact
                      path='/create'
                      render={(props) => <Reservation {...props} />} />
                  <Route
                      exact
                      path='/reserve'
                      render={(props) => <CreateReservation {...props} />} />
                  <Route
                      exact
                      path='/cancel'
                      render={(props) => <CancelFlight {...props} />} />
                  <Route
                      exact
                      path='/gmap'
                      render={(props) => <MapContainer {...props} />} />
          </Switch>
              </div>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
