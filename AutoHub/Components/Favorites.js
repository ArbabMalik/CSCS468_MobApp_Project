import React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import Add from "../Components/Add.js";
import Icon from "react-native-vector-icons/FontAwesome";
// import { ScrollView } from 'react-native-web';

export default function Favorites({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate("Burger")}>
          <Icon name="arrow-left" size={30} color="#fff" style={styles.arrow} />
        </Pressable>
        <Text style={styles.heading}>Favorite Ads</Text>
        <View style={{ marginLeft: "5%" }}>
          <Add />
          <Add />
          <Add />
        </View>
        <View style={styles.buttoncls}>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("Burger")}
          >
            <Text style={styles.text}>Save</Text>
          </Pressable>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("Burger")}
          >
            <Text style={styles.text}>Cancel</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F2F32",
    width: "100%",
    flex: 1,
  },
  arrow: {
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    color: "#ff6161",
    marginTop: 20,
    marginLeft: 40,
    fontWeight: "bold",
  },
  buttoncls: {
    // flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  btn1: {
    width: 119,
    height: 48,
    borderRadius: 40,
    backgroundColor: "#FF6161",
  },
  btn2: {
    width: 119,
    height: 48,
    borderRadius: 40,
    backgroundColor: "#D9D9D9",
  },

  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#ff6161",
    borderRadius: 40,
    width: 150,
    height: 40,
    // marginRight:10
    marginBottom: "10%",
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
