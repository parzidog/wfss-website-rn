import React, { useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (isMobile) {
      let mobileText = document.getElementsByClassName('box');
      let adminButton = document.getElementsByClassName('admin-button');
      for (let i = 0; i < mobileText.length; i++) {
        mobileText[i].style.fontSize = 'small';
        mobileText[i].style.width = 'fit-content';
      }
      for (let i = 0; i < adminButton.length; i++) {
        adminButton[i].style.fontSize = 'small';
        adminButton[i].style.width = 'fit-content';
        adminButton[i].style.padding = '0%';
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <footer>
      <View id='footer'>
        <View id='contact'>
          <View className='box' id='phone'>
            <Text>Phone</Text>
            <Text>(940) 386-1146</Text>
          </View>
          <View className='box' id='email'>
            <Text>Email</Text>
            <a href='mailto:selfstoragewichitafalls@gmail.com?subject=Message from Website&body=I would like more information regarding units at your facility'>
              selfstoragewichitafalls@gmail.com
            </a>
          </View>
          <View className='box' id='address'>
            <Text>Address</Text>
            <Text>5432 Southwest Pkwy</Text>
            <Text>Wichita Falls, TX 76308</Text>
          </View>
        </View>
        <View id='creator'>Created and Designed by Parzidog</View>
        <View id='admin-button'>
          <a href='/admin'>Admin</a>
        </View>
      </View>
    </footer>
  );
};

export default Footer;
