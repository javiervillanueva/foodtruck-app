import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import foodMarker from './foodtruck-marker.png';
import swal from 'sweetalert2';

export default class Map extends Component {
state = {
    viewport: {
        latitude: 40.4387154,
        longitude: -111.8922966,
        width: window.innerWidth,
        height: '200px',
        zoom: 12   
    },
}

componentDidMount= () => {
    this.setState({viewport: {...this.state.viewport, latitude: this.props.lat, longitude: this.props.lng}})
    window.addEventListener('resize', this.resizeMap)
}

componentDidUpdate = (prevProps) =>  {
    if(prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng)
    {
        this.setState({viewport: {...this.state.viewport, latitude: this.props.lat, longitude: this.props.lng}})
    }
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

handleMarkerClick = () => {
    swal.fire({
        type: 'success',
        title: `Lat:${this.props.lat}, Lng: ${this.props.lng} `
    })
}

    render() {

        console.log('Your mom', this.state)
        return (
            <div>
                <ReactMapGL 
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/beardlife/ck13r7bg20gty1clg91fwjz4k"
                    {...this.state.viewport} 
                    onViewportChange={this.onViewportChange}
                    style={{borderRadius: '30px', margin: ' 8px 0 40px 0'}}
                >
                    <Marker latitude={this.props.lat} longitude={this.props.lng} offsetLeft={-20} offsetTop={-60}>
                        <img onClick={this.handleMarkerClick} src={foodMarker} alt="icon" />
                    </Marker>
                </ReactMapGL>
            </div>
        )
    }
}