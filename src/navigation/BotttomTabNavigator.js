import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* import navigators for tabs */
import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import ContactStackNavigator from './stack-navigators/ContactStackNavigator'
import BookStackNavigator from './stack-navigators/BookStackNavigator'
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator'
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator'

/* routes and screens import */
import { screens, routes } from './RouteItems'

const Tab = createBottomTabNavigator()

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name)

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    }
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => {
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    },
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions} >

      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator}/>
      <Tab.Screen name={screens.BookStack} component={BookStackNavigator} />
      <Tab.Screen name={screens.ContactStack} component={ContactStackNavigator} />

      <Tab.Screen name={screens.MyRewardsStack} component={MyRewardsStackNavigator}/>
      <Tab.Screen name={screens.LocationsStack} component={LocationsStackNavigator}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 60,
  },
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  }
})

export default BottomTabNavigator