import { StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Text style={styles.link}>Home</Text>
        </Link>
        <Link to="/pricing">
          <Text style={styles.link}>Pricing</Text>
        </Link>
        <Link to="/location">
          <Text style={styles.link}>Location</Text>
        </Link>
        <Link to="/size">
          <Text style={styles.link}>SizeGuide</Text>
        </Link>
        <Link to="/faq">
          <Text style={styles.link}>FAQ</Text>
        </Link>
        {/* <Link to="/contact">
          <Text style={styles.link}>Contact</Text>
        </Link> */}
        <Link to="/admin">
          <Text style={styles.link}>Admin</Text>
        </Link>
        <Link to="/admin/dashboard">
          <Text style={styles.link}>AdminDashboard</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/location" component={Location} />
      <Route path="/size" component={SizeGuide} />
      <Route path="/faq" component={FAQ} />
      {/* <Route path="/contact" component={Contact} /> */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#252525",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  }
});

export default App;
