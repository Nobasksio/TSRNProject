import React, {useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {HistoryOrderItem} from "../components/HistoryOrderItem";
import {THEME} from "../style/theme";
import {RootState} from "../store";
import {useSelector} from "react-redux";

interface HistoryScreenPropsInterface {
}

export const HistoryScreen: React.FC<HistoryScreenPropsInterface> = ({route, navigation}) => {

    const selecthistory = (state: RootState) => state.history;
    const history = useSelector(selecthistory);

    const historyList = history.orders.map((item)=> (
        <HistoryOrderItem key={item.date.toString()} order={item}/>
    ))

    return (
        <View style={styles.mainContainer} >
            <Text style={styles.h1} >История заказов</Text>
            <ScrollView>
                {historyList}
            </ScrollView>
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
        ...THEME.h1
    }
})
