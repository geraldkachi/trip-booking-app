import React from 'react'
import { StyleSheet,SafeAreaView,Image,TouchableOpacity, Text, View,Button ,Alert } from 'react-native'
import { COLORS, images,FONTS, SIZES, icons} from '../constants/';

const StarReview = ({rate}) => {
    var starComponents = []
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar

    // full Star
    for (var i = 0; i < fullStar; i++){
        starComponents.push(
            <Image  key={`full-${i}`} source={icons.starFull} resizeMode="cover" style={{width:20,height:20}} />
            )
        }
///////////////////////
        // Half Star
    for (var i = 0; i < halfStar; i++){
        starComponents.push(
            <Image  key={`half-${i}`} source={icons.starHalf} resizeMode="cover" style={{width:20,height:20}} />
            )
        }
///////////////////////
        // No Star
    for (var i = 0; i < noStar; i++){
        starComponents.push(
            <Image  key={`half-${i}`} source={icons.starEmpty} resizeMode="cover" style={{width:20,height:20}} />
            )
        }
//////////////////////////

        return (
            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                {starComponents}
                <Text style={{marinLeft: SIZES.base, color: COLORS.gray,...FONTS.body3}}>{rate}</Text>
            </View>
        )
    }   

    const IconLabel = ({icon, label}) => {
      return (
        <View style={{alignItems:"center"}}>
        <Image style={{width:35, height: 35}} source={icon} resizeMode="cover" />
        <Text style={{marginTop:SIZES.body4, color: COLORS.gray, ...FONTS.h4}}>{label}</Text>
        </View>
      )
    }


const DestinationDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={{flex:2}}>
                <Image source={images.skiVillaBanner} resizeMode="cover" style={{width:"100%", height:"80%"}} />

                <View style={[styles.shadow,{position:"absolute",bottom:"1%",left:"5%",right:"5%",borderRadius:15,padding: SIZES.padding, backgroundColor: COLORS.white}]}>

                    <View style={{flexDirection:"row"}}>
                        <View style={styles.shadow}>
                            <Image source={images.skiVilla} resizeMode="cover" style={{width: 70, height: 70, borderRadius: 15}}/>
                        </View>
                        <View style={{marginHorizontal: SIZES.radius, justifyContent:"space-around"}}>
                            <Text style={{...FONTS.h3}}>Ski Villa</Text>
                            <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>
                            <StarReview  rate={4.5}/>
                        </View>
                    </View>
                    {/* ///////////////// */}
                    <View style={{marginTop: SIZES.radius}}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                            Ski Villa offers simple rooms with  mountain views  in front of the ski hills to the Ski Resort
                        </Text>
                    </View>
                </View>
                    {/* Header Buttons */}
                <View style={{position:"absolute", top:23,left:20,right:20,flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
                            <Image style={{width:30, height: 30}} source={icons.back} resizeMode="cover"/>
                        </TouchableOpacity>
                    </View>
                    {/*  */}
                    <View style={{flex:1, alignItems:"flex-end"}}>
                        <TouchableOpacity onPress={()=> console.log("Pressed")}>
                            <Image style={{width:30, height: 30}} source={icons.menu} resizeMode="cover"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
            {/* body */}
            <View style={{flex:1.5}}>
                {/* icons */}
                <View style={{flexDirection:"row", marginTop:SIZES.padding, paddingHorizontal:SIZES.padding * 2, justifyContent:"space-between"}}>
                    <IconLabel icon={icons.villa} label="Villa" />
                    <IconLabel icon={icons.parking} label="Parking" />
                    <IconLabel icon={icons.wind} label="4 *C" />
                </View>
                <View style={{marginTop: SIZES.padding, paddingHorizontal:SIZES.padding}}>
                    <Text style={{...FONTS.h3}}>About</Text>
                    <Text style={{marginTop: SIZES.radius, color: COLORS.gray,  ...FONTS.body4}}>Location at the Alps with an altitude of 1,702 meters. This ski area is te largest ski area in the world and known s the best place to ski. Many other facilities, such as a fitness center, sauna steam room to star-rated restaurants</Text> 
                </View>
            </View>

            {/* Footer */}
            <View style={{flex:0.5, paddingHorizontal: SIZES.padding }}>
                <TouchableOpacity style={{height:60, width:"100%", borderRadius:10, backgroundColor:"#bbe6f4"}}>
                    <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                        <View style={{flex:1, marginHorizontal:SIZES.h4, justifyContent:"center"}}>
                            <Text style={{...FONTS.h1}}>N1000</Text>
                        </View>
                        <TouchableOpacity style={{width:130, height:"80%", marginHorizontal:SIZES.radius}} onPress={()=> console.log("Booking is on On")}>
                           <View style={{flex:1, alignItems:"center", justifyContent:"center",borderRadius: 10, backgroundColor:"dodgerblue"}}>
                            <Text style={{color:COLORS.white, ...FONTS.h4}}>BOOKING</Text>   
                            </View> 
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DestinationDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white,
        // justifyContent:"center",
        // alignItems:'center'
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:0.35,
        shadowRadius: 3.84,
        elevation: 5
    }
})
