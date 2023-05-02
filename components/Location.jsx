import React from 'react';
import Map from './Map';
import { View, Text } from 'react-native';
import STYLES from '../assets/Styles';
import { FlatList } from 'react-native';

const Location = () => {
  const directionsFromMSU = [
    {
      key: 1,
      direction: 'Head southwest on Sheppard Access Rd toward Enterprise St',
    },
    {
      key: 2,
      direction: 'Keep left to continue on TX-325 Spur S',
    },
    {
      key: 3,
      direction: 'Take the I-44 W/US-277 S/US-281 S exit toward US-287 S/Wichita Fls/Ft Worth',
    },
    {
      key: 4,
      direction: 'Merge onto I-44/US-277 S/US-281 S',
    },
    {
      key: 5,
      direction: 'Continue onto US-277 S/US-281 S/US-287 S',
    },
    {
      key: 6,
      direction: 'Take the US-82 W/US-277 S exit toward Lubbock/Abilene',
    },
    {
      key: 7,
      direction: 'Continue onto US-277 S/US-82 W',
    },
    {
      key: 8,
      direction: 'Take the exit toward FM-1634/Barnett Rd',
    },
    {
      key: 9,
      direction: 'Merge onto Kell W Blvd',
    },
    {
      key: 10,
      direction: 'Turn left onto Barnett Rd',
    },
    {
      key: 11,
      direction: 'Turn right onto Southwest Pkwy',
    },
    {
      key: 12,
      direction: 'Destination will be on the right',
    },
  ];
  const directionsFromSheppardAFB = [
    {
      key: 1,
      direction: 'Head southwest on Sheppard Access Rd toward Enterprise St',
    },
    {
      key: 2,
      direction: 'Keep left to continue on TX-325 Spur S',
    },
    {
      key: 3,
      direction: 'Take the I-44 W/US-277 S/US-281 S exit toward US-287 S/Wichita Fls/Ft Worth',
    },
    {
      key: 4,
      direction: 'Merge onto I-44/US-277 S/US-281 S',
    },
    {
      key: 5,
      direction: 'Continue onto US-277 S/US-281 S/US-287 S',
    },
    {
      key: 6,
      direction: 'Take the US-82 W/US-277 S exit toward Lubbock/Abilene',
    },
    {
      key: 7,
      direction: 'Continue onto US-277 S/US-82 W',
    },
    {
      key: 8,
      direction: 'Take the exit toward FM-1634/Barnett Rd',
    },
    {
      key: 9,
      direction: 'Merge onto Kell W Blvd',
    },
    {
      key: 10,
      direction: 'Turn left onto Barnett Rd',
    },
    {
      key: 11,
      direction: 'Turn right onto Southwest Pkwy',
    },
    {
      key: 12,
      direction: 'Destination will be on the right',
    },
  ];
  return (
    <>
      <View style={STYLES.header}>
        <Text style={STYLES.headerText}>Location</Text>
      </View>
      <View id='location'>
        <View id='map'>
          <Text>
            We are located at 5432 Southwest Parkway across the street from Memorial Stadium!
          </Text>
          <Map />
        </View>
        <View styles={STYLES.directionsContainer}>
          <View style={STYLES.flatList}>
            <Text style={STYLES.directionHeader}>Directions from MSU</Text>
            <FlatList
              data={directionsFromMSU}
              renderItem={({ item }) => (
                <Text style={STYLES.directionText}>
                  {' '}
                  {item.key}. {item.direction}
                </Text>
              )}
            />
          </View>
          <View style={STYLES.flatList}>
            <Text style={STYLES.directionHeader}>Directions from Sheppard AFB</Text>
            <FlatList
              data={directionsFromSheppardAFB}
              renderItem={({ item }) => (
                <Text style={STYLES.directionText}>
                  {' '}
                  {item.key}. {item.direction}
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Location;
