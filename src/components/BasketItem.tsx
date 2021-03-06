import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import {BasketItemI} from "../interfaces/interfaces";
import {addBasket, removeOneFromBasket} from "../store/actions/basketActions";
import {useDispatch} from "react-redux";

interface BasketItemPropsInterface {
    basketItem: BasketItemI
}

export const BasketItem: React.FC<BasketItemPropsInterface> = ({basketItem}) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.mainContainer} >
            <View >
                <Text style={styles.mainText} >{basketItem.product.name}</Text >
                <Text >Цена {basketItem.product.price} р</Text >
                <Text >итого за этот продукт {basketItem.num * basketItem.product.price}</Text >
            </View >
            <View style={styles.quantityArea}>
                <View >
                    <Button title={'-1'} onPress={
                        () => dispatch(removeOneFromBasket(basketItem.product.id))
                    } />
                </View >
                <View >
                    <Text >{basketItem.num} шт </Text >
                </View >
                <View >
                    <Button title={'+1'} onPress={
                        () => dispatch(addBasket(basketItem.product))
                    } />
                </View >
            </View >
        </View >
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
    quantityArea: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    mainText: {
        color: '#000',
    }
})
