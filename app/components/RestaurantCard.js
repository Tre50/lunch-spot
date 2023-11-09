import { useContext } from 'react'
import { Box, Text, Image, Heading, Pressable } from '@gluestack-ui/themed'
import { router } from 'expo-router'
import { RestaurantContext } from '../_layout'

export default function RestaurantCard ({restaurant}){

const { setThisRest } = useContext(RestaurantContext)

const  showDetails = () => {
setThisRest(restaurant)
router.push("/details")

}
return(


<Pressable onPress={showDetails}>  

    <Box 
     padding={20}
    marginBottom={30}
    rounded="$xl"
    bgColor="$ghostwhite">
        <Image 
        h={180}
        w='$full'
        rounded="$lg"
        alt={restaurant.name} 
        source={{uri: restaurant.photo_url}}/>
    <Heading fontSize={30} color='blue'>{restaurant.name}</Heading>
    <Text fontSize={18} color='red'>{restaurant.address}</Text>
    
    
    </Box>

</Pressable>

)
}