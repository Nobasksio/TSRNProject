import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import {BasketItem} from "../components/BasketItem";
import {useNavigation} from "@react-navigation/native";
import {THEME} from "../style/theme";
import {RootState} from "../store";
import {useSelector} from "react-redux";

interface BasketScreenPropsInterface {
}

export const BasketScreen: React.FC<BasketScreenPropsInterface> = (props) => {

    const navigation = useNavigation();

    const selectBasket = (state: RootState) => state.basket

    const basket = useSelector(selectBasket);
    const totalSumm = basket.products.reduce((total, item) => {
        return  total + item.num * item.product.price
    }, 0)

    return (
        <View style={styles.mainContainer} >
            <Text style={styles.h1}>Ваша корзина</Text>
            <FlatList
                data={basket.products}
                renderItem={({item}) =>
                    <BasketItem basketItem={item}/>
                }
                keyExtractor={item => item.product.name}
            />
            <View>
                <Text style={styles.h1}> итого: {totalSumm}</Text>
            </View>
            <Button title='Перейти к оформлению заказ' onPress={()=>{
                navigation.navigate('order')
            }}/>
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
    h1: {
        ...THEME.h1,
        textAlign: 'center'
    }
})
