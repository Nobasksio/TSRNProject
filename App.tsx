import React, {useEffect} from 'react';
import {StyleSheet,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';

import {myStore} from './src/store/';
import {NavigationTabbar} from "./src/navigation/NavigationTabbar";
import {fetchCatalog} from "./src/store/actions/catalogActions";


export default function App() {
    return (
        <Provider store={myStore} >
            <StatusBar barStyle={'dark-content'} />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <SafeAreaView style={styles.container}>
                    <NavigationContainer >
                        <NavigationTabbar/>
                    </NavigationContainer >
                </SafeAreaView >
            </KeyboardAvoidingView >
        </Provider >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
