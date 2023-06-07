import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default Avatar = ({ name, imageSource }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/download.jpg")} style={styles.avatar} />
      <Text style={styles.name}>name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
