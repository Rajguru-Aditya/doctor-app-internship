import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userImage: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  headerRightContainer: {
    flexDirection: "row",
  },
  plusContainer: {
    height: 25,
    width: 100,
    backgroundColor: "#FFBCD1",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    height: 20,
    width: 40,
    backgroundColor: "#D96098",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  plusText: {
    color: "#FFFFFF",
  },
  offersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  offerIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  offerText: {
    color: "#66DE93",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default styles;
