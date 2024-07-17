import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import FooterMenu from "../Menus/FooterMenu";
import { useAuth } from "../context/AuthContext";
import { colors } from "../utils/colors"; // Assuming you have a colors utility file

const AccountScreen = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [state] = useAuth();
  const { user } = state;

  const showUserInfo = () => {
    setUserInfo([user._id, user.name, user.email]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showUserInfo}>
        <Text style={styles.buttonText}>Show User Info</Text>
      </TouchableOpacity>

      {userInfo.length > 0 && (
        <View style={styles.userInfoContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
            }}
            style={styles.userImage}
          />
          <Text style={styles.userInfoText}>ID: {userInfo[0]}</Text>
          <Text style={styles.userInfoText}>Name: {userInfo[1]}</Text>
          <Text style={styles.userInfoText}>Email: {userInfo[2]}</Text>
        </View>
      )}

      <FooterMenu />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 5,
  },
});
