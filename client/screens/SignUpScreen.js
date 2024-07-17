import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.navigate("Login");
  };

  const goBackToHomePage = () => {
    navigation.navigate("Home");
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.6:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();

      const { message, error } = data;
      if (response.ok) {
        navigation.navigate("Login");
        alert(message);
      } else {
        alert(message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={goBackToHomePage}
      >
        <Ionicons
          name={"arrow-back-outline"}
          color={colors.primary}
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Hey,</Text>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.heading}>back</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"person-outline"} size={30} color={colors.primary} />
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor={colors.gray}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={30} color={colors.primary} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor={colors.gray}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name={"lock-closed-outline"}
            size={30}
            color={colors.primary}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor={colors.gray}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={30}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButtonWrapper}
          onPress={handleSignUp}
        >
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require("../assets/googlee.jpg")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={goToLoginPage}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 40,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 32,
    color: colors.primary,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 10,
    color: colors.black,
  },
  loginButtonWrapper: {
    marginTop: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 30,
    width: 30,
  },
  googleText: {
    fontSize: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 2,
  },
  accountText: {
    fontSize: 14,
    color: colors.primary,
  },
  signupText: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
});
