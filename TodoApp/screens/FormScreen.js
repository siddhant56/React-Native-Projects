import React from 'react'
import { View, Text,StyleSheet,AsyncStorage,Alert,Image } from 'react-native'
import {Card,CardItem,Form,Item,Input,Button} from 'native-base';
export default function FormScreen({navigation}) {
    const [todos,setTodo] = React.useState("");
    const [priority,setPriority] = React.useState(0);
    async function savetodo()
    {
        if(todo!=="" &&
        priority!==""
        )
        {
            var todo={
                name:todos,
                priority:priority
            }
            await AsyncStorage.setItem(Date.now().toString(),
       JSON.stringify(todo)
       )
       .then(()=>{
           Alert.alert('Todo Added Successfully')
           navigation.navigate('Your Todos')})
       .catch(err=>console.log(err))
       
        }
        else{
            Alert.alert('All Fields Are Required')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{alignSelf:'center',fontSize:30,color:"#1B9CFC",fontWeight:"bold",marginBottom:30}}>Enter Your Todos Here</Text>
               <Form>
                   <Item style={styles.input}>
                       <Input placeholder="Enter Todo" 
                       style={styles.inputtext}
                       onChangeText={todo=>setTodo(todo)}
                       autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        placeholderTextColor="#000"
                       />
                   </Item>
                   <Item>
                       <Input placeholder="Set Priority"
                       onChangeText={priority => setPriority(priority)}
                       autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        placeholderTextColor="#000"
                        selectionColor="#FFF"
                       />
                   </Item>
               </Form>
                <View style={styles.button}>
                <Button 
                info
                bordered
                full rounded
                onPress={()=>{
                    savetodo()
                }}
                >
                <Text style={styles.buttonText}>Add Todo</Text>
                </Button>
                </View>
        </View>
        
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#7CEC9F"
    },
    button:{
        marginTop:40
    },
    input:{
        marginBottom:10
    },
    buttonText:{
        color:"#000"
    }
})