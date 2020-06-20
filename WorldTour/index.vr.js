import React, {Component} from 'react';
import{ View, Text, Pano, AppRegistry, asset, StyleSheet} from 'react-vr';

class WorldTour extends Component{
  constructor(){
    super();

    this.state = {
      showMenu: false
    }
  }

  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }
  render(){
    return (
      <View>
        <Pano source = {asset('moon.jpg')}></Pano>
        <View
            style={styles.menuButton}
            onEnter={()=> this.toggleMenu()}
            >
          <Text style={styles.menuButtonText}>
          {this.state.showMenu? 'Close Menu' : 'Open Menu'}
          </Text>
        </View>
        {
          this.state.showMenu?
            <View>
              <Text>Menu</Text>
            </View>
          :
            <View></View>
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width: 0.5,
    height: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.01,
    transform: [
      {translate: [-1, 0, -5]}
    ]
  },
  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: '#000'
  }
})
AppRegistry.registerComponent('WorldTour', () => WorldTour);
