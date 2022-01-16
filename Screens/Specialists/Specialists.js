import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DoctorsList from "../../data/DoctorsList";
import styles from "./styles";

const Specialists = (props) => {
  const specialist = props.route.params.specialist;
  return (
    <SafeAreaView style={{ backgroundColor: "#516BEB" }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.backBtn}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/24/ffffff/back--v1.png",
            }}
            style={styles.backIcon}
          />
          <Text style={styles.backBtnText}>Back</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{specialist}</Text>
        </View>
      </View>
      {/* List */}
      <View style={styles.docListView}>
        <FlatList
          data={DoctorsList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.docData} activeOpacity={0.7}>
              <Image
                style={styles.docImage}
                source={{
                  uri: "https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-doctor-hospital-and-medical-justicon-flat-justicon.png",
                }}
              />
              <View>
                <Text style={styles.docName}>{item.name}</Text>
                <Text style={styles.docNum}>{item.phoneNum}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Specialists;
