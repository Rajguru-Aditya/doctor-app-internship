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
  docListView: {
    backgroundColor: "#fff",
  },
  docData: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#F3F1F5",
    marginTop: 20,
    alignItems: "center",
    paddingLeft: 10,
    borderRadius: 20,
  },
  docImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
    borderWidth: 1.5,
    borderColor: "#fff",
    backgroundColor: "#FFE3E3",
  },
  docName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
