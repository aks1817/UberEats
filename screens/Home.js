import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import { ScrollView,Alert } from 'react-native'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY =
  "gysBmKY5QLv8iMChWMWgSwsUd-9b-hRrC-pQnR-ACM8xzCaNQ2gjmK5KHuEcR-fSEd6DOy7LXQJQvVt7fEkzESerRbp1zESf5d0nm538g7zn9FQU0_-W4mo7U3dGYnYx";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const yelpUrl =
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses.filter((business) => 
            business.transactions.includes(activeTab.toLowerCase())
        )
      )
    );
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab])

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}