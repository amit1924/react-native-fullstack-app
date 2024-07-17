import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignupPage = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      <Image source={require("../assets/home.jpg")} style={styles.homeImage} />
      <Text style={styles.title}>Unlock Your Account</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButtonWrapper}>
          <TouchableOpacity onPress={handleSignupPage}>
            <Text style={styles.signupButtonText}>Sign-up</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 140,
    height: 60,
    resizeMode: "contain",
    marginVertical: 20,
  },
  homeImage: {
    width: 231,
    height: 250,
  },
  title: {
    fontSize: 36,
    fontFamily: "bold",
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 220,
    borderWidth: 1,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "sans-serif",
  },
  signupButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",

    borderRadius: 100,
  },
  signupButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: "sans-serif",
  },
});

export default HomeScreen;
