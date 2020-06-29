import React, {useEffect} from 'react';
import {StyleSheet} from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoryScreen} from "../screens/CategoryScreen";
import {CatalogScreen} from "../screens/CatalogScreen";
import {HistoryScreen} from "../screens/HistoryScreen";
import {BasketScreen} from "../screens/BasketScreen";
import {Tabbar} from "../components/Tabbar";
import {OrderScreen} from "../screens/OrderScreen";
import {ThankScreen} from "../screens/ThankScreen";
import {useDispatch} from "react-redux";
import {fetchCatalog} from "../store/actions/catalogActions";

interface CategoryStackPropsInterface {
}

const TabNav = createBottomTabNavigator();

const tabs = [
    {
        name: 'catalog',
        ruName: 'Каталог',
        type: '',
        isShow: true
    },
    {
        name: 'history',
        ruName: 'История',
        type: '',
        isShow: true
    },
    {
        name: 'basket',
        ruName: 'Корзина',
        type: '',
        isShow: true
    },
    {
        name: 'category',
        ruName: 'Корзина',
        type: '',
        isShow: false
    },
    {
        name: 'order',
        ruName: 'Оформление заказа',
        type: '',
        isShow: false
    },
    {
        name: 'thank',
        ruName: 'Спасибо за зака',
        type: '',
        isShow: false
    },
];

export const NavigationTabbar: React.FC<CategoryStackPropsInterface> = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCatalog())
    },[])
    return (
        <TabNav.Navigator tabBar={props => <Tabbar {...props} tabs={tabs}/>}>
            <TabNav.Screen name={'catalog'}
                           options={{ tabBarLabel: 'Каталог' }}
                           component={CatalogScreen}/>
            <TabNav.Screen name={'history'}
                           options={{ tabBarLabel: 'История', title: 'История' }}

                           component={HistoryScreen}/>
            <TabNav.Screen name={'basket'}
                           options={{ tabBarLabel: 'Корзина' }}
                           component={BasketScreen}/>
            <TabNav.Screen name="category"
                           component={CategoryScreen}/>
            <TabNav.Screen name="order"
                           component={OrderScreen}/>
            <TabNav.Screen name="thank"
                           component={ThankScreen}/>
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
