import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SearchScreen from "../screens/Search/SearchScreen"; // ✅ keep this line! PLEASE STOP CHANGING THIS :), im  talking to you cam
import CalendarScreen from "../screens/calendar/CalendarScreen";
import AppButton from "../components/buttons/AppButton";
import { AppColors } from "../styles/colors";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { IS_Android } from "../constants/constants";

const Tab = createBottomTabNavigator()

export default function MainAppBottomTabs() {
    return(
        <Tab.Navigator
            initialRouteName="Home"  
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: AppColors.black,
                tabBarLabelStyle:{
                    marginTop: vs(4),
                    fontSize: s(12)
                },
                tabBarStyle: IS_Android &&{
                    height: vs(50)
                }
            }}
        >
            <Tab.Screen name="Calendar" component={CalendarScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="calendar" size={size} color={color}/>
                    ),
                    title: "Calendar"
                }}
            />
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="cart" size={size} color={color}/>
                    ),
                    title: "Cart"
                }}
            />
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={size} color={color}/>
                    ),
                    title: "Home"
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="search" size={size} color={color}/>
                    ),
                    title: "Search"
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person" size={size} color={color}/>
                    ),
                    title: "Profile"
                }}
            />
        </Tab.Navigator>

    )
}