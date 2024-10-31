import type React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type SearchBarProps = {
  searchStarship: string;
  setSearchStarship: (starshipName: string) => void;
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

const SearchBar: React.FC<SearchBarProps> = ({
  searchStarship,
  setSearchStarship,
}) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search for a spaceship..."
      value={searchStarship}
      onChangeText={setSearchStarship}
    />
  );
};

export default SearchBar;
