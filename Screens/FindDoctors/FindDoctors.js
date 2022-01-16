import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FindDocHeader from "../../Components/FindDocHeader/FindDocHeader";
import OffersView from "../../Components/OffersView/OffersView";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Specialities from "../../Components/Specialities/Specialities";
import styles from "./styles";

const FindDoctors = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <FindDocHeader />
      </View>
      <View style={styles.lowerContainer}>
        <ScrollView style={styles.scrollContainer}>
          <OffersView />
          <SearchBar />
          <Specialities />
        </ScrollView>
      </View>
    </View>
  );
};

export default FindDoctors;
