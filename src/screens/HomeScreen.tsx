import React, { useEffect, useState } from "react";
import { View, TextInput, Text } from "react-native";
import axios from "axios";
import { useQuery } from "react-query";
import StarshipItem from "@/components/StarshipItem";
import { LoadingIndicator } from "@/components/LoadingIndicator";

const endpoint = "https://swapi.dev/api";

const HomeScreen: React.FC = () => {
  const [starshipId, setStarshipId] = useState("");
  const [isSearching, setSearching] = useState(false);

  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint + "/starships/" + starshipId,
      method: "GET",
    }).then((response) => {
      return response.data;
    });
  });

  useEffect(() => {
    if (data && !data.hasOwnProperty("count") && isSearching) {
      setSearching(false);
    }
  }, [isSearching, data]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading starship</Text>;

  const onChangeText = (text: string) => {
    setStarshipId(text);
    setSearching(true);
  };

  console.log(
    "HomeScreen starshipId = ",
    starshipId
  );

  console.log(
    "HomeScreen data = ",
    data
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ padding: 20, borderWidth: 1, borderColor: "#ccc" }}
        placeholder="Search with starship ID"
        value={starshipId}
        onChangeText={onChangeText}
        editable={!isSearching}
      />
      {starshipId !== "" && !data.hasOwnProperty("count") && (
        <View style={{ paddingVertical: 20 }}>
          <StarshipItem starship={data} />
        </View>
      )}
      {isSearching &&
        <LoadingIndicator />
      }
    </View>
  );
};

export default HomeScreen;