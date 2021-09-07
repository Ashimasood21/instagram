import React from 'react';
import { View } from 'react-native';
import StackI from "./app/navigation/stack"
import {NavigationContainer} from "@react-navigation/native";
const App=()=>{
  return(
    <NavigationContainer>
      <StackI></StackI>
    </NavigationContainer>
  )
}
export default App;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
// const App = () => {
 
//   const [number, setNumber] = useState();
//   const [textinput1, setTextinput1] = useState();
//   const [textinput2, setTextinput2] = useState();
//   const [textinput3, setTextinput3] = useState();
//   const [condition, setCondition] = useState(false)

//   const Dice = () => {
//     setCondition(!condition)
//     let Num = Math.floor(Math.random() * 6) + 1;
//     console.log(`Dice:${Num}`);
//     setNumber(Num)
//     if(Num == textinput1 ){
//       return Alert.alert('First Number Matched');
//     }else if(Num == textinput2){
//       return Alert.alert('Second Number Matched');
//     }else if(Num == textinput3 ){
//       return Alert.alert('Third Number Matched');
//     }else{
//       return Alert.alert('Number Not Matched');
//     }  
//   }
//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center', margin: '10%' }}>
//       <TouchableOpacity onPress={() => Dice()}>
//         <View style={{ backgroundColor: '#ff6567', borderWidth: 2 }}>
//           <Text style={{ color: 'white', fontSize: 30 }}>Press</Text>
//         </View>
//       </TouchableOpacity>
//         <View style={{marginTop:'5%'}}> 
//           {number== 1 ?
//             <View>
//               <Image source={require('./app/assets/300.jpg')} style={{ height: 100, width: 100 }}></Image>
//             </View> : null}
//           {number == 2 ?
//             <View>
//               <Image source={require('./app/assets/300.jpg')} style={{ height: 100, width: 100 }}></Image>
//             </View> : null}
//           {number == 3 ?
//             <View>
//               <Image source={require('./app/assets/300.jpg')} style={{ height: 100, width: 100 }}></Image>
//             </View> : null}
//           {number == 4 ?
//             <View>
//               <Image source={require('./app/assets/300.jpg')} style={{ height: 100, width: 100 }}></Image>
//             </View> : null}
//           {number ==5 ?
//             <View>
//               <Image source={require('./app/assets/300.jpg')} style={{ height: 100, width: 100 }}></Image>
//             </View> : null}
//           {number == 6 ?
//             <View>
//               <Image source={require('./app/assets/300.jpg')} style={{ height: 100, width: 100 }}></Image>
//             </View> : null}
//         </View>
//         <View style={{marginTop:'5%',borderWidth:2,height:'15%',width:'60%'}}>
//           <TextInput placeholder='Enter Any number from 1 to 6' onChangeText={(a)=>setTextinput1(a)}></TextInput>
//         </View>  
//         <View style={{marginTop:'5%',borderWidth:2,height:'15%',width:'60%'}}>
//           <TextInput placeholder='Enter Any number from 1 to 6' onChangeText={(a)=>setTextinput2(a)}></TextInput>
//         </View> 
//         <View style={{marginTop:'5%',borderWidth:2,height:'15%',width:'60%'}}>
//           <TextInput placeholder='Enter Any number from 1 to 6'  onChangeText={(a)=>setTextinput3(a)}></TextInput>
//         </View>   
//     </View>
//   )
// }
// export default App;

// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View, Image, TextInput, Alert, ImageBackground } from 'react-native';
// const App = () => {
//   const [num, setNum] = useState();
//   const [enter1,setEnter1] = useState();
//   const [enter2,setEnter2] = useState();
//   const [enter3,setEnter3] = useState();
  
//   const [condition, setCondition] = useState(false);




//   const Dice = () => {
//     setCondition(!condition)
//     let Number = Math.floor(Math.random() * 6) + 1;
//     console.log(`Dice:${Number}`);
//     setNum(Number)

//     if(Number==enter1){
//       return Alert.alert('SHIVU YOU WIN !!')
     
//     }
//     else if(Number==enter2){
//       return Alert.alert('SHIVVI YOU WIN !!')
        
//     }
//     else if(Number==enter3){
//       return Alert.alert('SHIVU YOU WIN !!')
        
//     }
//     else{
//       return Alert.alert('Try one more time LOVE')
//     }

//   }
//   return (
//     <View style={{  height: '100%', width: '100%' }}>
//        <ImageBackground style={{height:'100%',width:'100%'}} source={require('./assets/os.jpg')}>

//       <View style={{ alignSelf: 'center', marginTop: '20%' }}>

//         {num == 1 ?
//           <View>


//             <Image source={require('./assets/1.jpeg')}
//               style={{ height: 100, width: 100 }}></Image>

//           </View>
//           : null}


//         {num == 2 ?
//           <View>

//             <Image source={require('./assets/2.jpeg')}
//               style={{ height: 100, width: 100 }}></Image>

//           </View>
//           : null}


//         {num == 3 ?
//           <View>

//             <Image source={require('./assets/3.jpeg')}
//               style={{ height: 100, width: 100 }}></Image>

//           </View>
//           : null}


//         {num == 4 ?
//           <View>

//             <Image source={require('./assets/4.jpeg')}
//               style={{ height: 100, width: 100 }}></Image>

//           </View>
//           : null}


//         {num == 5 ?
//           <View>

//             <Image source={require('./assets/5.jpeg')}
//               style={{ height: 100, width: 100 }}></Image>

//           </View>
//           : null}

//         {num == 6 ?

//           <View>

//             <Image source={require('./assets/6.jpeg')}
//               style={{ height: 100, width: 100 }}></Image>

//           </View>
//           : null}


//       </View>



//       <TouchableOpacity onPress={() => Dice()}>
//         <View style={{ alignSelf: 'center', marginTop: '20%', borderRadius: 15, backgroundColor: '#96351E' }}>
//           <Text style={{ fontSize: 40, fontWeight: 'bold', padding: 8, color: 'white' }}>Roll Dice </Text>
//         </View>
//       </TouchableOpacity>

//       <View style={{ alignSelf: 'center', marginTop: '8%', borderRadius: 10, backgroundColor: '#96351E' }}>
//         <TextInput onChangeText={(a)=>setEnter1(a)} 
//         style={{color:'white',fontSize:30}} placeholder='Enter any dice number'></TextInput>
//       </View>

//       <View style={{ alignSelf: 'center', marginTop: '8%', borderRadius: 10, backgroundColor: '#96351E' }}>
//         <TextInput onChangeText={(a)=>setEnter2(a)} 
//         style={{color:'white',fontSize:30}} placeholder='Enter any dice number'></TextInput>
//       </View>

//       <View style={{ alignSelf: 'center', marginTop: '8%', borderRadius: 10, backgroundColor: '#96351E' }}>
//         <TextInput onChangeText={(a)=>setEnter3(a)} 
//         style={{color:'white',fontSize:30}} placeholder='Enter any dice number'></TextInput>
//       </View>


//       </ImageBackground>
//     </View>

//   )
// }
// export default App;