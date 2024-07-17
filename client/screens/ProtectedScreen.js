import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import HeaderMenu from "../Menus/HeaderMenu";
import FooterMenu from "../Menus/FooterMenu";

// BlogCard Component
const BlogCard = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

// ProtectedScreen Component
const ProtectedScreen = () => {
  const navigation = useNavigation();

  // Global state
  const [state] = useAuth();

  const blogs = [
    {
      id: "1",
      title: "Understanding React",
      description: "A deep dive into React hooks and state management.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
    },
    {
      id: "2",
      title: "JavaScript ES6 Features",
      description: "Learn about the latest features in JavaScript ES6.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
    },
    {
      id: "3",
      title: "Styling in React Native",
      description: "How to style your React Native apps with StyleSheet.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aejDvmasCUCqcMlM2nUu_MqZkHfAuhI3lw&s",
    },
    {
      id: "4",
      title: "State Management with Redux",
      description: "Managing application state using Redux.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nMzwva2I5vJbfyuhfQpHYgn3coR6Un6hyA&s",
    },
    {
      id: "5",
      title: "Introduction to TypeScript",
      description: "Getting started with TypeScript for JavaScript developers.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
    {
      id: "6",
      title: "API Integration in React",
      description: "How to integrate APIs in your React applications.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFNtM0BMUixQYy8k4ih4sVS-GONo8Cplo9g&s",
    },
    {
      id: "7",
      title: "Building Responsive Layouts",
      description: "Creating responsive layouts in React Native.",
      image:
        "https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png",
    },
    {
      id: "8",
      title: "Using Context API",
      description: "Simplifying state management with Context API.",
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5923684/og_image/optimized/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    },
    {
      id: "9",
      title: "React Navigation",
      description: "Navigating between screens in a React Native app.",
      image: "https://miro.medium.com/v2/resize:fit:674/0*rx38PnCyTy5i1PBl.png",
    },
    {
      id: "10",
      title: "Debugging React Apps",
      description: "Tips and tools for debugging React applications.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCr1U_4zHjKIB1fqzw6Ce5JTqDLoeCBWLW5w&s",
    },
    {
      id: "11",
      title: "Performance Optimization",
      description: "Optimizing performance in React and React Native.",
      image:
        "https://granulate.io/wp-content/uploads/2021/04/Mastering-Performance-Optimization-510x300-2.png",
    },
    {
      id: "12",
      title: "Deploying React Apps",
      description: "Best practices for deploying React applications.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7XiZDuRb-d31UuD1vsrOceSj1wtqLco2kQ&s",
    },
  ];

  const goBackToHomePage = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Protected Screen</Text>
      <View style={styles.contentContainer}>
        <HeaderMenu />

        <FlatList
          data={blogs}
          renderItem={({ item }) => (
            <BlogCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
      <FooterMenu />
    </View>
  );
};

export default ProtectedScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  data: {
    fontSize: 14,
    color: "#777",
    margin: 30,
    fontSize: 22,
  },
  list: {
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
  },
});
