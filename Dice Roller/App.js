import React from 'react';
import { StyleSheet, Text,View ,Image,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      uri: require('./src/images/dice1.png'),
      uri2: require('./src/images/dice6.png')
      
    }
  }

  getRandomValue = () => {
    return Math.floor((Math.random()*6) + 1)
  }

  playButtonPressed = () => {
    var rnd=this.getRandomValue();
    switch (rnd) {
      case 1:this.setState({uri:require(`./src/images/dice1.png`)})
        break;
        case 2:this.setState({uri:require(`./src/images/dice2.png`)})
        break;
        case 3:this.setState({uri:require(`./src/images/dice3.png`)})
        break;
        case 4:this.setState({uri:require(`./src/images/dice4.png`)})
        break;
        case 5:this.setState({uri:require(`./src/images/dice5.png`)})
        break;
        case 6:this.setState({uri:require(`./src/images/dice6.png`)})
        break;
        default:this.setState({uri:require(`./src/images/dice1.png`)})
    }

    var rnd2=this.getRandomValue();
    switch (rnd2) {
      case 1:this.setState({uri2:require(`./src/images/dice1.png`)})
        break;
        case 2:this.setState({uri2:require(`./src/images/dice2.png`)})
        break;
        case 3:this.setState({uri2:require(`./src/images/dice3.png`)})
        break;
        case 4:this.setState({uri2:require(`./src/images/dice4.png`)})
        break;
        case 5:this.setState({uri2:require(`./src/images/dice5.png`)})
        break;
        case 6:this.setState({uri2:require(`./src/images/dice6.png`)})
        break;
        default:this.setState({uri2:require(`./src/images/dice6.png`)})
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <Image style={{height:200 ,width:200}} source={this.state.uri} />
       <Image style={{height:200 ,width:200}} source={this.state.uri2} />
       
       <TouchableOpacity onPress={this.playButtonPressed}>
       <Text style={styles.gameButton}>Play Game</Text>
       </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton : {
    marginTop:35,
    fontSize:20,
    color:"#FFFFFF",
    fontWeight:"bold",
    borderWidth:2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius:5,
    borderColor: "#FFF"
  }
});
