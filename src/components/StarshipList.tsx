import React, { FC } from "react";
import { FlatList, View } from "react-native";
import StarshipItem from "./StarshipItem";
import { Starship } from "@/redux/starshipSlice";

interface Props {
  starshipList: Starship[];
}

const StarshipList: FC<Props> = ({ starshipList }) => {
  const onRenderItem = (starshipItem: Starship) => {
    return (
      <View style={{ paddingVertical: 10, }}>
        <StarshipItem starship={starshipItem} />
      </View>
    );
  };

  return (
    <FlatList
      data={starshipList}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => onRenderItem(item)}
    />
  );
};

export default StarshipList;
