import React from 'react';

const FAQ = () => {
  return (
    <View id='faq'>
      <View className='header'>
        <Text>FAQ</Text>
      </View>
      <View id='question-container'>
        <View className='container'>
          <View className='question'>Where is WF Self Storage?</View>
          <View className='answer'>
            You will find our facility at 5432 Southwest Parkway across the street from Memorial
            Stadium.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Which other businesses are nearby?</View>
          <View className='answer'>
            Memorial Stadium, United Regional Physicians Group and Alon gas station are all close to
            our facility.
          </View>
        </View>
        <View className='container'>
          <View className='question'>
            Do you serve any other communities besides Wichtia Falls?
          </View>
          <View className='answer'>
            We sure do! Wichita Falls Self Storage is also the most popular choice with customers
            from Sheppard AFB, Holliday, Iowa Park and many more.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Can I take a look around your facility?</View>
          <View className='answer'>
            Not a problem! We would love to show you our facility. Please stop by our office or get
            in touch for more information.
          </View>
        </View>
        <View className='container'>
          <View className='question'>When are your access times?</View>
          <View className='answer'>
            We are accessible from 6:00 am - 10:00 am. 24 hour access is available upon request as
            well.
          </View>
        </View>
        <View className='container'>
          <View className='question'>When are your office hours?</View>
          <View className='answer'>
            Our office is open from 9:00 am to 5:30 pm from Monday to Friday and 9:00 am to 2:00 pm
            on Saturdays. We are closed on Sundays.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Do you offer truck rentals?</View>
          <View className='answer'>
            Wichita Falls Self Storage provides affordable truck rentals via U-Haul. Please speak to
            a member of our team for more details.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Do you have any security features?</View>
          <View className='answer'>
            We sure do! Our gated and fenced facility is equipped with surveillance cameras which
            constantly record all activity.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Do you provide drive-up access?</View>
          <View className='answer'>Absolutely. It is the quickest and easiest way to move in!</View>
        </View>
        <View className='container'>
          <View className='question'>Can I store my vehicle at your facility?</View>
          <View className='answer'>
            You can. Our larger storage units can accommodate vehicle of almost any size.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Which unit is right for me?</View>
          <View className='answer'>
            Take a look at our size guide to find the perfect unit for your needs. If you are still
            unsure, our staff are always happy to help.
          </View>
        </View>
        <View className='container'>
          <View className='question'>Do I need a reservation?</View>
          <View className='answer'>
            No, you do not need a reservation. However, it is recommended to reserve your space to
            ensure that the storage unit size you need is available when you need it. Just contact
            us to get started - we are eager to help!
          </View>
        </View>
      </View>
    </View>
  );
};

export default FAQ;
