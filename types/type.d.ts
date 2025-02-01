import { ImageSourcePropType } from "react-native";

declare interface CategoriesProps {
    id:number,
    name:string,
    image:ImageSourcePropType
}

declare interface FeaturedProps{
    id: number,
    title: string,
    description: string,
    restaurants: RestaurantProps[]
}

declare interface RestaurantProps{
    id: number,
    name: string,
    short_description: string,
    lat: number,
    long: number,
    address: string,
    start:number,
    review:string,
    category:string,
    image: ImageSourcePropType
    dishes: DishesProps[]
}

declare interface DishesProps{
    id:number,
    name:string,
    description:string,
    price:number,
    image:ImageSourcePropType

}

declare interface RestaurantStore {
    selectedRestaurant: RestaurantProps | null;
    setRestaurant: (restaurant: RestaurantProps) => void;
  }