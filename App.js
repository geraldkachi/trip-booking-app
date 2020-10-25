import React from 'react'
import { TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import OnBoarding from "./screens/OnBoarding";
import DestinationDetail from "./screens/DestinationDetail";
import Tabs from "./navigation/Tabs"
import { COLORS, icons, SIZES} from "./constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={"OnBoarding"}>
        <Stack.Screen name="OnBoarding" component={OnBoarding}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white
          },
          // headerTransparent: true,
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity style={{marginRight: SIZES.padding}}
            onPress={()=> console.log("Pressed")}
            >
               <Image source={icons.barMenu}
               resizeMode="contain"
               style={{width:25, height:25}}
               />
            </TouchableOpacity>
          )
        }} 
        />  
        <Stack.Screen name="DestinationDetail" component={DestinationDetail} 
        options={{
          headerShown: false,
          // headerTransparent: true,
        }}
        />
        {/* tabs */}
        <Stack.Screen name="Home" component={Tabs} 
         options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white
          },
          headerLeft: ({onPress}) => (
           <TouchableOpacity style={{marginLeft: SIZES.padding}}  onPress={onPress}>
               <Image source={icons.back} resizeMode="contain" style={{width:25,height:25}} />
           </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{marginRight: SIZES.padding}}  onPress={()=>console.log("Menu")}>
            <Image source={icons.barMenu} resizeMode="contain" style={{width:25,height:25}} />
        </TouchableOpacity>
          )
        }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />
}

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   }
// }) 
  





// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View ,Alert} from 'react-native';
// import {Header, Left,Right,Body,Title,Subtitle,Icon,Button,Content,List,ListItem,Thumbnail} from "native-base";

// import Feed from "./src/Feed";
// import Detail from "./src/Detail";

// import Screen1 from "./src/screens/drawer/Screen1"
// import Screen2 from "./src/screens/drawer/Screen2"
// import Screen3 from "./src/screens/drawer/Screen3"

// import Tab1 from "./src/screens/tabs/Tab1"
// import Tab2 from "./src/screens/tabs/Tab2"
// import Tab3 from "./src/screens/tabs/Tab3"
// import Tab4 from "./src/screens/tabs/Tab4"

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

// export default function App() {

//   createHomeStack = () =>

//   <Stack.Navigator >
//     <Stack.Screen name="Feed" component={Feed} options={{title: "My Feed", headerStyle: {backgroundColor:"black"}, headerTintColor:"white"}}/>
//     <Stack.Screen name="Detail" component={Detail} options={{title: "Detail Screen", headerStyle: {backgroundColor:"blue"}, headerTintColor:"white"}} />
//     <Stack.Screen name="Top Tabs" component={createTopTabs}/>
//     <Stack.Screen name="Bottom Tabs" component={createBottomTabs}/>
//   </Stack.Navigator>


//   createTopTabs = (props) => {
//     return(
//       <MaterialTopTabs.Navigator>
//       <MaterialTopTabs.Screen name="Tab 1" component={Tab1} options={{title: props.route.params.name}}/>
//       <MaterialTopTabs.Screen name="Tab 2" component={Tab2}/>
//       <MaterialTopTabs.Screen name="Tab 3" component={Tab3}/>
//       <MaterialTopTabs.Screen name="Tab 4" component={Tab4}/>
//     </MaterialTopTabs.Navigator>
//     )
//   }
//   createBottomTabs = () => {
//     return(
//       <MaterialBottomTabs.Navigator>
//       <MaterialBottomTabs.Screen name="Tab 1" component={Tab1}/>
//       <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}/>
//       <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}/>
//       {/* <MaterialBottomTabs.Screen name="Tab 4" component={Tab4}/> */}
//     </MaterialBottomTabs.Navigator>
//     )
//   }

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator >
//         <Stack.Screen name="Home" children={createHomeStack} />
//         <Stack.Screen name="Contacts" component={Screen1} />
//         <Stack.Screen name="Favorites" component={Screen2} />
//         <Stack.Screen name="Settings" component={Screen3} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
