import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {NavigationI} from "../interfaces/interfaces";

const {width} = Dimensions.get('window');


interface TabbarProps {
    state: {
        routes: {
            name: string,
        }[],
        index: number
    }
    descriptors: object
    navigation: {
        navigate(name: string) : void
    },
    tabs: NavigationI[]
}


export const Tabbar: React.FC<TabbarProps> = ({state, descriptors, navigation, tabs}) => {

    const activeScreenName = state.routes[state.index].name;

    const viewTabs = tabs.filter((item: any) => item.isShow);

    const selectBasket = (state: RootState) => state.basket

    const basket = useSelector(selectBasket);

    const numProduct = basket.products.reduce((sum, item) => {
        return sum + item.num
    }, 0)

    const tabsList = viewTabs.map(item => (
        <TouchableOpacity key={item.name}
                          onPress={() => {
                              navigation.navigate(item.name)
                          }} >
            <View >
                <Text style={
                    activeScreenName === item.name ? styles.activeTabBarText : {}} >{item.ruName}
                </Text >
                {numProduct > 0 && item.name === 'basket' &&
                <View style={styles.badge} >
                    <Text style={styles.badgeText} >
                        {numProduct}
                    </Text >
                </View >
                }
            </View >
        </TouchableOpacity >
    ))
    return (

        <View style={styles.container} >
            {tabsList}
        </View >
    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',

        bottom: 0,
        height: 60,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    activeTabBarText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    badge: {
        position: 'absolute',
        top: -10,
        right: -10,
    },
    badgeText: {}
});
