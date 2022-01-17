import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import styles from "./styles";

const CustomDrawer = (props) => {
  return (
    <View style={styles.customDrawer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.customDrawerHeader}>
          <View style={styles.customDrawerProfile}>
            <Image
              style={styles.headerImage}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
              }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.username}>User</Text>
              <Text style={styles.editProfile}>View and Edit Profile</Text>
              <Text style={styles.profileComplete}>9% profile completed</Text>
            </View>
          </View>
          <View style={styles.practoPlus}>
            <View style={styles.plus}>
              <Text style={styles.practo}>Practo</Text>
              <View style={styles.plusContainer}>
                <Text>PLUS</Text>
              </View>
            </View>
            <Text style={styles.subtitle}>Health plan for your family</Text>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
