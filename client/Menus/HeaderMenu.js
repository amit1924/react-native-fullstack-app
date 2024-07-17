import React from "react";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const HeaderMenu = () => {
  const navigation = useNavigation();
  const [, setState] = useAuth(); // Destructuring to ignore the first value if not needed
  const handleLogout = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
    alert("User logged out successfully");
    navigation.navigate("Login");
  };

  return (
    <View style={{ marginLeft: 290, marginBottom: 15 }}>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome name="sign-out" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMenu;
