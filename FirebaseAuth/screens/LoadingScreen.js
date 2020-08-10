
import  * as React from 'react'
import { View, Text,ActivityIndicator } from 'react-native';
import * as firebase from "firebase";

export default function LoadingScreen({navigation}) {
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((authenticate)=>{
            if(authenticate){
                navigation.replace('Home')
            }
            else{
                navigation.replace('Signin')
            }
        })
        // return () => {
        //     cleanup
        // }
    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}
