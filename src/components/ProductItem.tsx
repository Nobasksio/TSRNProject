import React, {useMemo} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {ProductItemI} from "../interfaces/interfaces";
import {useDispatch} from "react-redux";
import {addBasket} from "../store/actions/basketActions";

interface ProductItemPropsInterface {
    product: ProductItemI
}

export const ProductItem: React.FC<ProductItemPropsInterface> = (props) => {

    const dispatch = useDispatch();
    return (
        <View style={styles.mainContainer} >
            <View >
                <Text style={styles.mainText} >{props.product.name}</Text >
                <Text >Цена {props.product.price} р</Text >
            </View >
            <View>
                <Button title={'В корзину'} onPress={
                    ()=> dispatch(addBasket(props.product))
                }/>
            </View>
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
    mainText: {
        color: '#000',
    }
})
