
import { View, Text, TextInput, ScrollView } from 'react-native'
import '../global.css'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'
import { themeColors } from '@/theme'
import Categories from '@/components/Categories'
import {categories, featuredListValue} from '@/constants'
import Featured from '@/components/Featured'



const HomeScreen = () => {
    return (
        <SafeAreaView className='bg-white flex-1' >
           
            <StatusBar style='dark' />
            <View className="flex-row items-center space-x-2 px-4 pb-2 justify-center mt-5 mb-5">

                <View className='flex-row flex-1 items-center p-1.5 rounded-full border border-gray-300'>

                    <Icon.Search height={25} width={25} stroke="gray" />

                    <TextInput
                        placeholder='Restaurants'
                        className='ml-2 flex-1' />
                    <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
                        <Icon.MapPin height={20} width={20} stroke="gray" />
                        <Text className='text-gray-600'> New York, NYC</Text>
                    </View>
                </View>
                
                <View style={{backgroundColor: themeColors.bgColor(1)}} className='p-3 rounded-full m-2'>
                    <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white"/>

                </View>
            </View>


           

          <Categories categorieList = {categories} />
          <ScrollView 
            contentContainerStyle={{
                padding:1,
            }}
            showsVerticalScrollIndicator={false} 
            >
          <Featured featherList={featuredListValue} />
          </ScrollView>  
          
        </SafeAreaView>
    )

}

export default HomeScreen