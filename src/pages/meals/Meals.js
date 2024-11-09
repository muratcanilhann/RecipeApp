import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet,Text } from "react-native";
import {CATEGORIED_MEALS_API_URL} from "@env";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import axios from "axios";
import MealCard from "../../components/MealCard/MealCard";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Meals({route}) {
    
    const {category} = route.params;
  
    const {data,error,loading} = useFetch(`${CATEGORIED_MEALS_API_URL}${category}`);

  

           
            

    
    const renderItemCard = ({ item }) => <MealCard data={item} />; 
   
    return (
        <View style={style.container}>
           <FlatList
            data={data.meals}
            renderItem={renderItemCard}
           />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    
    }
});
