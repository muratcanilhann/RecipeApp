import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, ScrollView, Linking } from "react-native";
import { GET_MEAL_API_URL } from "@env";
import style from "./MealDetail.style";
import useFetch from "../../hooks/useFetch/useFetch";

function MealDetail({ route }) {
    const { mealName } = route.params;
    
    const { data, error, loading } = useFetch(`${GET_MEAL_API_URL}${mealName}`);


    const handlePress = () => {
        if (data.meals[0].strYoutube) {
            Linking.openURL(data.meals[0].strYoutube); 
        } else {
            console.warn("YouTube linki mevcut değil.");
        }
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

  
    const meal = data.meals[0]; 

    return (
        <ScrollView contentContainerStyle={style.container}>
            <Text style={style.title}>{meal.strMeal}</Text>
            <Image
                source={{ uri: meal.strMealThumb }}
                style={style.image}
            />
            <Text>{meal.strInstructions}</Text>
            <View style={style.button}>
                <Button title="Watch Cooking" onPress={handlePress} />
            </View>
        </ScrollView>
    );
}

export default React.memo(MealDetail);
