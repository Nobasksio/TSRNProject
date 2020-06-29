import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {HistoryOrderItem} from "../components/HistoryOrderItem";
import {THEME} from "../style/theme";
import {RootState} from "../store";
import {useDispatch, useSelector} from "react-redux";
import {loadAsyncHistory} from "../store/actions/historyActions";

interface HistoryScreenPropsInterface {
    route: object,
    navigation: object
}

export const HistoryScreen: React.FC<HistoryScreenPropsInterface> = ({route, navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAsyncHistory())
    },[]);
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
