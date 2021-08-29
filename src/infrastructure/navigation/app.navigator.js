import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>Settings Screen</Text>
      <Button title="logout" onPress={() => onLogout()}>
        Logout
      </Button>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
