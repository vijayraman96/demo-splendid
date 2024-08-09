import { gql } from "@apollo/client";

export const ADD_FACE_GAME_GQL = gql`
  mutation AddFaceGame($addReq: AddFaceGameRequest!) {
    AddFaceGame(addReq: $addReq) {
      status
      error
      message
      version
      service
      face_game {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        face_game_id
        face_id
        face_game_name
        face_age
        face_gender
        face_ethinicity
        parent_face_id
        face_image_url {
          image_url_id
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        is_morphed
      }
    }
  }
`;

export const UPDATE_FACE_GAME_GQL = gql`
  mutation updateFaceGame($update_request: UpdateFaceGameRequest!) {
    updateFaceGame(update_request: $update_request) {
      status
      error
      message
      version
      service
      face_game {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        face_game_id
        face_id
        face_game_name
        face_age
        face_gender
        face_ethinicity
        parent_face_id
        face_image_url {
          image_url_id
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        is_morphed
      }
    }
  }
`;

export const REMOVE_FACE_GAME_GQL = gql`
mutation removeFaceGame ($face_game_id: String!) {
    removeFaceGame (face_game_id: $face_game_id) {
        status
        error
        message
        version
        service
    }
}`;

export const GET_FACE_GAME_LIST_GQL = gql`
query getFaceGameList ($pagination: PaginationFilter, $dateFilter: DateFilter, $active: Boolean, $face_game_id: String, $face_id: Float, $face_game_name: String, $parent_face_id: String, $face_age: FaceAge, $face_gender: FaceGender, $face_ethinicity: FaceEthinicity, $face_image_url: ImageItemInput, $is_morphed: Boolean) {
    getFaceGameList (pagination: $pagination, dateFilter: $dateFilter, active: $active, face_game_id: $face_game_id, face_id: $face_id, face_game_name: $face_game_name, parent_face_id: $parent_face_id, face_age: $face_age, face_gender: $face_gender, face_ethinicity: $face_ethinicity, face_image_url: $face_image_url, is_morphed: $is_morphed) {
        status
        error
        message
        version
        service
        pagination {
            page_number
            item_count
            total_count
        }
        face_games {
            created_at
            created_by
            updated_at
            updated_by
            row_crc
            face_game_id
            face_id
            face_game_name
            face_age
            face_gender
            face_ethinicity
            parent_face_id
            face_image_url {
                image_url_id
                image_type
                url
                is_mobile
                video_stream {
                    provider_u_id
                    provider_thumbnail_url
                    provider_preview_url
                    provider_ready_to_stream
                    provider_file_size
                    provider_stream_duration
                    provider_playback_hls_url
                    provider_playback_dash_url
                }
            }
            is_morphed
        }
    }
}`;

