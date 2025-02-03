import { gifImages } from "@/constants"
import { router } from "expo-router"
import { Image, View } from "react-native"

const FoodPreparingScreen = () => {

    setTimeout(() => {
        router.replace("/order_delivered")
    }, 3000)
    return(
        <View className="flex-1 items-center justify-center">
            <Image 
            source={gifImages.delivery_food}
            className="h-60 w-60"
            />
        </View>
    )
}

export default FoodPreparingScreen