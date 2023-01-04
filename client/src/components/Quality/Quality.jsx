import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import { Button, Text, Image, Box } from "@chakra-ui/react";
//footer

export default function Quality() {
    return (
        <Box>
            <NavBar />
            <Text display={"flex"} justifyContent={"center"} fontSize="2.5rem" >Our Commitment to Quality</Text>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    h={"500"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/quality_fbqslc.jpg"
                />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Text display={"flex"} textAlign={"center"} fontSize="1rem">
                    At McBurger, we take great care to ensure that what we serve every day is safe, quality food. That means we use 100% real beef patties seasoned with just a pinch of salt and pepper. It means our Egg is made with a freshly cracked egg. And, our Filet-O-Fish sandwich is made with 100% whitefish sourced from sustainably managed fisheries. It means our Chicken McNuggets are made with white meat chicken. Simply put, it means real, quality ingredients and always evolving what matters to you.
                </Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/nuestrocampo_nyrmlg.jpg" />
            </Box>
            <Box justifyContent={"center"}>
                <Text textAlign={"center"} fontSize="1.5rem">Antibiotics Policies</Text>
                <Text textAlign={"center"} fontSize="1rem">We believe in the responsible use of antibiotics important to human medicine to help preserve their effectiveness for human and animal health in the future. In August of 2021, we accomplished our goal to only source chickens in the Argentina not treated with antibiotics important to human medicine. Building on this progress, in 2022 we set out to eliminate the highest priority antibiotics across our global chicken supply chain.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/nuestrocampo2_bylxkf.jpg" />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize="1.5rem" >A Commitment to Sustainable Beef</Text>
                <Text textAlign={"center"} fontSize="1rem">Burgers are an integral part of our menu, but that's just one of the reasons we're on a journey to advance more sustainable beef production. We're striving to improve environmental practices in how beef is produced, make a positive difference in the lives of farmers, and to drive improvements in animal health and welfare. By joining forces with our partners, our beef sustainability goal is to influence industry-wide changes on a global scale.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/preparacion_xe6jph.jpg" />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize="1.5rem" >Pride in Preparation</Text>
                <Text textAlign={"center"} fontSize="1rem" >Every day, our kitchens work to prepare your food just the way you like it. That's why we introduced fresh beef in our Quarter Pound burgers, cooked when you order, then served hot and deliciously juicy. Our buns are freshly toasted hot and golden to perfectly complement your favorite burgers and sandwiches.</Text>
            </Box>

            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    display={"flex"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/amburgesaconqueso_fyy6w3.jpg" />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize="1.5rem" >Back to Basics</Text>
                <Text textAlign={"center"} fontSize="1rem" >We're on a food journey, and our menu shows it. We've evolved everything from how we cook our beef patties, to the ingredients we use in new and old favorites. We use real butter for our breakfast items and a freshly cracked egg in our Egg. In 2021, we announced that all of our seven classic burgers have no artificial preservatives, no artificial flavors and no added colors from artificial sources. (Our pickle contains an artificial preservative, so skip it if you like.)</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    display={"flex"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/materiaprima3_dyr4sw.jpg" />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize="1.5rem" >Commitment to Sustainably Sourced Coffee</Text>
                <Text textAlign={"center"} fontSize="1rem" >McBurger is making meaningful changes to our coffee supply chain. We've partnered with other industry leaders in a shared effort to make coffee the world's first sustainable agricultural product by joining Conservation International's Sustainable Coffee Challenge.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    display={"flex"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/bebidasconleche_ukt24l.jpg" />
            </Box>
            <Box >
                <Text textAlign={"center"} fontSize="1.5rem" >Milk From Cows not Treated with rbST</Text>
                <Text textAlign={"center"} fontSize="1rem" >The milk we use in our low-fat white Milk Jugs and reduced sugar low-fat chocolate Milk Jugs comes from cows that are not treated with rbST, an artificial growth hormone.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    display={"flex"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/solidaridad_luaxfq.jpg" />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize="1.5rem" >Sustainability at Sea</Text>
                <Text textAlign={"center"} fontSize="1rem" >We're committed to protecting fish supplies and healthy oceans by making sustainable fish sourcing the industry standard. Every Filet-O-Fish sandwich served in the Argentina is made with  one of the largest Marine Stewardship Council-certified fisheries in the world. In fact, all of the whitefish we serve globally is sourced from sustainably managed wild-caught fisheries.</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    display={"flex"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084662/McBurgerExtras/amburguesaspollo_j5hnk4.jpg" />
            </Box>
            <Box>
                <Text textAlign={"center"} fontSize="1.5rem" >Committed to Menu Evolution</Text>
                <Text textAlign={"center"} fontSize="1rem" >Change is good, especially when it means adding new tastes to our menu. </Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
                <Image
                    margin={"30px"}
                    align={"center"}
                    h={"400"}
                    justifyContent={"center"}
                    src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672084663/McBurgerExtras/materiaprima2_wc7pet.jpg" />
            </Box>
            <Box mb={"70px"}>
                <Text textAlign={"center"} fontSize="1.5rem" >Making Nutrition Information Accessible</Text>
                <Text textAlign={"center"} fontSize="1rem" >It's been a longstanding practice to provide you with relevant nutrition information so you can make informed food choices. We're continuing to develop ways to provide this information to you such as our Nutrition Calculator and our Mobile App. We work to ensure that nutrition information for our menu items is available and accessible through all owned websites and mobile apps used for ordering.</Text>
            </Box>
            <Footer />
        </Box>
    )
}