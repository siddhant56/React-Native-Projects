import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Title, Button ,Icon} from 'native-base';

export default function App() {
  const [city,SetCity] = React.useState("India");
  const [dataSource,setDatasource]=React.useState([]);
  const [description,setDescription] =React.useState("");
  const [Temp,setTemp] =React.useState("");
  const [Tempfeel,setTempFeel] =React.useState("");
  const image = { uri: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };
  React.useEffect(() => {
    getWeatherFromApi();
   
  }, [])
  function getWeatherFromApi() {
    return(
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a76de6a98da551809d7ceea12adfd200`)
      .then(response => response.json())
      .then(responseJson => {
        setDatasource(dataSource.concat(responseJson.weather[0]))
        setDescription(responseJson.weather[0].description)
        setTemp(responseJson.main.temp)
        setTempFeel(responseJson.main.feels_like)
        // setDescription(dataSource.description)

      })
      .catch(err=>console.log(err))
    )
  }
  return (
  <View style={styles.container}>
     <ImageBackground source={image} style={styles.image}>
     <Text style={{fontSize:30,fontStyle:"normal",alignSelf:"center",fontWeight:"bold"}}>Weather App</Text>
          <Form>
            <Item style={styles.inputItem}>
              <Label style={{color:"#000",fontWeight:"bold"}}>Enter City</Label>
              <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={fname =>SetCity(fname) }
              />
            </Item>
            </Form>
            <Button full rounded info onPress={()=>{getWeatherFromApi()}}>
              <Text>Submit</Text>
            </Button>
  {/* <Text>{dataSource}</Text> */}
            <Text style={{fontSize:30,fontStyle:"normal",alignSelf:"center",fontWeight:"bold"}}>{description}</Text>
           
          <Text style={{fontSize:30,fontStyle:"normal",alignSelf:"center",fontWeight:"bold"}}>Temp:{Temp}</Text>
          <Text style={{fontSize:30,fontStyle:"normal",alignSelf:"center",fontWeight:"bold"}}>Feels Like:{Tempfeel}</Text>
 
{console.log(dataSource)}
</ImageBackground>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
