import React, { useEffect } from "react"
import units from "../assets/units.jpg"
import { StyleSheet } from "react-native"

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  return (
    <div id='home' style={styles.home}>
      <div id='facility' style={{
        backgroundImage: `url(${units})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div className="mobile-text" style={styles.mobileText}>
          <h1 className='facility-h1' style={styles.facilityh1}>The friendliest storage facility in Wichita Falls, TX</h1>
          <h3 id='description' style={styles.facilityh3}>WF Self Storage offers a comprehensive storage solution suitable for all of your personal and commercial storage needs. Our facility offers an open layout that is perfect to accomodate trucks and trailers of all sizes. With our friendly, down to earth staff, we can guide you through the moving process from start to finish. Contact us today and ask about our specials.</h3>
        </div>
      </div>
      <div id="banner" style={styles.banner}>
        <h1>No Deposit, No Admin Fees</h1>
      </div>
      <div id='unit-overview'>
        <div className="unit-price">
          <h2 className="price">$39 & up</h2>
          <h3 className="size">SMALL UNITS</h3>
        </div>
        <div className="unit-price">
          <h2 className="price">$84 & up</h2>
          <h3 className="size">MEDIUM UNITS</h3>
        </div>
        <div className="unit-price">
          <h2 className="price">$124 & up</h2>
          <h3 className="size">LARGE UNITS</h3>
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facility: {
    width: '100vw',
    height: '75vh',
    display: 'flex',
    color: '#ddd',
    textAlign: 'center',
    justifyContent: 'center',
  },
  facilityh1: {
    display: 'flex',
    padding: '2%',
    color: '#ddd',
    textShadow: '1px 1px 1px #fa0000',
    width: '90%',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mobileText: {
    backgroundColor: 'rgba(10, 10, 100, 0.5)',
  },
  facilityh3: {
    display: 'flex',
    padding: '2%',
    paddingTop: '0',
    color: '#ddd',
    textShadow: '1px 1px 1px rgba(10, 10, 100, 1)',
    width: '75%',
    margin: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  banner: {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    color: '#ddd',
    textShadow: '2px 2px 4px rgba(10, 10, 100, 1)',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#950000',
  },
})

export default Home