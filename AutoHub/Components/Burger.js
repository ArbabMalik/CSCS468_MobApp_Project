import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Avatar } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";

function Burger({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Icon name="arrow-left" size={30} color="#fff" style={styles.arrow} />
      </Pressable>
      <View style={styles.top}>
        <Avatar size={150} rounded source={require("../assets/download.jpg")} />
        <Text style={styles.name}>Abdul Rafay</Text>
      </View>
      <View style={styles.stline}></View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.navigate("Main")}>
          <Text style={styles.lin}>
            <Icon name="home" size={28} />
            <Text>    Home</Text>
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("NewAd")}>
          <Text style={styles.lin}>
            <Icon name="plus" size={28} />
            <Text>    New ad</Text>
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Favorites")}>
          <Text style={styles.lin}>
            <Icon name="heart" size={28} />
            <Text>    Favorites</Text>
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.lin}>
            <Icon name="gear" size={28} />
            <Text>    Settings</Text>
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Myads")}>
          <Text style={styles.lin}>
            <Icon name="user" size={28} />
            <Text>    My ads</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Burger;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F2F32",
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 30,
    flex: 1,
  },
  lin: {
    width: "42%",
    fontSize: 18,
    color: "#ff6161",
    marginHorizontal: "auto",
    marginVertical: 25,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    marginHorizontal: "auto",
  },
  name: {
    flexWrap: "wrap",
    fontSize: 22,
    marginLeft: 10,
    marginTop: 20,
    color: "#ff6161",
    fontWeight: 'bold',
  },
  stline: {
    borderWidth: 1,
    width: "100%",

    borderColor: "#ff6161",
    marginVertical: 20,
    marginBottom: 40,
  },
});
