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

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/logo1.png")}
          style={styles.logoStyle}
        />
        <View style={styles.promptContainer}>
          <Text style={styles.promtStyles}>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputStyle}></TextInput>
          </View>
          <Text style={[styles.promtStyles, { paddingTop: "10%" }]}>
            Password
          </Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputStyle}></TextInput>
          </View>
          <Text
            style={styles.forgot}
            onPress={() => alert("Password Reset Email Sent.")}
          >
            Forgot Password?
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.text}>Login</Text>
          </Pressable>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: "7%",
              alignItems: "baseline",
              justifyContent: "space-around",
            }}
          >
            <Image
              source={require("../assets/Arrow2.png")}
              style={{ width: 60 }}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Or login with</Text>
            <Image
              source={require("../assets/Arrow2.png")}
              style={{ width: 60 }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingTop: "1%",
              justifyContent: "space-around",
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{ width: 30, height: 40 }}
            />
            <Image
              source={require("../assets/facebook.png")}
              style={{ width: 30, height: 40 }}
            />
          </View>
          <Text
            style={{ color: "white", fontSize: 18 }}
            onPress={() => navigation.navigate("Signup")}
          >
            Don't have an account? Signup
          </Text>
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

  logoStyle: {
    width: 215,
    height: 136,
    // marginTop:'20%',
    marginLeft: "9%",
  },

  subtitle: {
    color: "white",
    paddingTop: "5%",
    fontSize: 18,
  },

  promptContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "10%",
  },

  promtStyles: {
    color: "#FF6161",
    fontSize: 20,
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
    marginLeft: "40%",
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
    marginTop: "9%",
    width: 250,
    height: 50,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
