import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourited = favourites.includes(restaurant);

  return (
    <FavouriteButton
      onPress={() => {
        !isFavourited
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFavourited ? "heart" : "hearto"}
        size={24}
        color={isFavourited ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
