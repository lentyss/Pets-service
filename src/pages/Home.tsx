import { Box, Text, Button } from '@chakra-ui/react';
import { ProductCard } from '../components/ProductCard'; 
import { Testimonial } from '../components/Testimonial';

function Home() { 
    return ( 
        <Box bg="brand.50" p={5}> 
            <Text fontSize="xl" color="brand.800">Добро пожаловать в мое первое React-приложение!</Text> 
            <Button mt={4} colorScheme="brand">Нажми меня</Button> 
            <ProductCard title='Набор "Первый котёнок" ' price={13850} imageUrl="src\img\products\image_firstkitten.svg" />
            <Testimonial
            name="Ирина"
            comment="Отличный продукт, очень довольна покупкой!"
            avatarUrl="src\img\icon_user.jpg"
            />
        </Box> 
    ); 
} 

export default Home;