import React, { useEffect } from "react"
import units from "../assets/units.jpg"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  return (
    <View id='home' style={styles.home}>
      <View id='facility' style={styles.facility}>
        <ImageBackground source={units} style={styles.facility} resizeMode="cover" >
          <View className="mobile-text" style={styles.mobileText}>
            <Text className='facility-Text' style={styles.facilityh1}>The friendliest storage facility in Wichita Falls, TX</Text>
            <Text id='description' style={styles.facilityh3}>WF Self Storage offers a comprehensive storage solution suitable for all of your personal and commercial storage needs. Our facility offers an open layout that is perfect to accomodate trucks and trailers of all sizes. With our friendly, down to earth staff, we can guide you through the moving process from start to finish. Contact us today and ask about our specials.</Text>
          </View>
        </ImageBackground>
      </View>
      <View id="banner" style={styles.banner}>
        <Text style={{ color: "#dadada", fontSize: 36, fontWeight: "bold", textAlign: "center" }}>No Deposit, No Admin Fees</Text>
      </View>
      <View id='unit-overview' style={styles.unitOverview}>
        <View className="unit-price" style={styles.unitPrice}>
          <Text className="price" style={styles.facilityh3}>$39 & up</Text>
          <Text className="size" style={styles.facilityh3}>SMALL UNITS</Text>
        </View>
        <View className="unit-price" style={styles.unitPrice}>
          <Text className="price" style={styles.facilityh3}>$84 & up</Text>
          <Text className="size" style={styles.facilityh3}>MEDIUM UNITS</Text>
        </View>
        <View className="unit-price" style={styles.unitPrice}>
          <Text className="price" style={styles.facilityh3}>$124 & up</Text>
          <Text className="size" style={styles.facilityh3}>LARGE UNITS</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ddd',
  },
  facility: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    display: 'flex',
    color: '#dedede',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingtop: 5,
  },
  facilityh1: {
    display: 'flex',
    padding: '2%',
    paddingTop: '0.5%',
    color: '#dedede',
    textShadowColor: "#fa0000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '600',
    margin: 'auto',
  },
  mobileText: {
    backgroundColor: 'rgba(10, 10, 100, 0.5)',
    width: '85%',
    margin: 'auto',
    borderRadius: 10,
  },
  facilityh3: {
    display: 'flex',
    padding: '2%',
    paddingTop: '0',
    color: '#dedede',
    textShadow: '1pt 1pt 1pt rgba(10, 10, 100, 1)',
    width: '100%',
    margin: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    margin: 'auto',
  },
  banner: {
    width: '80%',
    height: '10vh',
    display: 'flex',
    color: '#dedede',
    textShadow: '2pt 2pt 4pt rgba(10, 10, 100, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#950000',
    borderColor: '#101075',
    borderWidth: '5pt',
    borderStyle: 'solid',
    borderRadius: '10pt',
    margin: "2%",
    fontSize: 36,
  },
  unitOverview: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100vw',
  },
  unitPrice: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#101075",
    color: '#dedede',
    borderColor: '#950000',
    borderWidth: '5pt',
    borderStyle: 'solid',
    borderRadius: '10pt',
    margin: "2%",
    width: "50%",
    maxWidth: 300,
    height: '15vh',
    padding: '2%',
  },
})

export default Home