import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import STYLES from '../assets/Styles';

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const Nav = (url) => {
    return console.log('Clicked' + url);
  };

  const press = (path) => {
    setNav(!nav);
  };

  const [nav, setNav] = useState(true);

  return (
    <View
      style={
        !nav
          ? STYLES.nav
          : { ...STYLES.nav, minHeight: Dimensions.get('window').height, flexDirection: 'column' }
      }
    >
      <TouchableOpacity
        onPress={() => {
          console.log('Pressed the logo');
        }}
        style={{ padding: 10, height: Dimensions.get('window').height / 5 }}
      >
        <Image
          style={{ width: 248, height: 80, marginLeft: '0%', marginTop: '0%' }}
          source={require('../assets/logo.png')}
        />
      </TouchableOpacity>
      <View
        style={
          !nav
            ? { display: 'none' }
            : {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '1%',
                alignItems: 'center',
              }
        }
      >
        <TouchableOpacity
          onPress={() => {
            setNav(!nav);
            console.log('Pressed the Pricing');
          }}
          style={STYLES.link}
          title='Pricing'
        >
          <Text style={{ color: '#dedede', fontWeight: 'bold', fontSize: 24 }}>Pricing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNav(!nav);
            console.log('Pressed the Location');
          }}
          style={STYLES.link}
          title='Location'
        >
          <Text style={{ color: '#dedede', fontWeight: 'bold', fontSize: 24 }}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNav(!nav);
            console.log('Pressed the Size Guide');
          }}
          style={STYLES.link}
          title='Size Guide'
        >
          <Text style={{ color: '#dedede', fontWeight: 'bold', fontSize: 24 }}>Size Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNav(!nav);
            console.log('Pressed the FAQ');
          }}
          style={STYLES.link}
          title='FAQ'
        >
          <Text style={{ color: '#dedede', fontWeight: 'bold', fontSize: 24 }}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNav(!nav);
            console.log('Pressed the Contact');
          }}
          style={STYLES.link}
          title='Contact'
        >
          <Text style={{ color: '#dedede', fontWeight: 'bold', fontSize: 24 }}>Contact</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={STYLES.link} to="/admin">
            <Text style={STYLES.link}>Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={STYLES.link} to="/admin/dashboard">
            <Text style={STYLES.link}>AdminDashboard</Text>
          </TouchableOpacity> */}
      </View>
      <TouchableOpacity
        style={
          nav
            ? { display: 'none' }
            : {
                margin: 10,
                padding: 10,
                backgroundColor: '#950000',
                borderColor: 'rgba(10, 10, 100, 1)',
                borderWidth: 5,
                borderRadius: 20,
              }
        }
        onPress={press}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#dedede' }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
