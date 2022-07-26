import React from 'react';
import {SafeAreaView} from "react-native";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";
import UserProfile from "./screens/UserProfile";
import CreateChat from "./screens/CreateChat";
import CreateGroup from "./screens/CreateGroup";
import {colors} from "./config/constants";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const defaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.primaryColor,
    },
};

const TabsNavigator = () => (
    <Tabs.Navigator screenOptions={({route}) => ({
        tabBarStyle: {
            backgroundColor: colors.primaryColorAlt,
            borderTopColor: colors.secondaryColorAlt,
        },
        headerStyle: {
            shadowColor: colors.secondaryColorAlt,
            elevation: 0,
            backgroundColor: colors.primaryColorAlt,
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.thirdColor,
        tabBarInactiveTintColor: colors.secondaryColorAlt,
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Chats') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
            } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        }
    })}>
        <Tabs.Screen name="Chats" component={ChatList}/>
        <Tabs.Screen name="Settings" component={Settings}/>
    </Tabs.Navigator>
)

const App = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.primaryColor}}>
            <StatusBar style="light"/>
            <NavigationContainer theme={defaultTheme}>
                <Stack.Navigator screenOptions={() => ({
                    headerStyle: {
                        shadowColor: colors.secondaryColorAlt,
                        elevation: 0,
                        backgroundColor: colors.primaryColorAlt,
                    },
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }
                })}>
                    <Stack.Screen name="Main" component={TabsNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name="SignIn" component={SignIn}
                                  options={{headerShown: false, presentation: "fullScreenModal"}}/>
                    <Stack.Screen name="SignUp" component={SignUp}
                                  options={{headerShown: false, presentation: "fullScreenModal"}}/>
                    <Stack.Screen name="Chat" component={Chat}/>
                    <Stack.Screen name="UserProfile" component={UserProfile} options={{title: 'Profile'}}/>
                    <Stack.Screen name="CreateChat" component={CreateChat} options={{title: 'New Chat'}}/>
                    <Stack.Screen name="CreateGroup" component={CreateGroup} options={{title: 'New Group'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;
