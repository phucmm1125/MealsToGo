import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinkExpand, setDrinkExpand] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpand}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpand}
          onPress={() => setLunchExpand(!lunchExpand)}
        >
          <List.Item title="Burger /w Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpand}
          onPress={() => setDinnerExpand(!dinnerExpand)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom" />
          <List.Item title="Steak /w Fries" />
        </List.Accordion>

        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinkExpand}
          onPress={() => setDrinkExpand(!drinkExpand)}
        >
          <List.Item title="Tea" />
          <List.Item title="Coffee" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
