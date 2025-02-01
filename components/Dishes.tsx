import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { DishesProps } from "@types/type";
import * as icons from 'react-native-feather';
import { themeColors } from "@/theme";

const Dishes = ({ dish }: { dish: DishesProps[] }) => {
    return (
         <FlatList
            data={dish}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View className="flex-row items-center justify-between rounded-3xl m-3 bg-slate-200 p-3">
                    
                    {/* Dish Image */}
                    <Image
                        source={item.image}
                        className="rounded-3xl"
                        style={{ height: 100, width: 100 }}
                    />

                    {/* Dish Details */}
                    <View className="flex-1 mx-3">
                        <Text className="text-xl font-JakartaBold tracking-wide">{item.name}</Text>

                        {/* Ensuring Description does not overlap */}
                        <Text className="text-md font-JakartaLight tracking-wide" numberOfLines={2}>
                            {item.description}
                        </Text>

                        <Text className="text-lg font-JakartaBold tracking-wide mt-2">${item.price}</Text>
                    </View>

                    {/* Buttons: Aligned to the Right-Bottom */}
                        <View className="flex flex-row items-center self-end">
                            <TouchableOpacity
                                className="rounded-full items-center justify-center p-2"
                                style={{
                                    backgroundColor: themeColors.bgColor(1)
                                }}
                            >
                                <icons.Minus stroke="white" strokeWidth={2} height={20} width={20} />
                            </TouchableOpacity>

                            <Text className="text-md text-black font-JakartaMedium mx-2 self-center bg-white p-2 rounded-md">
                                0
                            </Text>

                            <TouchableOpacity
                                className="rounded-full items-center justify-center p-2"
                                style={{
                                    backgroundColor: themeColors.bgColor(1)
                                }}
                            >
                                <icons.Plus stroke="white" strokeWidth={2} height={20} width={20} />
                            </TouchableOpacity>
                        </View>
                    </View>

            )}
            contentContainerStyle={
                {
                    paddingBottom: 300
                }
            }
           
        />
    );
};

export default Dishes;
