import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'

/* import components stacks */
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator'
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator'
import BottomTabNavigator from './BotttomTabNavigator'

/* import routes and screens */
import { routes, screens } from './RouteItems'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute().name
  return (
    <DrawerContentScrollView {...props}>
      { 
        routes.filter(route => route.showInDrawer).map((route, index) => {
          console.log(currentRouteName);
          const focusedRouteItem = routes.find(r => r.name === currentRouteName)
          console.log(focusedRouteItem);
          const focused = focusedRouteItem ?
            route.name === focusedRouteItem?.focusedRoute :
            route.name === screens.Homestack
          console.log(focused);
            return (
            <DrawerItem
              key={route.name}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {route.title}
                </Text>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  return (

    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#551E18',
        },
        drawerStyle: {
          backgroundColor: '#551E18',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Icon name='bars' size={20} color='#fff' />
          </TouchableOpacity>
        )
      })}

      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav}/>}
      >

      <Drawer.Screen 
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          headerTitle: () => <Image source={require('../../assets/hotel_logo.jpg')} />,
          headerTitleAlign: 'center',

          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon name='bell' size={20} color='#fff' />
            </View>
          ),
        }} 
      />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  //drawer content
  drawerLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#BA9490',
  },
})

export default DrawerNavigator