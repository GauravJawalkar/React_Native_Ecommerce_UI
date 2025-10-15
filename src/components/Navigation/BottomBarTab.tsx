import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Box, Heart, House, ShoppingCart, SlidersHorizontal, UserCog } from 'lucide-react-native'
import MainHome from '../../screens/Home/MainHome'
import { View } from 'react-native'
import Wishlist from '../../screens/Wishlist/Wishlist'
import Products from '../../screens/Products/Products'
import Profile from '../../screens/Profile/Profile'
import Cart from '../../screens/Cart/Cart'

export type BottomTabParamList = {
    Home: undefined
    Wishlist: undefined
    Products: undefined
    Settings: undefined
    Profile: undefined
    Cart: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomBarTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                lazy: true,
                tabBarActiveTintColor: '#006400',
                tabBarInactiveTintColor: '#a0a0a0',
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 5, },
                tabBarStyle: { paddingTop: 7, height: 60, borderTopRightRadius: 24, borderTopLeftRadius: 24, backgroundColor: '#f9fafb' },
                tabBarIcon: ({ focused }) => {
                    let iconColor = focused ? 'green' : 'gray'
                    let iconSize = 24
                    if (route.name === 'Home') {
                        return <View className={`rounded-full`}>
                            <House color={iconColor} size={24} />
                        </View>
                    } else if (route.name === 'Wishlist') {
                        return <View><Heart color={iconColor} size={iconSize} /></View>
                    } else if (route.name === 'Products') {
                        return <View><Box color={iconColor} size={iconSize} /></View>
                    } else if (route.name === 'Settings') {
                        return <View><SlidersHorizontal color={iconColor} size={iconSize} /></View>
                    } else if (route.name === 'Profile') {
                        return <View><UserCog color={iconColor} size={iconSize} /></View>
                    } else if (route.name === 'Cart') {
                        return <View><ShoppingCart color={iconColor} size={iconSize} /></View>
                    }
                },
            })}>
            <Tab.Screen name="Home" component={MainHome} />
            <Tab.Screen name="Wishlist" component={Wishlist} />
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomBarTab
