import React from 'react'
import { View, Text,StyleSheet,Image,KeyboardAvoidingView,TouchableOpacity, Alert } from 'react-native'
import * as firebase from "firebase"
import {Form,Item,Input,Label,Button} from "native-base";
import { ScrollView } from 'react-native-gesture-handler';

export default function SignupScreen({navigation}) {
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [name,setName]=React.useState("");
    function signupUser(name,email,password)
    {
      firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(authenticate => {
        console.log(authenticate);
        return authenticate.user
        .updateProfile({
          displayName:name
        })
        .then(()=>{
          navigation.replace("Home")
        })
        .catch(err=>{
          Alert.alert(err.message)
        })
      })
      .catch(error => {
        Alert.alert(error.message)
      })
    }
    return (
        <ScrollView>
        <KeyboardAvoidingView style={{flex:1}} >
            <View style={styles.logoContainer} >
                <Image source={require("../assets/logo.png")} />
                <Text>LearnCodeOnline.in</Text>
                </View>
                <Form style={styles.form}>
                <Item floatingLabel>
            <Label>Name</Label>
            <Input autoCorrect={false}
            autoCapitalize="none"
            keyboardType="name-phone-pad"
            onChangeText={name => setName(name)}
            />
        </Item>
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
          signupUser(name,email,password);
        }}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
                </Form>
                <View style={styles.footer}>
                    <Text>OR</Text>
                    <TouchableOpacity  style={styles.convertorButton} onPress={()=>{
                        navigation.navigate('Signin')
                    }}>
                        <Text style={styles.buttonText}>Already Having A Account</Text>
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
      width: "100%"
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
  });
