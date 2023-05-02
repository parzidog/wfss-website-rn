// import React, { useState, useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { fetchUnits } from "../features/unitSlice";
import units from '../assets/unitData.js';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import STYLES from '../assets/Styles';

const Pricing = () => {
  // const dispatch = useDispatch();
  // const [units, setUnits] = useState([]);
  // const [climate, setClimate] = useState([]);
  // const [nonClimate, setNonClimate] = useState([]);
  let climate = [];
  let nonClimate = [];

  units.map((unit) => {
    if (unit.climate) {
      climate.push(unit);
    } else {
      nonClimate.push(unit);
    }
  });

  // useEffect(() => {
  //   dispatch(fetchUnits()).then((res) => {
  //     setUnits(res.payload);
  //   });
  // }, []);

  // useEffect(() => {
  //   units.map(unit => {
  //     if (unit.climate) {
  //       temClimate.push(unit)
  //     }
  //     else {
  //       temp.push(unit)
  //     }
  //   })
  //   setClimate(temClimate);
  //   setNonClimate(temp);
  //   temp = [];
  //   temClimate = [];
  // }, [units])

  return (
    <ScrollView>
      <View style={STYLES.header} className='header'>
        <Text style={STYLES.headerText}>Pricing</Text>
      </View>
      <View id='pricing' style={STYLES.pricing}>
        <View id='climate'>
          <Text style={STYLES.climateSpecifications}>Climate Controlled</Text>
          {climate.length > 0 ? (
            climate.map((unit) => {
              return (
                <View key={unit.id} style={STYLES.climate} className='pricing-card climate'>
                  <Text style={{ ...STYLES.facilityh3, textShadowColor: '#aa1010' }}>
                    {unit.length} x {unit.width} Climate Controlled
                  </Text>
                  <Text style={{ ...STYLES.facilityh1, textShadowColor: '#aa1010' }}>
                    ${unit.price}
                  </Text>
                </View>
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
        <View id='non-climate'>
          <Text style={STYLES.climateSpecifications}>Non-Climate Controlled</Text>
          {nonClimate.length > 0 ? (
            nonClimate.map((unit) => (
              <View key={unit.id} style={STYLES.nonclimate} className='pricing-card nonclimate'>
                <Text style={{ ...STYLES.facilityh3, textShadowColor: '#1010aa' }}>
                  {unit.length} x {unit.width} Non-Climate Controlled
                </Text>
                <Text style={{ ...STYLES.facilityh1, textShadowColor: '#1010aa' }}>
                  ${unit.price}
                </Text>
              </View>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Pricing;
