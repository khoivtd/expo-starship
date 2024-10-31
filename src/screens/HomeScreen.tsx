import { useQuery } from '@apollo/client';
import type React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { LoadingIndicator } from '@/components/LoadingIndicator';
import SearchBar from '@/components/SearchBar';
import StarshipItem from '@/components/StarshipItem';
import StarshipList from '@/components/StarshipList';
import { GET_ALL_STARSHIP } from '@/graphql/queries';
import type { RootState } from '@/redux/store';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  section: {
    marginVertical: 8,
  },
});

const HomeScreen: React.FC = () => {
  const [searchStarship, setSearchStarship] = useState('');

  const favorites = useSelector((state: RootState) => state.starship.favorites);

  const { loading, error, data } = useQuery(GET_ALL_STARSHIP);

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error loading Starship list</Text>;

  const filteredStarshipList = data?.allStarships?.starships?.filter(
    (spaceship: any) =>
      spaceship.name.toLowerCase().includes(searchStarship.toLowerCase()),
  );

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchBar
          searchStarship={searchStarship}
          setSearchStarship={setSearchStarship}
        />

        <Text style={styles.section}>Search result:</Text>

        {filteredStarshipList && filteredStarshipList.length === 1 && (
          <View style={styles.section}>
            <StarshipItem starship={filteredStarshipList[0]} />
          </View>
        )}

        <Text style={styles.section}>Favorites:</Text>

        {favorites && favorites.length > 0 && (
          <View style={styles.section}>
            <StarshipList starshipList={favorites} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
