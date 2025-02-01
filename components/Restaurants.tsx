import { icons } from "@/constants";
import { useRestaurantStore } from "@/store";
import { RestaurantProps } from "@/types/type";
import { router } from "expo-router";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";

const Restaurants = ({ restaurants }: { restaurants: RestaurantProps[] }) => {
    const onRestaurantItemClick = (restaurant: RestaurantProps)=> {
      useRestaurantStore.getState().setRestaurant(restaurant)
      router.push("/restraurant_screen")
    }
    return (
        <View>
            <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity className="rounded-3xl shadow-lg m-4 bg-white mr-6"
                        onPress={() => onRestaurantItemClick(item)}
                        >
                            <Image
                                source={item.image}
                                className="h-36 w-full rounded-t-3xl"
                            />
                            <View className="px-2 pb-4 space-y-2">
                                <Text className="text-lg font-JakartaBold mt-1">{item.name}</Text>
                                <View className="flex-row mt-1">
                                    <Image
                                        source={icons.start}
                                        className="w-4 h-4 self-center px-2 mt-0.5"
                                    />
                                    <Text className="text-green-400 font-JakartaMedium ml-1">{item.start}</Text>
                                    <Text className="text-gray-700 font-JakartaLight ml-1">({item.review}) Review</Text>

                                </View>
                                <Text className="text-gray-900 font-JakartaSemiBold mt-2 ml-1">{item.category}</Text>
                                <View className="flex flex-row mt-1">
                                    <Image 
                                    source={icons.location}
                                    className="w-6 h-6 px-2 mt-1 self-center"
                                    />
                                    <Text className="text-gray-500 font-JakartaLight mt-1 ml-1">
                                        {item.address}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Restaurants