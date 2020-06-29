import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {CategoryItemI} from "../interfaces/interfaces";

interface CategoryItemPropsInterface {
    category: CategoryItemI
}

export const CategoryItem: React.FC<CategoryItemPropsInterface> = (props) => {
    const navigation = useNavigation();
    const goToCategory = ()=> {
        navigation.navigate('category', {category: props.category})
    };
    return (
        <TouchableOpacity style={styles.mainContainer}
        onPress={goToCategory}>
            <View  >
                <Text style={styles.mainText}>{props.category.name}</Text >
            </View >
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        margin: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    mainText: {
        color: '#000',
    }
})
