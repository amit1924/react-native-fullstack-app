import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const FooterMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Protected")}
      >
        <FontAwesome name="home" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <FontAwesome name="plus" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome
          name="info-circle"
          size={20}
          color="#fff"
          style={styles.icon}
          onPress={() => navigation.navigate("About")}
        />
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Account")}
      >
        <FontAwesome name="user" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon: {
    marginRight: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
