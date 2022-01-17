import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header/Header";
import Location from "../../Components/Location/Location";
import Offerings from "../../Components/Offerings/Offerings";
import TopImage from "../../Components/TopImage/TopImage";
import styles from "./styles";

const Home = (props) => {
  const onPressOfferings = () => {
    props.navigation.navigate("FindDoctors");
  };
  const onPressOpenDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Header onPress={onPressOpenDrawer} />
        <Location />
        <TopImage />
        <Offerings onPress={onPressOfferings} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
