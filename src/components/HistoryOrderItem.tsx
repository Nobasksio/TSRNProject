import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {OrderHistoryItem} from "../interfaces/interfaces";
import {addBasket} from "../store/actions/basketActions";

interface HistoryOrderItemPropsInterface {
    order: OrderHistoryItem
}

export const HistoryOrderItem: React.FC<HistoryOrderItemPropsInterface> = (props) => {

    const orderProducts = props.order.products.map(item => (
        <View style={styles.productItem}>
            <Text style={styles.mainText} >{item.product.name}</Text >
            <Text >Цена {item.product.price} р</Text >
            <Text >шт {item.num}</Text >
        </View >

    ))
    return (
        <View style={styles.mainContainer} >
            <Text style={styles.h2}>
                Заказ {props.order.date.toDateString()}
            </Text >
            <View >
                {orderProducts}
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    h2: {
        fontWeight: 'bold',
    },
    productItem:{
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})
