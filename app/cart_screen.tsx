import { featuredListValue, images } from "@/constants"
import { useRestaurantStore } from "@/store"
import { themeColors } from "@/theme"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import * as Icons from 'react-native-feather'
const CartScreen = () => {

    const restaurant = useRestaurantStore((state) => state.selectedRestaurant)

    return (
        <SafeAreaView className="bg-white flex-1 mt-5">
            <StatusBar style="dark" />
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity className="rounded-full p-1 shadow top-5 left-2 z-10 absolute"
                    style={{
                        backgroundColor: themeColors.bgColor(1)
                    }}
                    onPress={() => router.back()}
                >

                    <Icons.ArrowLeft strokeWidth={1} stroke="white" width={30} height={30} />

                </TouchableOpacity>
                <View >
                    <Text className="text-center font-JakartaBold text-xl">Your Cart</Text>
                    <Text className="text-center font-JakartaMedium text-md text-gray-500">{restaurant!.name}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center"
            >
                <Image
                    source={images.delivery_guy}
                    className="w-14 h-14 my-1"
                />
                <Text className="flex-1 pl-4 font-JakartaBold">Delivery in 30 mins</Text>
                <TouchableOpacity>
                    <Text className="font-JakartaExtraBold"
                        style={{ color: themeColors.text }}
                    >Change</Text>
                </TouchableOpacity>
            </View>
          

            <FlatList
            keyExtractor={(item)=> item.id.toString()}
            data={restaurant?.dishes}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 100
            }}
            renderItem={(({item})=>{
                return(
                    <View
                    className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                >
                    <Text className="font-JakartaBold mr-2"
                        style={{
                            color: themeColors.text
                        }}
                    >2 x</Text>
                    <Image
                        className="h-14 w-14 rounded-full"
                        source={item.image}
                    />
                    <Text className="flex-1 font-JakartaBold text-gray-700 ml-2">{item.name}</Text>
                    <Text className="font-semibold text-base mr-2">{item.price}</Text>
                    <TouchableOpacity
                        className="p-1 rounded-full"
                        style={{
                            backgroundColor: themeColors.bgColor(1)
                        }}
                    >
                        <Icons.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                    </TouchableOpacity>

                </View>
                )
            })
    
        }

            />
            <View className="p-6 px-8 rounded-t-3xl space-y-4"
                style={{
                    backgroundColor: themeColors.bgColor(0.2)
                }}
            >
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">$20</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">$2</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-JakartaBold">Order Total</Text>
                    <Text className="text-gray-700 font-JakartaBold">$22</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: themeColors.bgColor(1)
                        }}
                        className="p-3 rounded-full mt-3"
                        onPress={() => router.push("/food_preparing")}
                    >
                        <Text className="text-white text-center font-JakartaBold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default CartScreen