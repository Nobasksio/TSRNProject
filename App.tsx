import React from 'react';
import {StyleSheet,
    KeyboardAvoidingView,
    Platform,
    View,
    Text,
    SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';

import {myStore} from './src/store/';
import {CatalogScreen} from "./src/screens/CatalogScreen";
import {CategoryScreen} from "./src/screens/CategoryScreen";
import {HistoryScreen} from "./src/screens/HistoryScreen";
import {BasketScreen} from "./src/screens/BasketScreen";
import {OrderScreen} from "./src/screens/OrderScreen";
import {ThankScreen} from "./src/screens/ThankScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {CategoryStack} from "./src/navigation/CategoryStack";

const StackNav = createStackNavigator();

export default function App() {
    return (
        <Provider store={myStore} >
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <SafeAreaView style={styles.container}>
                    <NavigationContainer >
                        <StackNav.Navigator >
                            <StackNav.Screen name="catalog"
                                             options={{ title: 'Каталог',
                                                 headerShown: false}}
                                             component={CategoryStack}
                            />
                            <StackNav.Screen name="history"
                                             options={{ title: 'История',
                                                 headerShown: false}}
                                             component={CategoryStack}
                            />
                            <StackNav.Screen name="basket"
                                             options={{ title: 'Корзина',
                                                 headerShown: false}}
                                             component={CategoryStack}

                            />
                            <StackNav.Screen name="category"
                                             options={({ route }) => ({ title: route.params.category.name })}
                                             component={CategoryScreen}
                            />
                            <StackNav.Screen name="order" component={OrderScreen}
                            />
                            <StackNav.Screen name="thank" component={ThankScreen}
                            />
                        </StackNav.Navigator >
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
