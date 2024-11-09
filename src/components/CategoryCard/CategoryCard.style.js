import { StyleSheet,Dimensions } from "react-native";



const WidthScreen = Dimensions.get("window").width;
const HeightScreen = Dimensions.get("window").height;

const style = StyleSheet.create({
    container:{
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center",
    height: HeightScreen /4,
    borderWidth: 3,
    borderRadius:20,
    marginBottom:10
    },
    image:{
        width:150,
        height:100,
    },
    text:{
    color:"gray",
    fontSize:20,
    }
    
})

export default style;