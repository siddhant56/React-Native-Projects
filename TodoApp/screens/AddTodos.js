import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, AsyncStorage,FlatList, Alert } from 'react-native'
import {Entypo} from '@expo/vector-icons';
import {Button,Icon} from 'native-base';
import {Card} from 'react-native-elements';

export default function AddTodos({navigation,route}) {
    const [data,setData] = React.useState([]);
    const useForceUpdate = () => React.useState()[1];
    React.useEffect(() => {
       const willFocus=navigation.addListener('focus',()=>{
        getAllTodos();
      })
    }, [navigation])
    async function getAllTodos(){
        await AsyncStorage.getAllKeys()
        .then(keys=> {
            AsyncStorage.multiGet(keys)
            .then(result =>{
                // console.log(result);
                setData(result)
            })
            .catch(err=>console.log(err))
        })
      
        .catch(err=>console.log(err))
    
    }


    

    return (
        <View style={styles.container}>
        <Text style={{alignSelf:'center',fontSize:40,color:"#ff7979",fontStyle:"normal"}}>Here   Are  Your</Text>
        <Text style={{alignSelf:'center',fontSize:30,color:"#3498DB",fontWeight:"bold"}}>TODOS  </Text>
      
            <FlatList 
            horizontal
            data={data}
            renderItem={({item})=>{
            let todo=JSON.parse(item[1])
            let key=item[0];
            
                return(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Edit',{
                            key:key
                        })
                    }}>
                    <Card style={{height:100,alignItems:"center",justifyContent:"center"}}
                    image={{uri:'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',width:200,height:500}}
                    containerStyle={{padding:0,width:200,height:250,marginTop:100}}
                    >
                        <Text style={{marginBottom:1,fontWeight:"bold",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>{todo.name}</Text>
                        <Text style={{alignSelf:"center"}}>Priority:{todo.priority}</Text>
            
                    </Card>
                    </TouchableOpacity>
           )
            }}
            keyExtractor={(item,index)=>item[0].toString()}
            />
            <TouchableOpacity
            style={styles.floatButton}
            onPress={()=>{navigation.navigate('Form')}}
            >
              <Entypo 
              name="plus"
              size={30}
              color="#fff"
              />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7CEC9F",
    },
    floatButton:{
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: "#eb4d4b",
    borderRadius: 100
    },
    listItem: {
       padding: 20,
       flexDirection:"row"
    },
    todoText:{
        fontWeight:"bold"
    },
    icon:{
      position:"absolute",
      right:5,
      top:8
        
    },
    infoText:{
        flexDirection:"column",
        paddingRight:200
    }
})