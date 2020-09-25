
import React, { useState, useEffect } from 'react';
import { Button,View, Text,TouchableOpacity, TextInput, Linking,Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from 'expo-camera';


function HomeScreen({navigation}) {
  const [value, onChangeText] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
 
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      
      <Text style = {{marginBottom:20}} >Home Screen</Text>
      <Button 
        title = "Go to Camera"
        onPress = { () => navigation.navigate('Camera')}/>
       <TextInput
      style={{ height:30, width:350, borderColor: 'black', borderWidth: 2,marginVertical:50}}
      onChangeText={input => onChangeText(input)}
    />
    <Button 
        title = "Search"
        onPress={() => Linking.openURL("https://www.google.com/search?q= " + value)}
        style = {{marginBottom:50}}
        />
        <Button
        style ={{paddingTop:50}}
        title = "Notification"
        onPress = {() => alert("Salut")}
        />
    </View>
  );
}

function CameraScreen() {
const [hasPermission, setHasPermission] = useState(null);
const [type, setType] = useState(Camera.Constants.Type.back);


useEffect(() => {
  (async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
}, []);

// if (hasPermission === null) {
//   return ;
// }
if (hasPermission === false) {
  return <Text>No access to camera</Text>;
}
  return (
    
    
    <View style={{ flex: 1 }}>
      <Camera  style={{ flex: 1, Ratio: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name = "Camera" component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






















































// export default function App() {



 

  

    
    
    
    
    
//     <View style={styles.container}>
//       <Text style={styles.main_title}>Labouratorul 1</Text>
//       <StatusBar style="auto" />

//       <TouchableOpacity style={styles.buttons}>
//         <Button
//         title = "this is the first button"
//         onPress={() => {return <Camera/>}}>
//         </Button>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.buttons}>
//         <Button
//         title = "this is the second button"
//         onPress={() => alert("This is the second button")}>
//         </Button>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.buttons}>
//         <Button
//         title = "this is the third button"
//         onPress={() => alert("This is the third button")}>
//         </Button>
//       </TouchableOpacity>

//       <TouchableOpacity  style={styles.buttons}>
//         <Button
//         title = "this is the fourth button"
//         onPress={()=>alert("This is the fourth Button")}>
//         </Button>
//       </TouchableOpacity>
//     </View>
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   main_title:{
//     alignItems:"center",
//     justifyContent:"flex-start",
//     fontSize: 20,
//     paddingBottom: 25,
//   },
//   buttons: {
//     paddingVertical:25,
//   }
// });
