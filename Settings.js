import React from "react";
import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import { Avatar } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.ava}>
        <Icon name="arrow-left" size={30} color="#fff" style={styles.arrow} />
        <View style={styles.top}>
          <Avatar
            size={150}
            rounded
            source={require("../assets/download.jpg")}
          />
          <Text style={styles.name}>Abdul Rafay </Text>
        </View>
      </View>
      <View style={styles.tops}>
        <Text style={styles.field}>John Doe</Text>
        <Text style={styles.field}>03389237428384</Text>
        <Text style={styles.field}>rafay@gmail.com</Text>
        <Text style={styles.field}>******</Text>
        <View style={styles.main}>
          <View style={styles.swi}>
            <Text style={styles.all}>Allow notifications</Text>
            <View style={styles.switch}>
              <Switch />
            </View>
          </View>
          <View
            style={styles.log}
            onPress={() => navigation.navigate("Signin")}
          >
            <Icon name="power-off" size={27} color="red" />
            <Text
              style={{ marginLeft: 20, fontSize: 20, color: "red" }}
              onPress={() => navigation.navigate("Signin")}
            >
              LOGOUT
            </Text>
          </View>
          <View style={styles.buttoncls}>
            <Pressable style={styles.button}>
              <Text
                style={styles.text}
                onPress={() => navigation.navigate("Burger")}
              >
                Save
              </Text>
            </Pressable>
            <Pressable style={styles.button2}>
              <Text
                style={styles.text1}
                onPress={() => navigation.navigate("Burger")}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F2F32",
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 30,
    flex: 1,
  },
  ava: {
    height: 200,
  },
  tops: {
    width: "75%",
    marginHorizontal: "10%",
  },
  switch: {
    marginTop: 15,
  },
  field: {
    width: "100%",
    height: 42,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    margin: 10,
    fontSize: 16,
    // TextAlign:'ju'
    paddingTop: 10,
    paddingLeft: 15,
    color: "#ff6161",
    fontWeight: "bold",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    marginHorizontal: "15%",
  },
  name: {
    flexWrap: "wrap",
    fontSize: 22,
    marginLeft: 10,
    marginTop: 50,
    color: "#ff6161",
    fontWeight: "bold",
    // alignItems:'center'
  },
  all: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 10,
    color: "#FF6161",
  },
  swi: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  log: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: "#FF0000",
    flexDirection: "row",
  },
  buttoncls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF6161",
    borderRadius: 40,
    width: 120,
    height: 40,
    marginRight: 10,
  },

  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    width: 120,
    height: 40,
    // marginRight:10
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },

  main: {
    marginLeft: 20,
  },
});
