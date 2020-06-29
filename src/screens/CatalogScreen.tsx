import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import {CategoryItem} from "../components/CategoryItem";
import {RootState} from "../store";
import {useSelector} from "react-redux";
import {THEME} from "../style/theme";

interface CatalogScreenPropsInterface {
}

export const CatalogScreen: React.FC<CatalogScreenPropsInterface> = () => {

    const selectCatalog = (state: RootState) => state.catalog

    const catalog = useSelector(selectCatalog);

    return (
        <View style={styles.mainContainer} >
            <Text style={styles.h1}>Каталог</Text>
            <FlatList
                data={catalog.categories}
                renderItem={({item}) =>
                    <CategoryItem key={item.id} category={item} />
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

    },
    mainText: {
        color: '#000',
    },
    h1: {
        ...THEME.h1
    }

})
