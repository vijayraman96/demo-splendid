import { gql } from "@apollo/client";

export const GET_OBJECTIVE_LIST_GQL = gql`
  query getObjectiveList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $objective_id: String
    $content_id: String
    $content_type: ContentType
    $objective_name: String
    $weightage: Float
  ) {
    getObjectiveList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      objective_id: $objective_id
      content_id: $content_id
      content_type: $content_type
      objective_name: $objective_name
      weightage: $weightage
    ) {
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
      objectives {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        objective_id
        objective_name
        content_id
        content_type
        objective_descriptions {
          client_type
          description
        }
        objective_image_urls {
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
        weightage
        active
      }
    }
  }
`;
export const GET_USER_OBJECTIVE_LIST_GQL = gql`
  query getUserObjectiveList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $user_objective_id: String
    $user_id: String
    $objective_id: String
    $weightage: Float
  ) {
    getUserObjectiveList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      user_objective_id: $user_objective_id
      user_id: $user_id
      objective_id: $objective_id
      weightage: $weightage
    ) {
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
      user_objectives {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_objective_id
        user_id
        objective_id
        weightage
        active
      }
    }
  }
`;
export const GET_USER_OBJECTIVE_GQL = gql`
  query getUserObjective($user_objective_id: String!) {
    getUserObjective(user_objective_id: $user_objective_id) {
      status
      error
      message
      version
      service
      user_objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_objective_id
        user_id
        objective_id
        weightage
        active
      }
    }
  }
`;
export const GET_OBJECTIVE_GQL = gql`
  query getObjective($objective_id: String!) {
    getObjective(objective_id: $objective_id) {
      status
      error
      message
      version
      service
      objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        objective_id
        objective_name
        content_id
        content_type
        objective_descriptions {
          client_type
          description
        }
        objective_image_urls {
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
        weightage
        active
      }
    }
  }
`;
export const ADD_OBJECTIVE_GQL = gql`
  mutation AddObjective($addReq: AddObjectiveRequest!) {
    AddObjective(addReq: $addReq) {
      status
      error
      message
      version
      service
      objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        objective_id
        objective_name
        content_id
        content_type
        objective_descriptions {
          client_type
          description
        }
        objective_image_urls {
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
        weightage
        active
      }
    }
  }
`;
export const UPDATE_OBJECTIVE_GQL = gql`
  mutation updateObjective($update_request: UpdateObjectiveRequest!) {
    updateObjective(update_request: $update_request) {
      status
      error
      message
      version
      service
      objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        objective_id
        objective_name
        content_id
        content_type
        objective_descriptions {
          client_type
          description
        }
        objective_image_urls {
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
        weightage
        active
      }
    }
  }
`;
export const REMOVE_OBJECTIVE_GQL = gql`
  mutation removeObjective($objective_id: String!) {
    removeObjective(objective_id: $objective_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const ACTIVATE_OBJECTIVE_GQL = gql`
  mutation activateObjective($active_request: ActivateObjectiveRequest!) {
    activateObjective(active_request: $active_request) {
      status
      error
      message
      version
      service
      objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        objective_id
        objective_name
        content_id
        content_type
        objective_descriptions {
          client_type
          description
        }
        objective_image_urls {
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
        weightage
        active
      }
    }
  }
`;
export const ADD_USER_OBJECTIVE_GQL = gql`
  mutation AddUserObjective($addReq: AddUserObjectiveRequest!) {
    AddUserObjective(addReq: $addReq) {
      status
      error
      message
      version
      service
      user_objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_objective_id
        user_id
        objective_id
        weightage
        active
      }
    }
  }
`;
export const UPDATE_USER_OBJECTIVE_GQL = gql`
  mutation updateUserObjective($update_request: UpdateUserObjectiveRequest!) {
    updateUserObjective(update_request: $update_request) {
      status
      error
      message
      version
      service
      user_objective {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_objective_id
        user_id
        objective_id
        weightage
        active
      }
    }
  }
`;
export const REMOVE_USER_OBJECTIVE_GQL = gql`
  mutation removeUserObjective($user_objective_id: String!) {
    removeUserObjective(user_objective_id: $user_objective_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const GET_BANNER_LIST_GQL = gql`
  query getBannerList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $sort_order: Float
    $banner_id: String
    $banner_name: String
    $banner_code: String
    $banner_location: LocationType
    $sub_domain_id: String
  ) {
    getBannerList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      sort_order: $sort_order
      banner_id: $banner_id
      banner_name: $banner_name
      banner_code: $banner_code
      banner_location: $banner_location
      sub_domain_id: $sub_domain_id
    ) {
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
      banners {
        created_at
        created_by
        updated_at
        updated_by
        banner_id
        banner_name
        banner_code
        sub_domain_id
        sort_order
        banner_location
        banner_content
        banner_descriptions {
          client_type
          description
        }
        banner_image_urls {
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
        banner_video_urls {
          video_type
          video_orientation
          video_url
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
        active
      }
    }
  }
`;

export const GET_BANNER_GQL = gql`
  query getBanner($banner_id: String!) {
    getBanner(banner_id: $banner_id) {
      status
      error
      message
      version
      service
      banner {
        created_at
        created_by
        updated_at
        updated_by
        banner_id
        banner_name
        banner_code
        sub_domain_id
        sort_order
        banner_location
        banner_content
        banner_descriptions {
          client_type
          description
        }
        banner_image_urls {
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
        banner_video_urls {
          video_type
          video_orientation
          video_url
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
        active
      }
    }
  }
`;

export const ADD_BANNER_GQL = gql`
  mutation AddBanner($addReq: AddBannerRequest!) {
    AddBanner(addReq: $addReq) {
      status
      error
      message
      version
      service
      banner {
        created_at
        created_by
        updated_at
        updated_by
        banner_id
        banner_name
        banner_code
        sub_domain_id
        sort_order
        banner_location
        banner_content
        banner_descriptions {
          client_type
          description
        }
        banner_image_urls {
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
        banner_video_urls {
          video_type
          video_orientation
          video_url
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
        active
      }
    }
  }
`;

export const UPDATE_BANNER_GQL = gql`
  mutation updateBanner($update_request: UpdateBannerRequest!) {
    updateBanner(update_request: $update_request) {
      status
      error
      message
      version
      service
      banner {
        created_at
        created_by
        updated_at
        updated_by
        banner_id
        banner_name
        banner_code
        sub_domain_id
        sort_order
        banner_location
        banner_content
        banner_descriptions {
          client_type
          description
        }
        banner_image_urls {
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
        banner_video_urls {
          video_type
          video_orientation
          video_url
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
        active
      }
    }
  }
`;

export const ACTIVATE_BANNER_GQL = gql`
  mutation activateBanner($active: Boolean!, $banner_id: String!) {
    activateBanner(active: $active, banner_id: $banner_id) {
      status
      error
      message
      version
      service
      banner {
        created_at
        created_by
        updated_at
        updated_by
        banner_id
        banner_name
        banner_code
        sub_domain_id
        sort_order
        banner_location
        banner_content
        banner_descriptions {
          client_type
          description
        }
        banner_image_urls {
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
        banner_video_urls {
          video_type
          video_orientation
          video_url
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
        active
      }
    }
  }
`;

export const REMOVE_BANNER_GQL = gql`
  mutation removeBanner($banner_id: String!) {
    removeBanner(banner_id: $banner_id) {
      status
      error
      message
      version
      service
    }
  }
`;
