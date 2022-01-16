import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#516BEB",
  },
  titleView: {
    width: "70%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    height: 30,
    width: 30,
  },
  backBtnText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default styles;
