import { opacity } from "react-native-reanimated/lib/typescript/Colors";



const pallete =[
    {
        text:'#f97316',
        bgColor: (opacity:number) => `rgba(251, 146, 60, ${opacity})` 
    },
    {
        text:'#334155',
        bgColor: (opacity:number) => `rgba(30, 41, 50, ${opacity})` 
    },
    {
        text:'#7c3aed',
        bgColor: (opacity:number) => `rgba(167, 139, 250, ${opacity})` 
    },
    {
        text:'#009950',
        bgColor: (opacity:number) => `rgba(0, 179, 89, ${opacity})` 
    },
    
    
]

export const themeColors = {
    ...pallete[3]
}