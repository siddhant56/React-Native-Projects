import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,SafeAreaView,Button,Image } from 'react-native'

const navigationOption ={
    title:"PhotoClicker"
}


export default function HomeScreen({route,navigation}) {

    React.useEffect(() => {
        if (route.params?.photo) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.photo]);
    
    return (
        <SafeAreaView style={styles.container}>
        <View >
        
      <Button title="Take Photo" style={styles.button} onPress={()=> {navigation.navigate('CameraScreen')}} />
      {/* <Text style={{ margin: 10 }}>Post: {route.params?.photo}  {console.log(route.params?.photo)};</Text> */}
      {/* <Image source={{uri: route.params?.photo}} style={{height: 200, width: 200}}/>  */}
      {console.log(route.params?.photo)}
     <Image source={route.params?.photo} style={{height: 300, width: 300,margin:10,borderColor:"#000",borderWidth:3}} />
    </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageHolder:{
        alignSelf:"center",

    },
    button:{
        margin:20
    }
  });
  
  