import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import {ProductItem} from "../components/ProductItem";
import {RootState} from "../store";
import {useSelector} from "react-redux";
import {THEME} from "../style/theme";

interface CategoryScreenPropsInterface {
    route: {
        params: any
    }
    navigation: object
}

export const CategoryScreen: React.FC<CategoryScreenPropsInterface> = ({route, navigation}) => {

    const { category } = route.params;
    const selectCatalog = (state: RootState) => state.catalog
    const catalog = useSelector(selectCatalog);
    const categoryProducts = catalog.products.filter(item => {
        return category.id === item.category
    })

    return (
        <>
            <View style={styles.mainContainer} >
                <Text style={styles.h1}>{category.name}</Text>
                <FlatList
                    data={categoryProducts}
                    renderItem={({item}) =>
                        <ProductItem product={item} />
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    h1: {
        ...THEME.h1
    }
})
