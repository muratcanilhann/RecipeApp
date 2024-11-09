import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { CATEGORIES_PUBLIC_API_URL } from '@env';
import useFetch from "../../hooks/useFetch/useFetch";

export default function Categories() {
    const { data, error, loading } = useFetch(CATEGORIES_PUBLIC_API_URL); // API URL'sini doğru geçiyoruz

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    if (!data || !data.categories) {
        return <Text>No categories found</Text>;
    }

    const renderItemCard = ({ item }) => <CategoryCard data={item} />;

    return (
        <View style={style.container}>
            <FlatList
                data={data.categories} // Burada doğru veriyi kullandığınızdan emin olun
                renderItem={renderItemCard}
                keyExtractor={(item) => item.idCategory.toString()} // idCategory'nin string olmasını sağladık
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
});
