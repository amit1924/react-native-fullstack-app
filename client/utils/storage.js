import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("userToken", token);
    console.log("Token stored successfully");
  } catch (error) {
    console.error("Error storing user token", error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    console.log("Retrieved token:", token);
    return token;
  } catch (error) {
    console.error("Error getting user token", error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("userToken");
    console.log("Token removed successfully");
  } catch (error) {
    console.error("Error removing user token", error);
  }
};
