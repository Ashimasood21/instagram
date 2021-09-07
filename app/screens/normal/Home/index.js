import React from 'react';
import { useState } from 'react';
import {View,Text,Image, ScrollView, Modal ,TouchableOpacity} from 'react-native';
const Home=()=>{
    const [value,setvalue]=useState(false)
    return(
        <View>
            <View style={{flexDirection:'row'}}>
            <Image style={{height:35,width:35,marginTop:20,marginLeft:10}} source={require("../../../assets/plus.png")}></Image>
                <Image style={{height:80,width:200,marginLeft:50}} source={require('../../../assets/insta.png')}></Image>
                <TouchableOpacity onPress={()=>setvalue(true)}>
                <Image style={{height:35,width:35,marginTop:20,marginLeft:40}} source={require("../../../assets/messenger.png")}></Image>
                </TouchableOpacity>
            </View>
<Modal visible={value} transparent={false}>

    <View style={{backgroundColor:"blue",margin:30,flex:1,}}>
        <TouchableOpacity onPress={()=>setvalue(false)}>
        <Text>HELLO</Text>
        </TouchableOpacity>
    </View>

</Modal>



            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{height:84,width:84,borderWidth:1,borderRadius:84}}>
                <Image style={{height:80,width:80,borderRadius:82,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:84,width:84,borderWidth:1,borderRadius:84}}>
                <Image style={{height:80,width:80,borderRadius:82,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:84,width:84,borderWidth:1,borderRadius:84}}>
                <Image style={{height:80,width:80,borderRadius:82,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:84,width:84,borderWidth:1,borderRadius:84}}>
                <Image style={{height:80,width:80,borderRadius:82,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:84,width:84,borderWidth:1,borderRadius:84}}>
                <Image style={{height:80,width:80,borderRadius:82,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:44,width:44,borderWidth:1,borderRadius:22}}>
                <Image style={{height:40,width:40,borderRadius:20,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:44,width:44,borderWidth:1,borderRadius:22}}>
                <Image style={{height:40,width:40,borderRadius:20,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            <View style={{height:44,width:44,borderWidth:1,borderRadius:22}}>
                <Image style={{height:40,width:40,borderRadius:20,marginLeft:2}} source={require("../../../assets/200.png")}/>
            </View>
            </ScrollView>
        </View>
    )
}
export default Home;