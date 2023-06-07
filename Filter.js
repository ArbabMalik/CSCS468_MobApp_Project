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

export default function Filter({ navigation }) {
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
        Filter by Ads
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
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Price Range
          </Text>
          <View style={styles.rangeContainer}>
            <View style={[styles.inputContainer, styles.rangeInput]}>
              <TextInput
                placeholder="0"
                placeholderTextColor={"black"}
                style={styles.inputStyle}
              ></TextInput>
            </View>
            <Text style={{ color: "white", fontSize: 20 }}>To</Text>
            <View style={[styles.inputContainer, styles.rangeInput]}>
              <TextInput
                placeholder="Any"
                placeholderTextColor={"black"}
                style={styles.inputStyle}
              ></TextInput>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.promtStyles, { paddingTop: "5%" }]}>
            Kilometers Driven (KM)
          </Text>
          <View style={styles.rangeContainer}>
            <View style={[styles.inputContainer, styles.rangeInput]}>
              <TextInput
                placeholder="0"
                placeholderTextColor={"black"}
                style={styles.inputStyle}
              ></TextInput>
            </View>
            <Text style={{ color: "white", fontSize: 20 }}>To</Text>
            <View style={[styles.inputContainer, styles.rangeInput]}>
              <TextInput
                placeholder="Any"
                placeholderTextColor={"black"}
                style={styles.inputStyle}
              ></TextInput>
            </View>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate("Main")}>
            Filter Ads
          </Text>
        </Pressable>
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
    marginHorizontal: 20,
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
    justifyContent: "space-evenly",
    marginTop: "5%",
  },
});
