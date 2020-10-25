import React from 'react'
import { StyleSheet, Text, View,Image,Button, TouchableOpacity,FlatList } from 'react-native'
import {COLORS, images, SIZES, icons, FONTS} from "../constants"
// import LinearGradient from "react-native-linear-gradient"

const OptionItem = ({icon, bgColor, label, onPress}) => {
    return (
        <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", borderRadius: "50%"}} onPress={onPress}>
            <View style={{width:40, height: 40}}>
            <View style={{flex:1, alignItems: "center", justifyContent:"center", borderRadius: "50%"}} color={bgColor}>
                <Image source={icon} resizeMode="cover" style={{tintColor: COLORS.black, width:25, height:25, borderRadius: 15, backgroundColor:"white"}}/>
            </View>
            </View>
            <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({navigation}) => {
    //  Dummy Data
    const [destinations, setDestination] = React.useState([
        {
            id: 0,
            name: "Ski Villa",
            img: images.skiVilla 
        },
        {
            id: 1,
            name: "Climbing Hills",
            img: images.climbingHills 
        },
        {
            id: 2,
            name: "Frozen Hills",
            img: images.frozenHills 
        },
        {
            id: 3,
            name: "Beach",
            img: images.beach,
        },
    ])

    function renderDestinations(item, index) {
        var destinationStyle = {};

        if(index == 0) {
            destinationStyle = {marginLeft: SIZES.padding,}
        }
        return(
            <TouchableOpacity style={{justifyContent:"center", marginHorizontal: SIZES.base, ...destinationStyle}}
            onPress={() => navigation.navigate("DestinationDetail")}
            >
                <Image source={item.img}
                resizeMode="cover"
                style={{width: SIZES.width * 0.28, height: "75%", borderRadius: 15}}
                />
                <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>{item.name}</Text>            
            </TouchableOpacity>
        )
    }
    

    return (
        <View style={styles.container}>
            {/* Banner */}
            <View style={{flex:1,marginHorizontal: SIZES.radius, paddingHorizontal: SIZES.base,justifyContent:'center',alignItems:'center' }}>
                <Image source={images.homeBanner} resizeMode="cover" style={{width:"100%", height:"100%", borderRadius:15}}/>
            </View>
            {/* Options */}
            <View style={{flex:1, justifyContent:"center", marginVertical: 1}}>
                <View style={{flexDirection: "row", marginTop: SIZES.padding, paddingHorizontal: SIZES.base}}>
                    <OptionItem icon={icons.airplane} bgColor={["#46aeff", "#5884ff"]} label="Flight" 
                    onPress={()=> {console.log("Flight");}}
                    />
                    <OptionItem icon={icons.train} bgColor={["#fddf90", "#fcda13"]} label="Train" 
                    onPress={()=> {console.log("Train");}}
                    />
                    <OptionItem icon={icons.bus} bgColor={["#e973ad", "#da5df2"]} label="Bus" 
                    onPress={()=> {console.log("Bus");}}
                    />
                    <OptionItem icon={icons.taxi} bgColor={["#fddf90", "#fe6bba"]} label="Taxi" 
                    onPress={()=> {console.log("Taxi");}}
                    />
                </View>
                {/* / */}
                <View style={{flexDirection: "row", marginTop: SIZES.radius, paddingHorizontal: SIZES.base}}>
                    <OptionItem icon={icons.bed} bgColor={["#ffc465", "#ff9c5f"]} label="Hotel" 
                    onPress={()=> {console.log("Hotel");}}
                    />
                    <OptionItem icon={icons.eat} bgColor={["#7cf1fb", "#aebefd"]} label="Eats" 
                    onPress={()=> {console.log("Eats");}}
                    />
                    <OptionItem icon={icons.compass} bgColor={["#e973ad", "#da5df2"]} label="Adventure" 
                    onPress={()=> {console.log("Adventure");}}
                    />
                    <OptionItem icon={icons.event} bgColor={["#fcaba8", "#fe6bba"]} label="Event" 
                    onPress={()=> {console.log("Event");}}
                    />
                </View>
            </View>
            {/* Destination */}
            <View style={{flex:1}}>
                <Text style={{marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2, fontWeight:"bold"}}>Destination</Text>
                <FlatList 
                horizontal
                showsVerticalScrollIndicator={false}
                data={destinations}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderDestinations(item, index)}
                />
            </View>
        </View>
    )
}

export default Home  

const styles = StyleSheet.create({
    container:{
         flex: 1,
         backgroundColor: COLORS.white,
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
