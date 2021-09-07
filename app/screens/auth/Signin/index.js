import React from"react";
import {View,Text, TextInput,Image,TouchableOpacity} from "react-native";
const Signin=({navigation})=>{
    const register=()=>{
        navigation.navigate('Signup')
    }
    const login=()=>{
        navigation.navigate('Home')
    }
    return(
        <View>
            <Image style={{height:"16%",width:"74%",alignSelf:'center',marginTop:150}} source={require("../../../assets/insta.png")}></Image>
            <TextInput style={{borderWidth:1,borderColor:'grey',fontSize:17,margin:20,marginTop:10,marginBottom:10,padding:15,backgroundColor:'lightgrey'}} placeholder="Phone number, email or username"></TextInput>
            <TextInput style={{borderWidth:1,borderColor:'grey',fontSize:17,margin:20,padding:15,marginTop:10,marginBottom:10,backgroundColor:'lightgrey'}} placeholder="Password"></TextInput>
            <TouchableOpacity onPress={()=>login()}>
                <Text style={{backgroundColor:'blue',color:"white",fontSize:16,padding:15,fontWeight:'bold',textAlign:'center',margin:20,marginTop:10,marginBottom:10}}>Login</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{color:"grey",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Forgot your login details?</Text>
                <Text style={{color:"blue",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Get help in logging in.</Text>
                </TouchableOpacity>
</View>
<View style={{borderBottomColor:"black",borderBottomWidth:1,margin:25}}></View>
<TouchableOpacity>
                <Text style={{color:"blue",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Login with facebook</Text>
                </TouchableOpacity>
                <View style={{borderBottomColor:"black",borderBottomWidth:1,margin:25,marginTop:90}}></View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{color:"grey",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Dont have an account?</Text>
            <TouchableOpacity onPress={()=>register()}>
                <Text style={{color:"blue",fontSize:15,fontWeight:'bold',textAlign:'center'}}>Sign up</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}
export default Signin;