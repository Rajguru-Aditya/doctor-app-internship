import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarInnerContainer}>
        <Image
          style={styles.searchIcon}
          source={{
            uri: "https://img.icons8.com/ios-glyphs/30/cccccc/search--v1.png",
          }}
        />
        <TextInput
          style={styles.searchBar}
          editable
          placeholder="Search Symptoms/ Specialities"
        />
      </View>
    </View>
  );
};

export default SearchBar;
