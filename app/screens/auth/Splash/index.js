import React, { useEffect } from 'react';
import {View,Image} from 'react-native';
const Splash=({navigation})=>{
    useEffect(()=>{
        setTimeout(function(){
            navigation.navigate('Login')
        },2000);
    })
    return(
     <View>
    <Image style={{height:"30%",width:"35%",alignSelf:'center',marginTop:"60%"}} source={require("../../../assets/splash.png")}/>
     </View>

    )
}
export default Splash;