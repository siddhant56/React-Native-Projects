
import * as React from 'react';
import { View, Text,StyleSheet ,Image, Alert} from 'react-native';
import { Button } from 'native-base';
import * as firebase from "firebase";
function HomeScreen({navigation}) {
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  React.useEffect(() => {
    firebase.auth()
    .onAuthStateChanged(authenticate=> {
      if(authenticate)
      {
        setName(authenticate.displayName)
        setEmail(authenticate.email)
      }
      else{
        navigation.replace('Signin');
      }
    })
   
  }, [])
  function signout(){
    firebase
    .auth()
    .signOut()
    .then(()=>{
      console.log("Signout")
    })
    .catch(err => {
      Alert.alert(err.message)
    })
  }
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")}/>
          <Text>Learn Code Online</Text>
        </View>
        <View style={styles.userDetails}>
        <Text>Hey {name}</Text>
        <Text>You Are Signed In As : {email}</Text>
        </View>
        <Button style={styles.button}
        full
        rounded
        success
        onPress={()=>{signout()}}>

        <Text style={styles.buttonText}>Signout</Text>

        </Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      margin: 20
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    userDetails: {},
  
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    }
  });
  

  export default HomeScreen;