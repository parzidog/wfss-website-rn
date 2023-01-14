import React, { useEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    if (isMobile) {
      let navButtons = document.getElementsByClassName("nav-buttons");
      for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].style = { padding: 0, fontSize: "small" };
      }
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <nav id='navbar' style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <View id='nav-buttons'>
        <Link to={"pricing"}>
          <Text >Pricing</Text>
        </Link>
        <Link to={"location"}>
          <Text >Location</Text>
        </Link>
        <Link to={"size"}>
          <Text >Size Guide</Text>
        </Link>
        <Link to={"faq"}>
          <Text >
            FAQ
          </Text>
        </Link>
        <Link to={"contact"}>
          <Text >
            Contact Us
          </Text>
        </Link>
      </View>
    </nav>
  )
}

export default Navbar