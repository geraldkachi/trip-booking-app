import React from 'react'
import { StyleSheet,SafeAreaView,Image,TouchableOpacity, Text, View,Button ,Alert } from 'react-native'
import { COLORS, images,FONTS, SIZES} from '../constants/';

const OnBoarding = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ bottom:"30%",flex:1,alignItems:"center",justifyContent:'center'}}>
                <Image source={images.onboardingImage}
                resizeMode="contain"
                style={{width: 400, height: 400} }
                />
            </View>
            {/*  */}
            <View style={{flex:1, alignItems:"center", justifyContent:"center",position: "absolute", top: "50%"}}>
                <View style={{alignItems:"center", marginHorizontal: SIZES.padding}}>
                    <Text style={{...FONTS.h2}}>Digital Ticket</Text>
                    <Text style={{color: COLORS.gray, marginTop: SIZES.padding,textAlign: "center", ...FONTS.body3}}>Easy solution to buy tickets for your travel, business trips, transportation, logde and culinary</Text>
                </View>
                {/* btn */}
                <TouchableOpacity style={[styles.shadow, { marginTop: SIZES.padding * 2, width: "70%", height: 50, alignItems:"center", justifyContent:"center" ,backgroundColor:"dodgerblue", borderRadius: 10}]}
                    onPress={()=> navigation.navigate("Home")}>
                    <Text   style={{ color:"white", justifyContent:"center", alignItems:"center"}}>Start !</Text>
                    {/* <Button  onPress={()=> navigation.navigate("Home")} style={{ color:"white", position:"absolute", justifyContent:"center", alignItems:"center"}} title="Start !" /> */}
                    {/* <LinearGradient style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center", borderRadius: 15}} colors={["#46aeff", "#5884ff"]} start={{x:0,y:0}} end={{x:1,y:1}}>
                       <Text style={{color: COLORS.white, ...FONTS.h3}}>Start !</Text>
                     </LinearGradient> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white,
        // justifyContent:"center",
        alignItems:'center'
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})