import pizaa from "../assets/images/pizza-slice.png"
import chicken from "../assets/images/chicken_dish.png"
import res_1 from "../assets/images/res_1.jpeg"
import res_2 from "../assets/images/res_2.jpeg"
import res_3 from "../assets/images/res_3.jpeg"
import res_4 from "../assets/images/res_4.jpeg"
import res_5 from "../assets/images/res_5.jpeg"
import start from "../assets/images/star.png"
import location from '../assets/images/location.png'
import burger_image from '../assets/images/burger_image.jpeg';
import samosa_image from '../assets/images/samosa_image.jpeg'
import chicken_image from '../assets/images/chicken_image.jpeg'

export const images = {
    chickenImage: chicken,
    res_1,
    res_2,
    res_3,
    res_4,
    res_5,
    burger_image,
    samosa_image,
    chicken_image
}

export const icons = {
    pizzaIcons: pizaa,
    start,
    location
}
export const featuredListValue = [
   {
    id:1,
    title:"Hot and Spicy 1",
    description:"soft and tender fried chicken",
    restaurants:[
        {
            id:1,
            name:"Burger King",
            short_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:res_1,
            lat:28.123456,
            long:78.123456,
            address:"123, Main Street, New York, NY 10030",
            start:4.5,
            review:"4.4k",
            category:"Fast Food",
            dishes:[
                {
                    id:1,
                    name:"Burger",
                    description:"Delicious burger",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:2,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                }
            ]
        },
        {
            id:2,
            name:"KFC",
            short_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:res_2,
            lat:28.123456,
            long:78.123456,
            address:"123, Main Street, New York, NY 10030",
            start:4.5,
            review:"4.4k",
            category:"Fast Food",
            dishes:[
                {
                    id:1,
                    name:"Burger",
                    description:"Delicious burger hjgsjkhhgjkasbjskahkjasdhkjsahksa",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:2,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                },
                {
                    id:3,
                    name:"Burger",
                    description:"Delicious burger hjgsjkhhgjkasbjskahkjasdhkjsahksa",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:4,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                },
                {
                    id:5,
                    name:"Burger",
                    description:"Delicious burger hjgsjkhhgjkasbjskahkjasdhkjsahksa",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:6,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                },
                {
                    id:7,
                    name:"Burger",
                    description:"Delicious burger hjgsjkhhgjkasbjskahkjasdhkjsahksa",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:8,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                },
                {
                    id:9,
                    name:"Burger",
                    description:"Delicious burger hjgsjkhhgjkasbjskahkjasdhkjsahksa",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:10,
                    name:"Chicken",
                    description:"Delicious Chicken last",
                    price:5.00,
                    image:chicken_image
                }
            ]
                
        },
        {
            id:3,
            name:"Papa John",
            short_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:res_3,
            lat:28.123456,
            long:78.123456,
            address:"123, Main Street, New York, NY 10030",
            start:4.5,
            review:"4.4k",
            category:"Fast Food",
            dishes:[
                {
                    id:1,
                    name:"Burger",
                    description:"Delicious burger",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:2,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                }
            ]
        },
    ]
   },
   {
    id:2,
    title:"Hot and Spicy 2",
    description:"soft and tender fried chicken",
    restaurants:[
        {
            id:1,
            name:"Burger King",
            short_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:res_1,
            lat:28.123456,
            long:78.123456,
            address:"123, Main Street, New York, NY 10030",
            start:4.5,
            review:"4.4k",
            category:"Fast Food",
            dishes:[
                {
                    id:1,
                    name:"Burger",
                    description:"Delicious burger",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:2,
                    name:"Samosa",
                    description:"Delicious samosa",
                    price:5.00,
                    image:samosa_image
                }
            ]
        },
        {
            id:2,
            name:"KFC",
            short_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:res_2,
            lat:28.123456,
            long:78.123456,
            address:"123, Main Street, New York, NY 10030",
            start:4.5,
            review:"4.4k",
            category:"Fast Food",
            dishes:[
                {
                    id:1,
                    name:"Burger",
                    description:"Delicious burger",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:2,
                    name:"Chicken",
                    description:"Delicious Chicken",
                    price:5.00,
                    image:chicken_image
                }
            ]
        },


    ]
   },
   {
    id:3,
    title:"Hot and Spicy 3",
    description:"soft and tender fried chicken",
    restaurants:[
        {
            id:1,
            name:"Papa John",
            short_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            image:res_3,
            lat:28.123456,
            long:78.123456,
            address:"123, Main Street, New York, NY 10030",
            start:4.5,
            review:"4.4k",
            category:"Fast Food",
            dishes:[
                {
                    id:1,
                    name:"Burger",
                    description:"Delicious burger",
                    price:10.00,
                    image:burger_image
                },
                {
                    id:2,
                    name:"Samosa",
                    description:"Delicious Samosa",
                    price:5.00,
                    image:samosa_image
                }
            ]
        },


    ]
   }
]

export const categories =[
    {
        id:1,
        name:"Pizza",
        image: icons.pizzaIcons
    },
    {
        id:2,
        name:"Burger",
        image:icons.pizzaIcons
    },
    {
        id:3,
        name:"Sushi",
        image:icons.pizzaIcons
    },
    {
        id:4,
        name:"Chicken",
        image:icons.pizzaIcons
    },
    {
        id:5,
        name:"Dessert",
        image:icons.pizzaIcons
    }
]