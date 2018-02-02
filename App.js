/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      region: null,

      markers: [
        {
          coordinate: {
            latitude: 45.524548,
            longitude: -122.6749817,
          },
          title: "Best Place",
          description: "This is the best place in Portland",
          image: Images[0],

        },
        {
          coordinate: {
            latitude: 45.524698,
            longitude: -122.6655507,
          },
          title: "Second Best Place",
          description: "This is the second best place in Portland",
          image: Images[1],

        },
        {
          coordinate: {
            latitude: 45.5230786,
            longitude: -122.6701034,
          },
          title: "Third Best Place",
          description: "This is the third best place in Portland",
          image: Images[2],
          key: 3
        },
        {
          coordinate: {
            latitude: 45.521016,
            longitude: -122.6561917,
          },
          title: "Fourth Best Place",
          description: "This is the fourth best place in Portland",
          image: Images[3],

        },
      ]
    };
  }

  getInitialState() {
    return {
      region: {
        llatitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    };
  }

  render() {


    return (
      <View style={styles.container}>

        <View> style={styles.header}
          <Text style={styles.header}>Mapas</Text>
        </View>
        <View style={styles.containerMapa}>
          <MapView
            style={styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          >
            {this.state.markers.map((marker, i) => (
              <Marker
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
                key={i}

              />
            ))}
          </MapView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    heigth: 100,
    width: 100,
    justifyContent: 'flex-end',
 
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#cccc',
    flex: 0.2
  },
  containerMapa: {
    flex: 1,
    backgroundColor:'red'

  }
});
