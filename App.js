import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Router, Route, Link } from "./react-router";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import SizeGuide from "./components/SizeGuide";
import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
import Admin from "./components/Admin";
import AdminDashboard from "./components/AdminDashboard";

const width = Dimensions.get("window").width;

let navPadding;

if (width > 800) {
  navPadding = "0%";
} else {
  navPadding = "7.5%";
}
const App = () => (
  <Router>
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <Link style={styles.link} to="/">
          <Image style={{ width: 124, height: 40, marginLeft: "0%", marginTop: "0%" }} source={require("./assets/logo.png")} />
        </Link>
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "1%",
          alignItems: "center",
        }}>
          <Link style={styles.link} to="/pricing">
            <Text style={styles.text}>Pricing</Text>
          </Link>
          <Link style={styles.link} to="/location">
            <Text style={styles.text}>Location</Text>
          </Link>
          <Link style={styles.link} to="/size">
            <Text style={styles.text}>Size Guide</Text>
          </Link>
          <Link style={styles.link} to="/faq">
            <Text style={styles.text}>FAQ</Text>
          </Link>
          {/* <Link style={styles.link} to="/contact">
          <Text style={styles.link}>Contact</Text>
        </Link> */}
          {/* <Link style={styles.link} to="/admin">
            <Text style={styles.link}>Admin</Text>
          </Link>
          <Link style={styles.link} to="/admin/dashboard">
            <Text style={styles.link}>AdminDashboard</Text>
          </Link> */}
        </View>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/location" component={Location} />
      <Route path="/size" component={SizeGuide} />
      <Route path="/faq" component={FAQ} />
      {/* <Route path="/contact" component={Contact} /> */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
    </ScrollView>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: "0%",
    backgroundColor: "#ddd",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: navPadding,
    width: "100%",
    // height: 125,
    backgroundColor: "#a5a5a5",
    borderBottomColor: "#101075",
    borderBottomWidth: 5,
    boxShadow: "0 0 10pt 0 rgba(0, 0, 0, 0.5)",
  },
  link: {
    display: "flex",
    flexWrap: "no-wrap",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
    margin: "1%",
    minWidth: 100,
    borderRadius: 10,
    textDecorationLine: "none",
  },
  text: {
    display: "flex",
    flexWrap: "no-wrap",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    margin: "auto",
    minWidth: 85,
    backgroundColor: "#101075",
    borderRadius: 7.5,
  },
});

export default App;
