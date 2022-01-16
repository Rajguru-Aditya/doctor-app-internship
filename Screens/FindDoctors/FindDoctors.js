import React from "react";
import { View, Text, ScrollView } from "react-native";
import FindDocHeader from "../../Components/FindDocHeader/FindDocHeader";
import OffersView from "../../Components/OffersView/OffersView";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Specialities from "../../Components/Specialities/Specialities";
import styles from "./styles";

const FindDoctors = (props) => {
  const onPressSpecialities = (specialist) => {
    props.navigation.navigate("Specialists", { specialist: specialist });
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <FindDocHeader />
      </View>
      <View style={styles.lowerContainer}>
        <OffersView />
        <SearchBar />
        <Specialities onPress={onPressSpecialities} />
      </View>
    </View>
  );
};

export default FindDoctors;
