import  * as React from 'react';
import { View, Text,StyleSheet,Keyboard,KeyboardAvoidingView,TouchableOpacityBase,Image, Alert } from 'react-native'
import * as firebase from "firebase";
import {Form,Item,Input,Label,Button} from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
export default function SigninScreen({navigation}) {
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    function signin(email,password){
      firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(()=>{
        navigation.replace('Home')
      })
      .catch(err => {
        Alert.alert(err.message)
      })

    }
    return (
        <ScrollView>
        <KeyboardAvoidingView style={{flex:1}}>
            <View style={styles.logoContainer} >
                <Image source={require("../assets/logo.png")} />
                <Text>LearnCodeOnline.in</Text>
                </View>
                <Form style={styles.form}>
        <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={email => setEmail(email)}
            />
        </Item>
        <Item floatingLabel>
            <Label>Password</Label>
            <Input autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            />
        </Item>
        <Button style={styles.button}
        full
        rounded
        onPress={()=>{
         signin(email,password)
        }}>
            <Text style={styles.buttonText}>Sign in</Text>
        </Button>
                </Form>
                <View style={styles.footer}>
                    <Text>OR</Text>
                    <TouchableOpacity style={styles.convertorButton} onPress={()=>{
                        navigation.navigate('Signup')
                    }}>
                        <Text style={styles.convertorButtonText}>   Create A new Account  </Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 25
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    },
    convertorButton:{
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#0A79DF",
      height:50,
      borderWidth:2,
      borderColor:"#c1c1c1",
      width:"50%"
    },
    convertorButtonText:{
    color:"#fff",
    alignSelf:"center"
}
  });
  
  