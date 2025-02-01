import { FeaturedProps } from '@/types/type'
import { View, Text, TouchableOpacity } from 'react-native'
import Restaurants from './Restaurants'

const Featured = ({ featherList }: { featherList: FeaturedProps[] }) => {



    return (
        <View className='flex'>
            {
                featherList.map((item, index) => {
                    return (
                        <View className='mt-5 bg-gray-100' key={index}>
                            <View className='my-4 mx-4 flex-row justify-between'>
                                <View className='flex items-start justify-start'>
                                    <Text className='text-2xl font-JakartaExtraBold text-black'>{item.title}</Text>
                                    <Text className='text-md font-JakartaMedium text-gray-400'>{item.description}</Text>
                                </View>
                                <TouchableOpacity>
                                <Text className='text-md text-orange-300 items-center'>
                                    See All
                                </Text>
                                </TouchableOpacity>
                                

                            </View>
                            <Restaurants restaurants = {item.restaurants}/> 
                        </View>

                    )
                })
            }
        </View>
    )
}

export default Featured