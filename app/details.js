import { useContext } from 'react'
import { Text, Heading, Box, Image } from '@gluestack-ui/themed'
import { RestaurantContext } from './_layout'


export default function Details(){

const { thisRest } = useContext(RestaurantContext)
    return(
        <Box
        px={20}
        py={30}
        bgColor="red"
        flex={1}
        alignItems="center">
        <Image
        w="$full"
        h={250}
        alt={thisRest.name}
        source={{uri: thisRest.photo_url}} />
        
        <Heading size="4xl">{this.photo_url}</Heading>
        <Text>{thisRest.address}</Text>
        <Text>{thisRest?.rating}</Text>

      
        </Box>
    )
}