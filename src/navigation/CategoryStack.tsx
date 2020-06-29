import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoryScreen} from "../screens/CategoryScreen";
import {CatalogScreen} from "../screens/CatalogScreen";
import {HistoryScreen} from "../screens/HistoryScreen";
import {BasketScreen} from "../screens/BasketScreen";

interface CategoryStackPropsInterface {
}

const TabNav = createBottomTabNavigator();

export const CategoryStack: React.FC<CategoryStackPropsInterface> = (props) => {

    return (
        <TabNav.Navigator>
            <TabNav.Screen name={'catalogTab'}
                           options={{ tabBarLabel: 'Каталог' }}
                           component={CatalogScreen}/>
            <TabNav.Screen name={'historyTab'}
                           options={{ tabBarLabel: 'История', title: 'История' }}

                           component={HistoryScreen}/>
            <TabNav.Screen name={'basketTab'}
                           options={{ tabBarLabel: 'Корзина' }}
                           component={BasketScreen}/>
        </TabNav.Navigator>
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
