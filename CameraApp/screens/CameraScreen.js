import React from 'react'
import { View, Text ,Button,TextInput,TouchableOpacity, Alert} from 'react-native'
import { Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {FontAwesome} from "@expo/vector-icons";
cameraRef = React.createRef();

export default function CameraScreen({navigation,route}) {
    const [photo, setPhoto] = React.useState({});
    const [hasPermission,setHasPermission] = React.useState(null);
    const [type, setType] = React.useState(Camera.Constants.Type.back);
    const [isFlash, setIsFlash] = React.useState(Camera.Constants.FlashMode.off);
    const [cameraRef, setCameraRef] = React.useState(null);
    React.useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    function flipCamera(){
      setType(
        type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      );
    }
    
    function toggleFlash() {
      setIsFlash(
        isFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off
      )
    }
    
    
    // function snap (){
    //   if (this.Camera) {
    //     let photo = this.camera.takePictureAsync();
    //   }
    //   setPhoto(photo);
    // };

    
    return (
      <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}  ref={ref => {
        setCameraRef(ref) ;
  }} >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
           
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              flipCamera()
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> <FontAwesome size={30}name="refresh"></FontAwesome> </Text>
          </TouchableOpacity>
          
        </View>
      </Camera>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(cameraRef){
              let photos =await cameraRef.takePictureAsync();
              setPhoto(photos);
              console.log(photos);
              Alert.alert("Image Clicked Succesfuly");
             }
          }}>
            <FontAwesome name="circle" size={35} style={{alignItems:"center",alignSelf:"center"}} />
          </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{
        navigation.navigate('HomeScreen',{photo})
      }}>
       <FontAwesome name="caret-left" size={35} style={{alignItems:"center",alignSelf:"center"}} />
      </TouchableOpacity>
    </View>
    )
}