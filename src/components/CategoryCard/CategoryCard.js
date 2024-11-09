import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./CategoryCard.style";
import { useNavigation } from "@react-navigation/native";

function CategoryCard({data}) { 

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Meals",
        {
            category:data.strCategory

        })}>
        <View style={style.container}>
            <Image style={style.image} source={{ uri: data.strCategoryThumb }} />
            <Text style={style.text}>{data.strCategory}</Text> 
        </View>
        </TouchableOpacity>
    );
}

export default React.memo(CategoryCard);
