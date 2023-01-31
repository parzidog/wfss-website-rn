import React from "react"
import Map from "./Map"
import { View, Text } from "react-native"
import STYLES from "../assets/Styles"

const Location = () => {
  return (
    <>
      <View style={STYLES.header}>
        <Text style={STYLES.headerText}>
          Location
        </Text>
      </View>
      <View id='location'>
        <View id='map'>
          <Text>We are located at 5432 Southwest Parkway across the street from Memorial Stadium!</Text>
          <Map />
        </View>
        <View id='directions'>
          <View className='directions'>
            <Text>Directions from MSU</Text>
            <ol>
              <li>
                Head north toward Council Dr
              </li>
              <li>
                Turn left toward Council Dr
              </li>
              <li>
                Turn right at the 1st cross street onto Council Dr
              </li>
              <li>
                Turn left onto Hampstead Ln
              </li>
              <li>
                Slight left to stay on Hampstead Ln
              </li>
              <li>
                Turn left onto Kemp Blvd
              </li>
              <li>
                Turn right onto Southwest Pkwy
              </li>
              <li>
                Destination will be on the right
              </li>
            </ol>
          </View>
          <View className="directions">
            <Text>Directions from Sheppard AFB</Text>
            <ol>
              <li>Head southwest on Sheppard Access Rd toward Enterprise St</li>
              <li>Keep left to continue on TX-325 Spur S</li>
              <li>Take the I-44 W/US-277 S/US-281 S exit toward US-287 S/Wichita Fls/Ft Worth</li>
              <li>Merge onto I-44/US-277 S/US-281 S</li>
              <li>Continue onto US-277 S/US-281 S/US-287 S</li>
              <li>Take the US-82 W/US-277 S exit toward Lubbock/Abilene</li>
              <li>Continue onto US-277 S/US-82 W</li>
              <li>Take the exit toward FM-1634/Barnett Rd</li>
              <li>Merge onto Kell W Blvd</li>
              <li>Turn left onto Barnett Rd</li>
              <li>Turn right onto Southwest Pkwy</li>
              <li>
                Destination will be on the right
              </li>
            </ol>
          </View>
        </View>
      </View>
    </>
  )
}

export default Location