import { gql } from '@apollo/client';

export const GET_ALL_STARSHIP = gql`
  query {
    allStarships {
      starships {
        id
        name
        model
        manufacturers
        costInCredits
        length
        crew
        passengers
        cargoCapacity
        consumables
        hyperdriveRating
        MGLT
        starshipClass
        created
        edited
      }
      totalCount
    }
  }
`;
