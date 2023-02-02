import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Router, Route } from "./react-router";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import SizeGuide from "./components/SizeGuide";
import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
import Admin from "./components/Admin";
import AdminDashboard from "./components/AdminDashboard";
import Navbar from "./components/Navbar";
import STYLES from "./assets/Styles";

const App = () => (
  <Router>
    <ScrollView style={STYLES.container}>
      <Navbar />

      < Route exact path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/location" component={Location} />
      <Route path="/size" component={SizeGuide} />
      <Route path="/faq" component={FAQ} />
      {/* <Route path="/contact" component={Contact} /> */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
    </ScrollView >
  </Router >
);

export default App;
