import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "./MealCard.style";
import { useNavigation } from "@react-navigation/native";

function MealCard({data}) { 

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("MealDetail",
        {
            mealName:data.strMeal
        })}>
        <View style={style.container}>
            <Image style={style.image} source={{ uri: data.strMealThumb }} />
            <Text style={style.text}>{data.strMeal}</Text> 
        </View>
        </TouchableOpacity>
    );
}

export default React.memo(MealCard);
