import React from "react"

const SizeGuide = () => {
  return (
    <View id='size-guide'>
      <View className="header">
        <Text>
          UNIT SIZES
        </Text>
      </View>

      <Text>
        WF Self Storage has more variety in storage unit sizes than anyone in the area.
        <br />
        Below are 6 of the common unit sizes available:
      </Text>

      <View className="unit-size">

        <Text>
          5 X 10 ( 50 sq. ft. ):
        </Text>
        <Text>
          SUGGESTED STORAGE: One or two small rooms of furniture. Motorcycle or bicylces. 10-20 boxes and other small items.
        </Text>
        <h5>
          Similar in size to a large walk-in closet.
        </h5>
      </View>
      <View className="unit-size">
        <Text>
          10 X 10 ( 100 sq. ft. ):
        </Text>
        <Text>
          SUGGESTED STORAGE: Contents of one bedroom apartment or condo. Two or three appliances such as a refrigerator or washer and dryer. 25-50 boxes and other small items.
        </Text>
        <h5>
          Similar in size to a small bedroom.
        </h5>
      </View>
      <View className="unit-size">
        <Text>
          10 X 15 ( 150 sq. ft. ):
        </Text>
        <Text>
          SUGGESTED STORAGE: Contents of two bedroom apartment, condo or small house. Two to four appliances such as refrigerator, stove, washer and dryer. 50-75 boxes and other items.
        </Text>
        <h5>
          Similar in size to a large bedroom.
        </h5>
      </View>
      <View className="unit-size">
        <Text>
          10 X 20 ( 200 sq. ft. ):
        </Text>
        <Text>
          SUGGESTED STORAGE: Contents of a two to three bedroom house, apartment or condo. Three or more appliances. 50-100 boxes and other items. Ideal for vehicle storage.
        </Text>
        <h5>
          Similar in size to a one car garage.
        </h5>
      </View>
      <View className="unit-size">
        <Text>
          12.5 X 30 ( 375 sq. ft. ):
        </Text>
        <Text>
          SUGGESTED STORAGE:Contents of three or more bedroom house. Ideal for commercial use. Units equipped with two garage doors allowing for easy access on both sides of the storage unit.
        </Text>
        <h5>
          Similar in size to a 1 and 1/2 to 2 car garage.
        </h5>
      </View>
      <View className="unit-size">
        <Text>
          13.5 x 50 ( 675 sq. ft. ):
        </Text>
        <Text>
          SUGGESTED STORAGE: Most often used for commercial applications or for storing large items such as boats, RVs, campers, etc.
        </Text>
        <h5>
          Similar in size to a 3 car garage.
        </h5>
      </View>
    </View>
  )
}

export default SizeGuide