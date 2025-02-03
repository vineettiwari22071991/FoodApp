import { useRestaurantStore } from "@/store"
import { Image, Text, TouchableOpacity, View } from "react-native"
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps"
import '../global.css'
import { themeColors } from "@/theme"
import { icons, images } from "@/constants"
import * as icon from 'react-native-feather'
import { router } from "expo-router"

const OrderDeliverScreen = () => {
  const restaurant = useRestaurantStore((state) => state.selectedRestaurant)

  if (!restaurant) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading map...</Text>
      </View>
    )
  }
  return (
    <View className="flex-1">
      <MapView
        provider={PROVIDER_DEFAULT}
        initialRegion={
          {
            latitude: restaurant!.lat || 0,
            longitude: restaurant!.long || 0,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007
          }
        }
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Marker
          coordinate={{
            latitude: restaurant!.lat,
            longitude: restaurant!.long
          }}
          title={restaurant!.name}
          description={restaurant!.address}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl bg-white absolute bottom-1 w-full">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-JakartaSemiBold">
              Estimate Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-JakartaExtraBold">
              20-30 min
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">Your order is own its way!
            </Text>

          </View>
          <Image
            source={images.delivery_guy}
            className="w-24 h-24"
          />
        </View>

        <View
          style={{
            backgroundColor: themeColors.bgColor(0.8)

          }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="rounded-full"
            style={{
              backgroundColor: 'rgba(255,255,255,0.4)'
            }}

          >
            <Image
              className="h-16 w-16"
              source={icons.delivery_boy}

            />

          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-JakartaBold text-white">Delivery Boy
            </Text>
            <Text className="text-md font-JakartaSemiBold text-white">Your Rider
            </Text>

          </View>
          <View className="flex-row item-center space-x-3">
            <TouchableOpacity className="bg-white rounded-full p-2 mx-2">
              <icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white rounded-full p-2 mr-2"
            onPress={() => router.replace("/")}
            >
              <icon.X stroke="red" strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default OrderDeliverScreen