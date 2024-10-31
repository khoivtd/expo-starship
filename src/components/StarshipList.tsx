import type React from 'react';
import { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import type { Starship } from '@/redux/starship.slice';

import StarshipItem from './StarshipItem';

type StarshipListProps = {
  starshipList: Starship[];
};

const StarshipList: React.FC<StarshipListProps> = ({ starshipList }) => {
  const onRenderItem = useCallback((starshipItem: Starship) => {
    return (
      <View style={{ paddingVertical: 10 }}>
        <StarshipItem starship={starshipItem} />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={starshipList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => onRenderItem(item)}
    />
  );
};

export default StarshipList;
