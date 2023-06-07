import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Searchbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "#D9D9D9",
    width: 200,
  },
});

export default Searchbar;
