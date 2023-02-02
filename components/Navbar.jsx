import React, { useEffect, useNavigate } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import STYLES from "../assets/Styles"

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  const Nav = (url) => {
    return console.log("Clicked" + url)
  }

  return (
    <Nav id='Navbar' style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <TouchableOpacity onPress={Nav("home")}>
        <Image source={logo} alt="logo" />
      </TouchableOpacity>
      <View style={{ height: 75, width: "100%" }}>
        <TouchableOpacity onPress={Nav("pricing")} style={STYLES.NavButton} >
          <Text>
            Pricing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Nav("location")} style={STYLES.NavButton} >
          <Text>
            Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Nav("size")} style={STYLES.NavButton} >
          <Text>
            Size Guide
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Nav("faq")} style={STYLES.NavButton} >
          <Text>
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Nav("contact")} style={STYLES.NavButton} >
          <Text>
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>
    </Nav>
  )
}

export default Navbar