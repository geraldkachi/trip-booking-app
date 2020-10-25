import { Dimensions } from 'react-native'
const {width,height} = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary:"#5390ff",  // Blue
    secondary:"#cacfd9", // Gray

    // colors
    black:"#1E1F20",
    white:"#FFFFFF",
    lightGray:"#eff2f5",
    gray:"#8b9097",
    blue: "#1e90ff"
}

export const SIZES ={
    // global
    base: 8,
    font:14,
    radius:12,
    padding:24,

    //  font size
    largeTitle: 50,
    h1:30,
    h2:18,
    h3:16,
    h4:14,
    body1:30,
    body2:22,
    body3:12,
    body4:10,

    // app dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: { fontSize:SIZES.largeTitle,lineHeight:36},
    h1: { fontSize:SIZES.h1,lineHeight:36},
    h2: { fontSize:SIZES.h2,lineHeight:30},
    h3: { fontSize:SIZES.h3,lineHeight:22},
    h4: { fontSize:SIZES.h4,lineHeight:20},
    body1: { fontSize:SIZES.boody1, lineHeight:36},
    body2: { fontSize:SIZES.body2, lineHeight:30},
    body3: { fontSize:SIZES.body3, lineHeight:22},
    body4: { fontSize:SIZES.body4, lineHeight:20},
}

const appTheme = {COLORS, SIZES, FONTS}
export default appTheme; 