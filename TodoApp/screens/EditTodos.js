import React from 'react'
import { View, Text,AsyncStorage, Alert, Dimensions } from 'react-native'
import {Card} from "react-native-elements";
import {Button} from 'native-base';
export default function EditTodos({navigation,route}) {
    const[todo,setTodo]=React.useState({
        name:"",
        priority:0,
        key:""
    })
    React.useEffect(() => {
     
        const willFocus =
        navigation.addListener('focus',()=>{
          var {key}=route.params;
          getTodo(key);
        })
        
      }, [navigation]);
    async  function getTodo(key)
  {
    
      await AsyncStorage.getItem(key)
      .then(contactJsonString => {

        var todo=JSON.parse(contactJsonString);
        
        todo["key"]=key;
        setTodo(todo);
        // console.log(contact["fname"])
      })
      .catch(err=>console.log(err))
  }
    return (
        <View style={{marginLeft:50,marginTop:30}}>
             <Card style={{height:100,alignItems:"center",justifyContent:"center"}}
                      image={{uri:'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',width:200,height:500}}
                    containerStyle={{padding:0,width:200,height:250,marginTop:150}}
                    >
                        <Text style={{marginBottom:1,alignSelf:"center",justifyContent:"center",alignItems:"center"}}>{todo.name}</Text>
                        <Text style={{alignSelf:"center"}}>{todo.priority}</Text>
            
                    </Card>
                    <Button style={{width:200,marginLeft:14,marginTop:30,justifyContent:"center"
                    }} onPress={async ()=>{ await AsyncStorage.removeItem(todo["key"])
                        .then(()=>{
                            Alert.alert("Deleted Successfully")
                          navigation.navigate('Your Todos');
                        })}} bordered danger>
            <Text style={{color:"red",alignSelf:"center"}}>Delete Todo</Text>
          </Button>
        </View>
    )
}
