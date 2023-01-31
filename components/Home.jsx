import React, { useEffect } from "react"
import units from "../assets/units.jpg"
import { View, Text, ImageBackground } from "react-native"
import STYLES from "../assets/Styles"

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  return (
    <View id='home' style={STYLES.home}>
      <View id='facility' style={STYLES.facility}>
        <ImageBackground source={units} style={STYLES.facility} resizeMode="cover" >
          <View className="mobile-text" style={STYLES.mobileText}>
            <Text className='facility-Text' style={STYLES.facilityh1}>The friendliest storage facility in Wichita Falls, TX</Text>
            <Text id='description' style={STYLES.facilityh3}>WF Self Storage offers a comprehensive storage solution suitable for all of your personal and commercial storage needs. Our facility offers an open layout that is perfect to accomodate trucks and trailers of all sizes. With our friendly, down to earth staff, we can guide you through the moving process from start to finish. Contact us today and ask about our specials.</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={STYLES.banner}>
        <Text style={{ color: "#dadada", fontSize: 36, fontWeight: "bold", textAlign: "center", padding: 30 }}>No Deposit, No Admin Fees</Text>
      </View>
      <View style={STYLES.unitOverview}>
        <View style={STYLES.unitPrice}>
          <Text style={STYLES.facilityh3}>$39 & up</Text>
          <Text style={STYLES.facilityh3}>SMALL UNITS</Text>
        </View>
        <View style={STYLES.unitPrice}>
          <Text style={STYLES.facilityh3}>$84 & up</Text>
          <Text style={STYLES.facilityh3}>MEDIUM UNITS</Text>
        </View>
        <View style={STYLES.unitPrice}>
          <Text style={STYLES.facilityh3}>$124 & up</Text>
          <Text style={STYLES.facilityh3}>LARGE UNITS</Text>
        </View>
      </View>
    </View>
  )
}

export default Home