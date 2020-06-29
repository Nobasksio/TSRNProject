import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {TextField} from "../components/TextField";
import {PhoneField} from "../components/PhoneField";
import {useDispatch, useSelector} from "react-redux";
import {clearBasket, setAddress, setName, setPhone} from "../store/actions/basketActions";
import {RootState} from "../store";
import { saveOrdertoStorage } from "../store/actions/historyActions";
import {useNavigation} from "@react-navigation/native";

interface OrderScreenPropsInterface {
}

export const OrderScreen: React.FC<OrderScreenPropsInterface> = (props) => {

    const navigation = useNavigation();

    const [isValid, setIsValid] = useState(false);
    const [validError, setValidError] = useState('Все поля обязательны для заполнения');
    const dispatch = useDispatch();
    const selectBasket = (state: RootState) => state.basket;
    const basket = useSelector(selectBasket);

    useEffect(() => {
        if (basket.name === ''){
            setIsValid(false);
            setValidError('Вы не заполнили Имя');
        } else if (basket.address === '') {
            setIsValid(false);
            setValidError('Вы не заполнили Адресс');
        } else if (basket.phone.length < 18) {
            setIsValid(false);
            setValidError('Вы не заполнили телефон');
        } else {

            setIsValid(true);
        }
    }, [basket])
    const trySaveOrder = () =>{
        if (isValid){
            dispatch(saveOrdertoStorage(basket))
            dispatch(clearBasket())
            navigation.navigate('thank')
        }
    }
    return (
        <View style={styles.mainContainer} >
            <TextField nameField={'Имя'}
                       value={basket.name}
                       onChange={(value) => {
                           dispatch(setName(value))
                       }} />
            <TextField nameField={'Адрес'}
                       value={basket.address}
                       onChange={(value) => {
                           dispatch(setAddress(value))
                       }}/>
            <PhoneField nameField={'Телефон'}

                        value={basket.phone}
                        onChange={(value) => {
                            dispatch(setPhone(value))
                        }}
            />
            {!isValid &&
                <Text style={{textAlign: 'center'}}>
                    {validError}
                </Text>
            }
            <Button disabled={!isValid}  title={'Оформить заказ'} onPress={() => {
                trySaveOrder()
            }} />
        </View >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
})
