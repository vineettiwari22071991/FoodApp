import CartButton from "@/components/Cart"
import Dishes from "@/components/Dishes"
import { icons } from "@/constants"
import { useRestaurantStore } from "@/store"
import { themeColors } from "@/theme"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native"
import * as Icon from 'react-native-feather'
const RestraurantDetailsScreen = () => {
    const restaurant = useRestaurantStore((state) => state.selectedRestaurant)

    return (
        <View
            className="flex-1"
        >
            <StatusBar style="light" />
            <View className="relative">
                <Image
                    source={restaurant?.image}
                    className="w-full h-72"
                />
                <TouchableOpacity className="rounded-full top-14 bg-gray-50 absolute mx-5"
                    style={{
                        backgroundColor:themeColors.bgColor(1)
                    }}
                    onPress={() => {
                        router.back()
                    }}
                >
                    <Icon.ArrowLeft strokeWidth={1} stroke="white" width={30} height={30} />
                </TouchableOpacity>
            </View>
            <View
                style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                className="bg-white -mt-10 min-h-screen"
            >
                <View style={{
                    borderTopLeftRadius: 40, borderTopRightRadius: 40
                }} className="bg-slate-100">
                    <Text className="text-3xl font-JakartaBold self-start ml-4 mt-4">{restaurant?.name}</Text>
                    <View className="flex-row justify-around items-center mx-4 mt-2 mb-2">
                        <View className="flex-row justify-center items-center">
                            <Image
                                source={icons.start}
                                className="w-4 h-4"
                            />
                            <Text className="ml-1 mb-1 text-md font-JakartaSemiBold">{restaurant?.start}</Text>
                        </View>
                        <Text className="ml-1 mb-1 text-md font-JakartaMedium">{restaurant?.category}</Text>

                        <View className="flex-row justify-center items-center">
                            <Image
                                source={icons.location}
                                className="w-4 h-4"
                            />
                            <Text className="ml-1 mb-1 text-md font-JakartaLight">{restaurant && restaurant?.address.toString().length > 20 ? restaurant?.address.slice(0, 20) + "..." : restaurant?.address}</Text>
                        </View>
                    </View>

                    <Text className="text-md font-JakartaLight tracking-wide mx-2 my-2 text-black">{restaurant?.short_description}</Text>

                </View>

                <View className="flex-1">
                    <Text className="text-2xl font-JakartaBold my-2 mx-2">Menu</Text>
                    <Dishes dish={restaurant!.dishes} />
                </View>

            </View>
            <CartButton/>
        </View>
    )
}

export default RestraurantDetailsScreen