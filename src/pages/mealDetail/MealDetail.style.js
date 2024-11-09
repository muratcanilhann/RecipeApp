import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        alignItems: "center",
        paddingVertical: 20, // ScrollView ile üst ve alt boşluk eklemek için
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10, // Görsel ve başlık arasında boşluk bırakmak için
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginVertical: 10, // Görselin üst ve altına boşluk eklemek için
    },
    button:{
        marginTop:10,
        
    }
});

export default style;
