import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import foodMarker from './foodtruck-marker.png';

export default class Map extends Component {
state = {
    viewport: {
        latitude: 40.4387154,
        longitude: -111.8922966,
        width: window.innerWidth,
        height: '200px',
        zoom: 14   
    },
}

componentDidMount() {
    window.addEventListener('resize', this.resizeMap)
}

resizeMap = (e) => {
    this.setState({viewport: {...this.state.viewport, width: window.innerWidth}})
}

componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMap);
}

onViewportChange = (viewport) => {
    this.setState({viewport: viewport});    
}

    render() {
        return (
            <div>
                <ReactMapGL 
                    {...this.state.viewport} 
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/beardlife/ck13r7bg20gty1clg91fwjz4k"
                    onViewportChange={this.onViewportChange}
                    style={{borderRadius: '30px', margin: ' 8px 0 40px 0'}}
                >
                    <Marker latitude={40.4387154} longitude={-111.8922966} offsetLeft={-20} offsetTop={-60}>
                        <img src={foodMarker} alt="icon" />
                    </Marker>
                </ReactMapGL>
            </div>
        )
    }
}