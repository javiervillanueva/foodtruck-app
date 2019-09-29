import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {
state = {
    viewport: {
        latitude: 40.4387154,
        longitude: -111.8922966,
        width: window.innerWidth * 0.95,
        height: window.innerHeight * 0.35,
        zoom: 10   
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


    render() {
        return (
            <div>
                <ReactMapGL 
                    {...this.state.viewport} 
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/beardlife/ck13r7bg20gty1clg91fwjz4k"
                    onViewportChange={viewport => {
                        this.setState({viewport: viewport});
                    }}
                    style={{borderRadius: '30px'}}
                />
            </div>
        )
    }
}