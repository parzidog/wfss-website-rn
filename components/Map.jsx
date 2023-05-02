import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const Map = () => {
  let platform = Platform.OS;
  if (platform === 'web') {
    return (
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2151531218137!2d-98.58324028464641!3d33.85834563537033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86532206680685d3%3A0x5f1b62621a1c4a9d!2s5432%20Southwest%20Pkwy%2C%20Wichita%20Falls%2C%20TX%2076310!5e0!3m2!1sen!2sus!4v1668704873634!5m2!1sen!2sus'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    );
  } else {
    return (
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{
          height: 300,
          width: '100%',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          html: `<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2151531218137!2d-98.58324028464641!3d33.85834563537033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86532206680685d3%3A0x5f1b62621a1c4a9d!2s5432%20Southwest%20Pkwy%2C%20Wichita%20Falls%2C%20TX%2076310!5e0!3m2!1sen!2sus!4v1668704873634!5m2!1sen!2sus" height="1000px" width="1000px" allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`,
        }}
      />
    );
  }
};

export default Map;
