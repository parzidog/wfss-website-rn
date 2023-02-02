import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import STYLES from "../assets/Styles"

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  const Nav = (url) => {
    return console.log("Clicked" + url)
  }

  const press = path => {
    setNav(!nav)
  }

  const [nav, setNav] = useState(false)

  return (
    <View style={STYLES.nav}>
      <TouchableOpacity onPress={() => { console.log('Pressed the logo') }} style={{ padding: 5, margin: "auto" }}>
        <Image style={{ width: 124, height: 40, marginLeft: "0%", marginTop: "0%" }} source={require("../assets/logo.png")} />
      </TouchableOpacity>
      <View style={nav ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1%",
        alignItems: "center",
      } : { display: "none" }}>
        <TouchableOpacity onPress={() => { console.log('Pressed the Pricing') }} style={STYLES.link} title="Pricing">
          <Text style={{ color: "#dedede", fontWeight: 900 }}>
            Pricing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('Pressed the Location') }} style={STYLES.link} title="Location">
          <Text style={{ color: "#dedede", fontWeight: 900 }}>
            Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('Pressed the Size Guide') }} style={STYLES.link} title="Size Guide">
          <Text style={{ color: "#dedede", fontWeight: 900 }}>
            Size Guide
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('Pressed the FAQ') }} style={STYLES.link} title="FAQ">
          <Text style={{ color: "#dedede", fontWeight: 900 }}>
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('Pressed the Contact') }} style={STYLES.link} title="Contact">
          <Text style={{ color: "#dedede", fontWeight: 900 }}>
            Contact
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={STYLES.link} to="/admin">
            <Text style={STYLES.link}>Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={STYLES.link} to="/admin/dashboard">
            <Text style={STYLES.link}>AdminDashboard</Text>
          </TouchableOpacity> */}
      </View>
      <TouchableOpacity style={{ position: "absolute", margin: 10, padding: 10 }} onPress={press}>
        <Text style={{ fontWeight: "bold", fontSize: 36, color: "black" }}>X</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Navbar