import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Add() {
  return (
    <View style={styles.box}>
      <View>
        <Image style={styles.img} source={require("../assets/civic.jpg")} />
      </View>
      <View style={styles.right}>
        <View style={styles.tex}>
          <Text style={styles.head}>Honda Civic X</Text>
          <Text style={styles.desc}>Automatic, 40,000 KM, 2019</Text>
        </View>
        <Icon
          name="trash"
          size={30}
          color="red"
          style={styles.a}
          onPress={() => alert("AD REMOVED!!!", "OK")}
        />
      </View>
    </View>
  );
}

export default Add;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F2F32",
    width: "100%",
  },
  img: {
    width: 151,
    height: 151,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF6161",
  },
  heading: {
    fontSize: 18,
    color: "#ff6161",
    marginTop: 50,
    marginLeft: 40,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 25,
    width: "80%",
    marginHorizontal: "auto",
  },
  tex: {
    maxWidth: 210,
    maxHeight: 85,
    minHeight: 85,
    overflow: "hidden",
  },
  head: {
    color: "#FF6161",
    fontSize: 18,
    fontWeight: 700,
  },
  desc: {
    fontSize: 14,
    color: "#ffffff",
  },
  right: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
