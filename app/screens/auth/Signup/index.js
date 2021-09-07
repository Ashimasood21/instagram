import React from 'react';
import{View,Text, Image, TextInput,TouchableOpacity} from "react-native";
const Signup=()=>{
return(
    <View>
        <Image style={{borderWidth:1,borderColor:'black',borderRadius:200,alignSelf:'center',margin:25,height:"42%",width:'58%'}} source={require("../../../assets/avt.jpg")}/>
        <Text style={{fontSize:25,marginLeft:20}}>PHONE</Text>
        <TextInput style={{fontSize:18,borderWidth:1,margin:20,borderColor:"grey"}} placeholder="Phone"></TextInput>
        <TouchableOpacity>
                <Text style={{backgroundColor:'blue',color:"white",fontSize:16,padding:15,fontWeight:'bold',textAlign:'center',margin:20,marginTop:10,marginBottom:10}}>Next</Text>
            </TouchableOpacity>
    </View>
)
}
export default Signup;