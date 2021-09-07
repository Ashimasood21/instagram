import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text,Image, TouchableOpacity} from "react-native";
const Login=({navigation})=>{
    const account=()=>{
        navigation.navigate('Signin')
    }
    const register=()=>{
        navigation.navigate('Signup')
    }
    return(
        <View>
            <Image style={{height:"22%",width:"64%",alignSelf:'center',marginTop:200}} source={require("../../../assets/insta.png")}></Image>
            <TouchableOpacity onPress={()=>register()}>
                <Text style={{backgroundColor:'blue',color:"white",fontSize:16,padding:18,borderRadius:8,fontWeight:'bold',textAlign:'center',margin:15,marginTop:25}}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>account()}>
                <Text style={{color:'blue',fontSize:17,fontWeight:'bold',textAlign:'center',marginTop:10}}>Log in</Text>
            </TouchableOpacity>
            {/* <View style={{borderBottomColor:"black",borderBottomWidth:1}}></View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{color:"grey",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Already have an account?</Text>
            <TouchableOpacity>
                <Text style={{color:"blue",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Log in</Text>
                </TouchableOpacity>
                </View> */}
        </View>
    )
}
export default Login;