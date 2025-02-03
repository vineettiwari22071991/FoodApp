import { themeColors } from "@/theme"
import { router } from "expo-router"
import { TouchableOpacity, View, Text } from "react-native"

const CartButton =()=>{
    const onViewCartButtonClick = ()=>{
        router.push("/cart_screen")
    }
    return(
        <View className=" absolute bottom-5 w-full z-50">
            <TouchableOpacity
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="flex-row justify-between items-center mx-5 rounded-full p-4"
            onPress={onViewCartButtonClick}
            >
                <View className="p-2 px-4 rounded-full bg-orange-700"
                >
                    <Text className="font-JakartaExtraBold text-white text-lg">3</Text>
                </View>

                <Text className="flex-1 text-center font-JakartaSemiBold text-white text-lg">View Cart</Text>
               <Text className="font-JakartaExtraBold text-white text-lg">${23}</Text>
            </TouchableOpacity>


        </View>
    )
}

export default CartButton