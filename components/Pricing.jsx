// import React, { useState, useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { fetchUnits } from "../features/unitSlice";
import units from "../assets/unitData.js";
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Pricing = () => {
  // const dispatch = useDispatch();
  // const [units, setUnits] = useState([]);
  // const [climate, setClimate] = useState([]);
  // const [nonClimate, setNonClimate] = useState([]);
  let climate = [];
  let nonClimate = [];

  units.map(unit => {
    if (unit.climate) {
      climate.push(unit)
    }
    else {
      nonClimate.push(unit)
    }
  })

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
      <View style={pricing.header} className="header" >
        <Text style={{ color: "white", fontSize: 36, fontWeight: 'bold', padding: '3%' }}>
          Pricing
        </Text>
      </View>
      <View id="pricing" style={pricing.pricing}>
        <View id="climate">
          <Text>Climate Controlled</Text>
          {climate.length > 0 ? climate.map(unit => {
            return (
              <View key={unit.id} style={pricing.climate} className="pricing-card climate" >
                <Text>{unit.length} x {unit.width} Climate Controlled</Text>
                <Text>${unit.price}</Text>
              </View>
            )
          }) : <Text>Loading...</Text>}
        </View>
        <View id="non-climate">
          <Text>Non-Climate Controlled</Text>
          {nonClimate.length > 0 ? nonClimate.map(unit =>
            <View key={unit.id} style={pricing.nonclimate} className="pricing-card nonclimate" >
              <Text>{unit.length} x {unit.width} Non-Climate Controlled</Text>
              <Text>${unit.price}</Text>
            </View>
          ) : <Text>Loading...</Text>}
        </View>
      </View >
    </ScrollView>
  )
}

const pricing = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pricing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  climate: {
    backgroundColor: 'blue',
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 3,
    alignItems: 'center'
  },
  nonclimate: {
    backgroundColor: 'red',
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderRadius: 10,
    borderWidth: 3
  },
})

export default Pricing