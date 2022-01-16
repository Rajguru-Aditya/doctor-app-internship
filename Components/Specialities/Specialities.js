import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import SpecialitiesData from "../../data/SpecialitiesData";
import styles from "./styles";

const numColumns = 4;

const Specialities = () => {
  return (
    <View style={styles.specialitiesContainer}>
      <Text style={styles.title}>Specialities most relevant to you</Text>
      <FlatList
        data={SpecialitiesData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.specialitiesData}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.specialitiesText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
      />
      <TouchableOpacity activeOpacity={0.9} style={styles.specialitiesBtn}>
        <Text style={styles.specialitiesBtnText}>View All Specialities</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Specialities;
