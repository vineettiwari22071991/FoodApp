import { RestaurantStore } from "@/types/type"
import {create} from "zustand"

export const useRestaurantStore = create<RestaurantStore>((set)=>({
    selectedRestaurant: null,
    setRestaurant: (restaurant) => set({selectedRestaurant: restaurant})

}))