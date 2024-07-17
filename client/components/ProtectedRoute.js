import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProtectedScreen from "../screens/ProtectedScreen";
import AccountScreen from "../screens/AccountScreen";

import { useAuth } from "../context/AuthContext";
import HeaderMenu from "../Menus/HeaderMenu";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createNativeStackNavigator();

const ProtectedRoute = () => {
  const [state] = useAuth();
  const isAuthenticated = state?.user && state?.token;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Protected" component={ProtectedScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedRoute;
