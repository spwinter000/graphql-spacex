import { gql } from "@apollo/client";

export const GET_LAUNCHES_QUERY = gql`
query launchesPast(limit: 10) {
      id
      mission_name
      links {
        flickr_images
        mission_patch_small
      }
      rocket {
        rocket_name
      }
      launch_date_utc
    }
`