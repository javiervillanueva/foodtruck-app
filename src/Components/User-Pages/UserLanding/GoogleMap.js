import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import '../UserLanding/reset.css';

class MapContainer extends Component {


    

    render() {
        const mapStyles = {
            width: '100%',
            height: '30%',
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '-24% 0 0 -50%',
            padding: '0'
        }

        return(
            <div style={mapStyles}>
                <Map
                    style={mapStyles}
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{lat: 40.4387154, lng: -111.8922966}}
                >
                    <Marker position={{lat: 40.4387154, lng: -111.8922966}}/>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA7C_JIMTFkb3zGUydDU_RdWoAkNvtXBVw'
  })(MapContainer);