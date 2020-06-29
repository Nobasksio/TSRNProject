import React, {useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import {ProductItem} from "../components/ProductItem";
import {useNavigation} from "@react-navigation/native";
import {RootState} from "../store";
import {useSelector} from "react-redux";

interface CategoryScreenPropsInterface {
    route: object
    navigation: object
}

export const CategoryScreen: React.FC<CategoryScreenPropsInterface> = ({route, navigation}) => {

    const selectCatalog = (state: RootState) => state.catalog

    const catalog = useSelector(selectCatalog);

    return (
        <View style={styles.mainContainer} >
            <FlatList
                data={catalog.products}
                renderItem={({item}) =>
                    <ProductItem product={item}/>
                }
                keyExtractor={item => item.id.toString()}
            />
        </View >
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
})
