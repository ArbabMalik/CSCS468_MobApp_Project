import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  Text,
  StatusBar,
  //   Button,
  TouchableWithoutFeedback,
  Alert,
  View,
  SafeAreaView,
  Image,
  Platform,
  Dimensions,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
// import { TextInput } from "react-native-web";

export default function NewAd({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: "#FF6161",
          fontWeight: "bold",
          paddingTop: 10,
        }}
      >
        Create a New Ad
      </Text>
      <Text style={{ fontSize: 20, color: "white", marginTop: 60 }}>
        Vehicle Information
      </Text>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Location
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. Lahore, Islamabad, Karachi"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>Type</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. SUV, Car, Bike"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>Make</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. Toyota, Honda, KIA"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>Model</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. corolla, civic, sportage"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Exterior Color
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. Blue, Superwhite, Bronze Micca"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Registeration City
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. Lahore, Islamabad, Karachi"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>Price</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="PKR. "
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Mileage in Kilometers
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="e.g. 320"
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Vehicle Description
          </Text>
          <View style={[styles.inputContainer, styles.inputContainer2]}>
            <TextInput
              placeholder="Tell others more about your vehicle."
              placeholderTextColor={"grey"}
              style={styles.inputStyle}
            ></TextInput>
          </View>
        </View>
        <Text
          style={[
            styles.promtStyles,
            { marginTop: "10%", marginBottom: "5%", fontSize: 20 },
          ]}
        >
          Upload Pictures
        </Text>
        <View style={styles.galleryContainer}>
          <View
            style={[
              styles.galleryItem,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={{ color: "black", fontWeight: "900", fontSize: 45 }}>
              +
            </Text>
          </View>
          <View style={styles.galleryItem}></View>
          <View style={styles.galleryItem}></View>
          <View style={styles.galleryItem}></View>
          <View style={styles.galleryItem}></View>
          <View style={styles.galleryItem}></View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => [
            alert("AD UPLOADED!", "OK"),
            navigation.navigate("Main"),
          ]}
        >
          <Text style={styles.text}>Create</Text>
        </Pressable>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 50,
          }}
        >
          <Pressable
            style={[styles.button, { width: 100 }]}
            onPress={() => navigation.navigate("Descp")}
          >
            <Text style={styles.text}>Preview</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { width: 100 }]}
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
    flex: 1,
    backgroundColor: "#2f2f32",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
    // paddingTop: Platform.OS === "android" ? 30:0,
  },

  promptContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "5%",
  },

  promtStyles: {
    color: "#FF6161",
    fontSize: 20,
    marginTop: "5%",
  },

  inputContainer: {
    backgroundColor: "#D9D9D9",
    width: 250,
    height: 50,
    borderRadius: 10,
    marginTop: "1%",
  },

  inputStyles: {
    // backgroundColor:'#D9D9D9',
    fontSize: 20,
  },

  forgot: {
    textDecorationLine: "underline",
    color: "white",
    fontSize: 16,
    paddingTop: "3%",
    marginLeft: "30%",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF6161",
    borderRadius: 40,
    marginTop: "15%",
    width: 270,
    height: 50,
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  scrollView: {
    backgroundColor: "#2f2f32",
    marginHorizontal: "15%",
    paddingTop: 20,
  },

  range: {
    flexDirection: "row",
  },

  rangeInput: {
    width: "30%",
  },

  rangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
  },

  inputContainer2: {
    height: 120,
    placeholderTextColor: "grey",
  },

  galleryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  galleryItem: {
    backgroundColor: "#D9D9D9",
    width: 70,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
  },
});
