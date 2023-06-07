import React from "react";
import ImageSlider from "./ImageSlider";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

export default function Descp({ navigation }) {
  const images = [
    require("../assets/corolla.jpg"),
    require("../assets/corolla2.jpg"),
    require("../assets/corolla3.jpg"),
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate("Main")}>
          <Icon name="arrow-left" size={30} color="#fff" style={styles.arrow} />
        </Pressable>
        <ImageSlider images={images} />

        <View style={styles.row}>
          <Text style={styles.name}>Toyota Corolla</Text>
          <Text style={styles.price}>24 Lacs</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Location</Text>
          <Text style={styles.price1}>Lahore</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Model</Text>
          <Text style={styles.price1}>Corolla</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Model Year</Text>
          <Text style={styles.price1}>2015</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Exterior Color</Text>
          <Text style={styles.price1}>White</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Registration City</Text>
          <Text style={styles.price1}>Lahore</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Mileage in Kilometers</Text>
          <Text style={styles.price1}>130,000</Text>
        </View>
        <View style={styles.rows}>
          <Text style={styles.name1}>Condition</Text>
          <Text style={styles.price1}>Used</Text>
        </View>
        <Text style={styles.des}>
          Using this car since 7 years. New wheels and engine tuned recently.
          Will sale to nearest offer.
        </Text>
        <View>
          <Text style={styles.con}>Arbab</Text>
          <Text style={styles.con}>0234909243</Text>
          <Text style={styles.con}>Arbab@gmail.com</Text>
        </View>
        <View style={styles.buttoncls}>
          <Pressable
            style={styles.button2}
            onPress={() => alert("Seller Number: +92 3421 34324")}
          >
            <Text style={styles.text1}>Contact Seller</Text>
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
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  arrow: {
    marginBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10%",
    marginTop: "10%",
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "3%",
  },
  name: {
    fontSize: 24,
    color: "#ff6161",
    fontWeight: 700,
  },
  price: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  name1: {
    fontSize: 20,
    color: "#ff6161",
  },
  price1: {
    fontSize: 20,
    color: "#fff",
  },
  des: {
    marginVertical: 40,
    flexWrap: "wrap",
    color: "#fff",
    fontSize: 20,
  },
  con: {
    fontSize: 18,
    fontWeight: 600,
    color: "#ff6161",
  },
  buttoncls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF6161",
    borderRadius: 40,
    width: 200,
    height: 40,
    marginRight: 10,
    marginVertical: "10%",
  },

  text1: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
