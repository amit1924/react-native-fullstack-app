import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you have FontAwesome icons installed

const AboutScreen = () => {
  console.log("working");
  const navigation = useNavigation();

  const fadeInAnim = new Animated.Value(0);

  const fadeIn = () => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeInAnim }]}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.description}>
          I am a passionate developer with a focus on creating impactful and
          user-friendly applications. My expertise lies in Web Development.
        </Text>
        <Text style={styles.skillsHeading}>Skills:</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillItem}>React Native</Text>
          <Text style={styles.skillItem}>JavaScript</Text>
          <Text style={styles.skillItem}>Node.js</Text>
          <Text style={styles.skillItem}>HTML/CSS</Text>
          {/* Add more skills as needed */}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Protected")}
        >
          <Text style={styles.buttonText}>Home Page</Text>
          <FontAwesome name="arrow-right" size={18} color="#FFF" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  skillsHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  skillItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    marginRight: 10,
    fontSize: 16,
  },
});
