import React, {useMemo} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

interface ThankScreenPropsInterface {
}

export const ThankScreen: React.FC<ThankScreenPropsInterface> = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer} >
            <Text style={{textAlign: 'center'}}>
                Спасибо за заказ.
            </Text>
            <Text style={{textAlign: 'center'}}>
                Вы можете:
            </Text>
            <Button title={'Перейти к истории заказов'} onPress={()=>{
                navigation.navigate('historyTab')

            }}/>
            <Text style={{textAlign: 'center'}}>
                или
            </Text>
            <Button title={'Сделать ещё один заказ'} onPress={()=>{
                navigation.navigate('catalogTab')

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
        textAlign: 'center'
    },
})
