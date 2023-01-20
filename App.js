import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Router, Route, Link } from "./react-router";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import SizeGuide from "./components/SizeGuide";
import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
import Admin from "./components/Admin";
import AdminDashboard from "./components/AdminDashboard";

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
          justifyContent: "right",
          margin: "1%",
          alignItems: "center",
          width: "60%",
          height: 100,
        }}>
          <Link style={styles.link} to="/pricing">
            <Text style={styles.link}>Pricing</Text>
          </Link>
          <Link style={styles.link} to="/location">
            <Text style={styles.link}>Location</Text>
          </Link>
          <Link style={styles.link} to="/size">
            <Text style={styles.link}>Size Guide</Text>
          </Link>
          <Link style={styles.link} to="/faq">
            <Text style={styles.link}>FAQ</Text>
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 125,
    backgroundColor: "#a5a5a5",
    borderBottomColor: "#101075",
    borderBottomWidth: 5,
    boxShadow: "0 0 10pt 0 rgba(0, 0, 0, 0.5)",
  },
  link: {
    display: "flex",
    flexWrap: "no-wrap",
    color: "#fff",
    textDecorationLine: "none",
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: "4.5%",
    padding: "1%",
    width: "65px",
  }
});

export default App;
