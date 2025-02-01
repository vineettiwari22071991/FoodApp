import { themeColors } from '@/theme'
import { CategoriesProps } from '@/types/type'
import { useState } from 'react'
import { FlatList, View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

const Categories = ({ categorieList }: { categorieList: CategoriesProps[] }) => {
    const [selectedCategories, setSelectedCategories] = useState<number>()

    const handleSelectCategories = (id: number) => {
        setSelectedCategories(id)
    }
    return (
        <View>
            <FlatList
                data={categorieList}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            shadowColor: themeColors.bgColor(0.2),
                            shadowRadius: 7
                        }}>

                            <TouchableOpacity className={`rounded-full  p-3 m-2 ${selectedCategories === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                                onPress={() => handleSelectCategories(index)}
                            >
                                <Image
                                    source={item.image}
                                    className='h-12 w-12'
                                />

                            </TouchableOpacity>
                            <Text
                                className={`self-center px-2 ${selectedCategories === index
                                    ? "text-black text-md font-JakartaBold"
                                    : "text-gray-800 text-sm font-JakartaMedium"
                                    }`}
                            >
                                {item.name.length > 7 ? item.name.slice(0, 6) + "..." : item.name}
                            </Text>
                        </View>


                    )

                }}
                contentContainerStyle={{ paddingHorizontal: 8 }}
            />

        </View>
    )
}

export default Categories