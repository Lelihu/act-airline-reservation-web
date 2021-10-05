import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, {useState, useEffect,Component} from 'react';
import {TextField, Button} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cords: [
                {lat: 9.96233, lng: 49.80404},
                {lat: 6.11499, lng: 50.76891},
                {lat: 6.80592, lng: 51.53548},
                {lat: 9.50523, lng: 51.31991},
                {lat: 9.66089, lng: 48.70158}
            ]
        }
    }



    showMarkers = () => {
        return this.state.cords.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.lat,
                lng: store.lng
            }}
                           onClick={() => console.log("Clicked")} />
        })
    }

    render() {
        return (
            <div>
            <Map
                google={this.props.google}
                zoom={10}

                initialCenter={{
                    lat: 9.96233,
                    lng: 49.80404
                }}>
                {this.showMarkers()}
            </Map>

        <Map
            google={this.props.google}
            zoom={15}

            initialCenter={
                {
                    lat: 9.005401,
                    lng: 38.763611
                }
            }
        />
            </div>
    );
    }
}

export default GoogleApiWrapper({

    apiKey: 'AIzaSyBi6XiPideQFO0oyby1IT8YZ0xZ-F7Z-y4'
})(MapContainer);

