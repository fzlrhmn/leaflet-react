import React, {Component} from 'react';
import Sidebar from './sidebar';
import { Map, GeoJSON, TileLayer } from 'react-leaflet';
import hash from 'object-hash';
import geo from '../data/geojson.json';

class Maps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      geo: {
        "type": "FeatureCollection",
        "features": []
      },
      position: [-6.905210504370536, 107.60876655578613],
      sidebarMenu: [{
        key: 1,
        isSelected: false,
        name: 'lines',
      },{
        key: 2,
        isSelected: false,
        name: 'polygons'
      },{
        key: 3,
        isSelected: false,
        name: 'points'
      }]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
  }

  getGeo(feature, layer) {
    layer.bindPopup(`this is area: ${feature.properties.name}`)
  }

  filterGeo(layer) {
    return true
  }

  handleClick(e) {
    this.setState({geo: geo[e.name]})
  }

  render() {
    let h = hash(this.state.geo)
    return (
      <div className="row">
        <Sidebar {...this.state} onClick={(i) => {this.handleClick(i)}}></Sidebar>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Map 
            center={this.state.position} 
            zoom={13}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON 
                key={h}
                data={this.state.geo}
                onEachFeature={this.getGeo}
                filter={this.filterGeo}
              />
          </Map>
        </main>
      </div>
    )
  }
}

export default Maps