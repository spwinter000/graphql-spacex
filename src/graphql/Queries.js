import { gql } from "@apollo/client";

export const GET_LAUNCHES_QUERY = gql`
query launchesPast($limit: Int!) {
  launchesPast(limit: $limit) {
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
  }
`

export const GET_LAUNCH_DETAILS_QUERY = gql`
query launch($id: ID!) {
  launch(id: $id) {
    id
    mission_name
    details
    links {
      flickr_images
      mission_patch
    }
    id
  }
}
`