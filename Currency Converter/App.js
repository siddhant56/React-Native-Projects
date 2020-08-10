import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
const currencyPerRupee = {
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041
}

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      inputValue:"",
      resultValue:"0.0"
    }
  }
  buttonPressed = (currency) => {
    if(this.state.inputValue === ""){
      Alert.alert("Enter Something")
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({
      resultValue:result.toFixed(2)
    })
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
      <View style={styles.screenview}> 
        <View style={styles.resultcontainer}>
        <Text style={styles.resultValue}>
          {
            this.state.resultValue
          }
        </Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
          style={styles.input}
          selectionColor="#FFF" 
          keyboardType="numeric" 
          placeholder="Enter Value" 
          value={this.state.inputValue}
          onChangeText={inputValue => this.setState({
            inputValue
          })}
          ></TextInput>
        </View>
        <View style={styles.convertorButtonContainer}>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("DOLLAR")}}
          >
            <Text style={styles.convertorButtonText}>
              $
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("EURO")}}
          >
            <Text style={styles.convertorButtonText}>
              Euro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("POUND")}}
          >
            <Text style={styles.convertorButtonText}>
              Pound
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("RUBEL")}}
          >
            <Text style={styles.convertorButtonText}>
              Rubel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("AUSDOLLAR")}}
          >
            <Text style={styles.convertorButtonText}>
              AUSD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("CANDOLLAR")}}
          >
            <Text style={styles.convertorButtonText}>
              CAND
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("YEN")}}
          >
            <Text style={styles.convertorButtonText}>
             YEN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("DINAR")}}
          >
            <Text style={styles.convertorButtonText}>
              DINAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.convertorButton}
          onPress={()=>{this.buttonPressed("BITCOIN")}}
          >
            <Text style={styles.convertorButtonText}>
              BITCOIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop:20
    
  },
  screenview:{
    flex:1
  },
  resultcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DE",
    alignItems:"center",
    borderWidth:2
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputcontainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#c1c1c1",
    borderWidth:4,
    backgroundColor:"#0A79DE",
    paddingLeft:20,
    paddingRight:20,
    alignContent:"center",
  
  },
  input:{
    color:"#FFF",
    fontSize:30,
    alignItems:"center"
  },
  convertorButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  convertorButton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderWidth:2,
    borderColor:"#c1c1c1",
    width:"33.33%"
  },
  convertorButtonText:{
    color:"#FFF",
    fontSize:20,
    fontWeight:"bold"
  }
});
