import { gql } from "@apollo/client";

export const GET_MASTER_CLASS_LIST_GQL = gql`
  query getMasterClassList(
    $get_pending_update: Boolean
    $published: Boolean
    $is_featured: Boolean
    $is_pilot: Boolean
    $is_live: Boolean
    $platform_content_mode_tag: PlatformContentModeTag
    $related_content_types: [ContentType!]
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $master_class_id: String
    $master_class_ids: [String!]
    $category_ids: [String!]
    $sub_domain_ids: [String!]
    $master_class_name: String
    $alias_name: String
    $master_class_code: String
    $master_class_status: MasterClassStatus
  ) {
    getMasterClassList(
      get_pending_update: $get_pending_update
      published: $published
      is_featured: $is_featured
      is_pilot: $is_pilot
      is_live: $is_live
      platform_content_mode_tag: $platform_content_mode_tag
      related_content_types: $related_content_types
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      master_class_id: $master_class_id
      master_class_ids: $master_class_ids
      category_ids: $category_ids
      sub_domain_ids: $sub_domain_ids
      master_class_name: $master_class_name
      alias_name: $alias_name
      master_class_code: $master_class_code
      master_class_status: $master_class_status
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
      master_class {
        master_class {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        pending_master_class_history {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          content_version
          update_counter
          content_type
          update_status
          update_type
          child_content_histories {
            child_content_history_id
            child_content_type
          }
          publish_data {
            created_by
            updated_by
            row_crc
            sub_domain_ids
            content_version
            update_counter
            active
            master_class_id
            alias_name
            master_class_code
            master_class_name
            master_class_descriptions {
              client_type
              description
            }
            master_class_image_urls {
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
            master_class_video_urls {
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
            master_class_document_urls {
              document_url_id
              name
              document_type
              duration
              url
              is_mobile
            }
            master_class_meta {
              type
              key
              value
              image_urls {
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
            }
            category_ids
            master_class_status
            tag_ids
            sort_order
          }
          reviewer_comment
          reviewed_by
          approver_comment
          approved_by
          data {
            created_by
            updated_by
            row_crc
            sub_domain_ids
            content_version
            update_counter
            active
            master_class_id
            alias_name
            master_class_code
            master_class_name
            master_class_descriptions {
              client_type
              description
            }
            master_class_image_urls {
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
            master_class_video_urls {
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
            master_class_document_urls {
              document_url_id
              name
              document_type
              duration
              url
              is_mobile
            }
            master_class_meta {
              type
              key
              value
              image_urls {
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
            }
            category_ids
            master_class_status
            tag_ids
            sort_order
          }
          updated_data {
            master_class_name
            alias_name
            master_class_code
            sub_domain_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            master_class_descriptions {
              update_items {
                update_type
                index
                update_data {
                  client_type
                  description
                }
              }
            }
            master_class_image_urls {
              update_items {
                update_type
                index
                update_data {
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
              }
            }
            master_class_video_urls {
              update_items {
                update_type
                index
                update_data {
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
              }
            }
            master_class_document_urls {
              update_items {
                update_type
                index
                update_data {
                  document_url_id
                  name
                  document_type
                  duration
                  url
                  is_mobile
                }
              }
            }
            category_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            master_class_meta {
              update_items {
                update_type
                index
                update_data {
                  type
                  key
                  value
                  image_urls {
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
                }
              }
            }
            master_class_status
            tag_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            active
            content_version
            update_counter
            sort_order
          }
          master_class_history_id
          master_class_id
        }
      }
    }
  }
`;

export const CREATE_MASTER_CLASS_GQL = gql`
  mutation createMasterClass($create_request: CreateMasterClassRequest!) {
    createMasterClass(create_request: $create_request) {
      status
      error
      message
      version
      service
      master_class {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_id
        alias_name
        master_class_code
        master_class_name
        master_class_descriptions {
          client_type
          description
        }
        master_class_image_urls {
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
        master_class_video_urls {
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
        master_class_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_meta {
          type
          key
          value
          image_urls {
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
        }
        category_ids
        master_class_status
        tag_ids
        sort_order
      }
      master_class_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        updated_data {
          master_class_name
          alias_name
          master_class_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_meta {
            update_items {
              update_type
              index
              update_data {
                type
                key
                value
                image_urls {
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
              }
            }
          }
          master_class_status
          tag_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          active
          content_version
          update_counter
          sort_order
        }
        master_class_history_id
        master_class_id
      }
    }
  }
`;

export const UPDATE_MASTER_CLASS_GQL = gql`
  mutation updateMasterClass($update_request: UpdateMasterClassRequest!) {
    updateMasterClass(update_request: $update_request) {
      status
      error
      message
      version
      service
      master_class {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_id
        alias_name
        master_class_code
        master_class_name
        master_class_descriptions {
          client_type
          description
        }
        master_class_image_urls {
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
        master_class_video_urls {
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
        master_class_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_meta {
          type
          key
          value
          image_urls {
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
        }
        category_ids
        master_class_status
        tag_ids
        sort_order
      }
      master_class_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        updated_data {
          master_class_name
          alias_name
          master_class_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_meta {
            update_items {
              update_type
              index
              update_data {
                type
                key
                value
                image_urls {
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
              }
            }
          }
          master_class_status
          tag_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          active
          content_version
          update_counter
          sort_order
        }
        master_class_history_id
        master_class_id
      }
    }
  }
`;

export const GET_MASTER_CLASS_SESSION_LIST_GQL = gql`
  query getMasterClassSessionList(
    $get_pending_update: Boolean
    $published: Boolean
    $is_featured: Boolean
    $is_pilot: Boolean
    $is_live: Boolean
    $platform_content_mode_tag: PlatformContentModeTag
    $related_content_types: [ContentType!]
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $master_class_id: String
    $master_class_session_id: String
    $master_class_session_title: String
    $sub_domain_ids: [String!]
    $master_class_session_code: String
    $master_class_session_ids: [String!]
    $master_class_ids: [String!]
    $category_id: String
    $category_ids: [String!]
    $start_date_from: DateTime
    $start_date_to: DateTime
    $master_class_action_type: MasterClassActionType
    $master_class_action_status: MasterClassActionStatus
  ) {
    getMasterClassSessionList(
      get_pending_update: $get_pending_update
      published: $published
      is_featured: $is_featured
      is_pilot: $is_pilot
      is_live: $is_live
      platform_content_mode_tag: $platform_content_mode_tag
      related_content_types: $related_content_types
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      master_class_id: $master_class_id
      master_class_session_id: $master_class_session_id
      master_class_session_title: $master_class_session_title
      sub_domain_ids: $sub_domain_ids
      master_class_session_code: $master_class_session_code
      master_class_session_ids: $master_class_session_ids
      master_class_ids: $master_class_ids
      category_id: $category_id
      category_ids: $category_ids
      start_date_from: $start_date_from
      start_date_to: $start_date_to
      master_class_action_type: $master_class_action_type
      master_class_action_status: $master_class_action_status
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
      master_class_sessions {
        master_class_session {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_session_id
          master_class_id
          master_class_session_title
          alias_name
          master_class_session_code
          master_class_session_descriptions {
            client_type
            description
          }
          master_class_session_image_urls {
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
          master_class_session_video_urls {
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
          master_class_session_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_session_meta {
            type
            key
            value
            image_urls {
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
          }
          master_class_session_status
          sort_order
        }
        pending_master_class_session_history {
          created_by
          updated_by
          row_crc
          content_version
          update_counter
          content_type
          update_status
          update_type
          child_content_histories {
            child_content_history_id
            child_content_type
          }
          publish_data {
            created_by
            updated_by
            row_crc
            sub_domain_ids
            content_version
            update_counter
            published
            active
            master_class_session_id
            master_class_id
            master_class_session_title
            alias_name
            master_class_session_code
            master_class_session_descriptions {
              client_type
              description
            }
            master_class_session_image_urls {
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
            master_class_session_video_urls {
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
            master_class_session_document_urls {
              document_url_id
              name
              document_type
              duration
              url
              is_mobile
            }
            master_class_session_meta {
              type
              key
              value
              image_urls {
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
            }
            master_class_session_status
            sort_order
          }
          reviewer_comment
          reviewed_by
          approver_comment
          approved_by
          data {
            created_by
            updated_by
            row_crc
            sub_domain_ids
            content_version
            update_counter
            published
            active
            master_class_session_id
            master_class_id
            master_class_session_title
            alias_name
            master_class_session_code
            master_class_session_descriptions {
              client_type
              description
            }
            master_class_session_image_urls {
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
            master_class_session_video_urls {
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
            master_class_session_document_urls {
              document_url_id
              name
              document_type
              duration
              url
              is_mobile
            }
            master_class_session_meta {
              type
              key
              value
              image_urls {
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
            }
            master_class_session_status
            sort_order
          }
          updated_data {
            master_class_session_id
            master_class_id
            alias_name
            sub_domain_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            master_class_session_title
            master_class_session_code
            master_class_session_status
            master_class_session_descriptions {
              update_items {
                update_type
                index
                update_data {
                  client_type
                  description
                }
              }
            }
            master_class_session_image_urls {
              update_items {
                update_type
                index
                update_data {
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
              }
            }
            master_class_session_video_urls {
              update_items {
                update_type
                index
                update_data {
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
              }
            }
            master_class_session_document_urls {
              update_items {
                update_type
                index
                update_data {
                  document_url_id
                  name
                  document_type
                  duration
                  url
                  is_mobile
                }
              }
            }
            sort_order
            master_class_session_meta {
              update_items {
                update_type
                index
                update_data {
                  type
                  key
                  value
                  image_urls {
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
                }
              }
            }
            published
            content_version
            update_counter
            active
            row_crc
          }
          master_class_session_history_id
          master_class_session_id
          master_class_id
        }
      }
    }
  }
`;

export const CREATE_MASTER_CLASS_SESSION_GQL = gql`
  mutation createMasterClassSession(
    $create_request: CreateMasterClassSessionRequest!
  ) {
    createMasterClassSession(create_request: $create_request) {
      status
      error
      message
      version
      service
      master_class_session {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_session_id
        master_class_id
        master_class_session_title
        alias_name
        master_class_session_code
        master_class_session_descriptions {
          client_type
          description
        }
        master_class_session_image_urls {
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
        master_class_session_video_urls {
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
        master_class_session_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_session_meta {
          type
          key
          value
          image_urls {
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
        }
        master_class_session_status
        sort_order
      }
      master_class_session_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_session_id
          master_class_id
          master_class_session_title
          alias_name
          master_class_session_code
          master_class_session_descriptions {
            client_type
            description
          }
          master_class_session_image_urls {
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
          master_class_session_video_urls {
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
          master_class_session_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_session_meta {
            type
            key
            value
            image_urls {
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
          }
          master_class_session_status
          sort_order
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_session_id
          master_class_id
          master_class_session_title
          alias_name
          master_class_session_code
          master_class_session_descriptions {
            client_type
            description
          }
          master_class_session_image_urls {
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
          master_class_session_video_urls {
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
          master_class_session_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_session_meta {
            type
            key
            value
            image_urls {
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
          }
          master_class_session_status
          sort_order
        }
        updated_data {
          master_class_session_id
          master_class_id
          alias_name
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_session_title
          master_class_session_code
          master_class_session_status
          master_class_session_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_session_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_session_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_session_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          sort_order
          master_class_session_meta {
            update_items {
              update_type
              index
              update_data {
                type
                key
                value
                image_urls {
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
              }
            }
          }
          published
          content_version
          update_counter
          active
          row_crc
        }
        master_class_session_history_id
        master_class_session_id
        master_class_id
      }
    }
  }
`;

export const UPDATE_MASTER_CLASS_SESSION_GQL = gql`
  mutation updateMasterClassSession(
    $update_request: UpdateMasterClassSessionRequest!
  ) {
    updateMasterClassSession(update_request: $update_request) {
      status
      error
      message
      version
      service
      master_class_session {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_session_id
        master_class_id
        master_class_session_title
        alias_name
        master_class_session_code
        master_class_session_descriptions {
          client_type
          description
        }
        master_class_session_image_urls {
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
        master_class_session_video_urls {
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
        master_class_session_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_session_meta {
          type
          key
          value
          image_urls {
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
        }
        master_class_session_status
        sort_order
      }
      master_class_session_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_session_id
          master_class_id
          master_class_session_title
          alias_name
          master_class_session_code
          master_class_session_descriptions {
            client_type
            description
          }
          master_class_session_image_urls {
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
          master_class_session_video_urls {
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
          master_class_session_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_session_meta {
            type
            key
            value
            image_urls {
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
          }
          master_class_session_status
          sort_order
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_session_id
          master_class_id
          master_class_session_title
          alias_name
          master_class_session_code
          master_class_session_descriptions {
            client_type
            description
          }
          master_class_session_image_urls {
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
          master_class_session_video_urls {
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
          master_class_session_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_session_meta {
            type
            key
            value
            image_urls {
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
          }
          master_class_session_status
          sort_order
        }
        updated_data {
          master_class_session_id
          master_class_id
          alias_name
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_session_title
          master_class_session_code
          master_class_session_status
          master_class_session_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_session_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_session_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_session_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          sort_order
          master_class_session_meta {
            update_items {
              update_type
              index
              update_data {
                type
                key
                value
                image_urls {
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
              }
            }
          }
          published
          content_version
          update_counter
          active
          row_crc
        }
        master_class_session_history_id
        master_class_session_id
        master_class_id
      }
    }
  }
`;

export const GET_MASTER_CLASS_ACTION_LIST_GQL = gql`
  query getMasterClassActionList(
    $get_pending_update: Boolean
    $published: Boolean
    $is_featured: Boolean
    $is_pilot: Boolean
    $is_live: Boolean
    $platform_content_mode_tag: PlatformContentModeTag
    $platform_content_mode_formats: [PlatformContentModeFormat!]
    $related_content_types: [ContentType!]
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $master_class_id: String
    $master_class_action_id: String
    $master_class_session_id: String
    $intervention_id: String
    $screener_id: String
    $master_class_ids: [String!]
    $master_class_session_ids: [String!]
    $master_class_action_ids: [String!]
    $host_ids: [String!]
    $speaker_ids: [String!]
    $category_ids: [String!]
    $master_class_action_type: MasterClassActionType
    $master_class_action_status: MasterClassActionStatus
    $master_class_action_statuses: [MasterClassActionStatus!]
    $master_class_action_name: String
    $master_class_action_code: String
    $start_date_from: DateTime
    $start_date_to: DateTime
    $scheduled_start_time: DateTime
    $scheduled_end_time: DateTime
    $end_date_from: DateTime
    $end_date_to: DateTime
  ) {
    getMasterClassActionList(
      get_pending_update: $get_pending_update
      published: $published
      is_featured: $is_featured
      is_pilot: $is_pilot
      is_live: $is_live
      platform_content_mode_tag: $platform_content_mode_tag
      platform_content_mode_formats: $platform_content_mode_formats
      related_content_types: $related_content_types
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      master_class_id: $master_class_id
      master_class_action_id: $master_class_action_id
      master_class_session_id: $master_class_session_id
      intervention_id: $intervention_id
      screener_id: $screener_id
      master_class_ids: $master_class_ids
      master_class_session_ids: $master_class_session_ids
      master_class_action_ids: $master_class_action_ids
      host_ids: $host_ids
      speaker_ids: $speaker_ids
      category_ids: $category_ids
      master_class_action_type: $master_class_action_type
      master_class_action_status: $master_class_action_status
      master_class_action_statuses: $master_class_action_statuses
      master_class_action_name: $master_class_action_name
      master_class_action_code: $master_class_action_code
      start_date_from: $start_date_from
      start_date_to: $start_date_to
      scheduled_start_time: $scheduled_start_time
      scheduled_end_time: $scheduled_end_time
      end_date_from: $end_date_from
      end_date_to: $end_date_to
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
      master_class_actions {
        master_class_action {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          screener_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        pending_master_class_action_history {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          content_version
          update_counter
          content_type
          update_status
          update_type
          child_content_histories {
            child_content_history_id
            child_content_type
          }
          publish_data {
            created_by
            updated_by
            row_crc
            sub_domain_ids
            content_version
            update_counter
            published
            active
            master_class_action_id
            master_class_session_id
            master_class_id
            master_class_action_name
            master_class_action_code
            alias_name
            master_class_action_descriptions {
              client_type
              description
            }
            master_class_action_image_urls {
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
            master_class_action_video_urls {
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
            master_class_action_document_urls {
              document_url_id
              name
              web_description
              mobile_description
              document_type
              duration
              url
              is_mobile
            }
            master_class_action_type
            master_class_action_status
            duration
            intervention_id
            screener_id
            speaker_ids
            host_ids
            start_time
            end_time
            scheduled_start_time
            scheduled_end_time
            raw_video_url
            livestream_password
            recorded_video_url {
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
            meeting_url
            sort_order
            previous_scheduled_actions {
              scheduled_ts
              reason
            }
          }
          reviewer_comment
          reviewed_by
          approver_comment
          approved_by
          data {
            created_by
            updated_by
            row_crc
            sub_domain_ids
            content_version
            update_counter
            published
            active
            master_class_action_id
            master_class_session_id
            master_class_id
            master_class_action_name
            master_class_action_code
            alias_name
            master_class_action_descriptions {
              client_type
              description
            }
            master_class_action_image_urls {
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
            master_class_action_video_urls {
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
            master_class_action_document_urls {
              document_url_id
              name
              web_description
              mobile_description
              document_type
              duration
              url
              is_mobile
            }
            master_class_action_type
            master_class_action_status
            duration
            intervention_id
            screener_id
            speaker_ids
            host_ids
            start_time
            end_time
            scheduled_start_time
            scheduled_end_time
            raw_video_url
            livestream_password
            recorded_video_url {
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
            meeting_url
            sort_order
            previous_scheduled_actions {
              scheduled_ts
              reason
            }
          }
          updated_data {
            master_class_action_id
            master_class_session_id
            master_class_id
            master_class_action_code
            sub_domain_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            intervention_id
            screener_id
            master_class_action_name
            master_class_action_type
            master_class_action_status
            alias_name
            master_class_action_descriptions {
              update_items {
                update_type
                index
                update_data {
                  client_type
                  description
                }
              }
            }
            master_class_action_image_urls {
              update_items {
                update_type
                index
                update_data {
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
              }
            }
            master_class_action_video_urls {
              update_items {
                update_type
                index
                update_data {
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
              }
            }
            master_class_action_document_urls {
              update_items {
                update_type
                index
                update_data {
                  document_url_id
                  name
                  web_description
                  mobile_description
                  document_type
                  duration
                  url
                  is_mobile
                }
              }
            }
            sort_order
            duration
            speaker_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            host_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            start_time
            end_time
            scheduled_start_time
            scheduled_end_time
            raw_video_url
            recorded_video_url {
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
            meeting_url
            previous_scheduled_actions {
              update_items {
                update_type
                index
                update_data {
                  scheduled_ts
                  reason
                }
              }
            }
            content_version
            update_counter
            active
            row_crc
          }
          master_class_action_history_id
          master_class_action_id
          master_class_session_id
        }
      }
    }
  }
`;

export const CREATE_MASTER_CLASS_ACTION_GQL = gql`
  mutation createMasterClassAction(
    $create_request: CreateMasterClassActionRequest!
  ) {
    createMasterClassAction(create_request: $create_request) {
      status
      error
      message
      version
      service
      master_class_action {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_action_id
        master_class_session_id
        master_class_id
        master_class_action_name
        master_class_action_code
        alias_name
        master_class_action_descriptions {
          client_type
          description
        }
        master_class_action_image_urls {
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
        master_class_action_video_urls {
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
        master_class_action_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        master_class_action_type
        master_class_action_status
        duration
        intervention_id
        screener_id
        speaker_ids
        host_ids
        start_time
        end_time
        scheduled_start_time
        scheduled_end_time
        raw_video_url
        livestream_password
        recorded_video_url {
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
        meeting_url
        sort_order
        previous_scheduled_actions {
          scheduled_ts
          reason
        }
      }
      master_class_action_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          screener_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          screener_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        updated_data {
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          intervention_id
          screener_id
          master_class_action_name
          master_class_action_type
          master_class_action_status
          alias_name
          master_class_action_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_action_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                web_description
                mobile_description
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          sort_order
          duration
          speaker_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          host_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          recorded_video_url {
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
          meeting_url
          previous_scheduled_actions {
            update_items {
              update_type
              index
              update_data {
                scheduled_ts
                reason
              }
            }
          }
          published
          content_version
          update_counter
          active
          row_crc
        }
        master_class_action_history_id
        master_class_action_id
        master_class_session_id
      }
    }
  }
`;

export const UPDATE_MASTER_CLASS_ACTION_GQL = gql`
  mutation updateMasterClassAction(
    $update_request: UpdateMasterClassActionRequest!
  ) {
    updateMasterClassAction(update_request: $update_request) {
      status
      error
      message
      version
      service
      master_class_action {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_action_id
        master_class_session_id
        master_class_id
        master_class_action_name
        master_class_action_code
        alias_name
        master_class_action_descriptions {
          client_type
          description
        }
        master_class_action_image_urls {
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
        master_class_action_video_urls {
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
        master_class_action_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        master_class_action_type
        master_class_action_status
        duration
        intervention_id
        screener_id
        speaker_ids
        host_ids
        start_time
        end_time
        scheduled_start_time
        scheduled_end_time
        raw_video_url
        livestream_password
        recorded_video_url {
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
        meeting_url
        sort_order
        previous_scheduled_actions {
          scheduled_ts
          reason
        }
      }
      master_class_action_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          screener_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          screener_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        updated_data {
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          intervention_id
          screener_id
          master_class_action_name
          master_class_action_type
          master_class_action_status
          alias_name
          master_class_action_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_action_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                web_description
                mobile_description
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          sort_order
          duration
          speaker_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          host_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          recorded_video_url {
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
          meeting_url
          previous_scheduled_actions {
            update_items {
              update_type
              index
              update_data {
                scheduled_ts
                reason
              }
            }
          }
          published
          content_version
          update_counter
          active
          row_crc
        }
        master_class_action_history_id
        master_class_action_id
        master_class_session_id
      }
    }
  }
`;

export const ACTIVATE_MASTER_CLASS_GQL = gql`
  mutation activateMasterClass($active_request: ActivateMasterClassRequest!) {
    activateMasterClass(active_request: $active_request) {
      status
      error
      message
      version
      service
      master_class {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_id
        alias_name
        master_class_code
        master_class_name
        master_class_descriptions {
          client_type
          description
        }
        master_class_image_urls {
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
        master_class_video_urls {
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
        master_class_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_meta {
          type
          key
          value
          image_urls {
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
        }
        category_ids
        master_class_status
        tag_ids
        sort_order
      }
    }
  }
`;
export const APPROVE_MASTER_CLASS_GQL = gql`
  mutation approveMasterClass(
    $approve_request: ApproveContentRequest!
    $master_class_history_id: String!
  ) {
    approveMasterClass(
      approve_request: $approve_request
      master_class_history_id: $master_class_history_id
    ) {
      status
      error
      message
      version
      service
      master_class {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_id
        alias_name
        master_class_code
        master_class_name
        master_class_descriptions {
          client_type
          description
        }
        master_class_image_urls {
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
        master_class_video_urls {
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
        master_class_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_meta {
          type
          key
          value
          image_urls {
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
        }
        category_ids
        master_class_status
        tag_ids
        sort_order
      }
      master_class_history {
        created_by
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        updated_data {
          master_class_name
          alias_name
          master_class_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_meta {
            update_items {
              update_type
              index
              update_data {
                type
                key
                value
                image_urls {
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
              }
            }
          }
          master_class_status
          tag_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          active
          published
          content_version
          update_counter
          sort_order
        }
        master_class_history_id
        master_class_id
      }
    }
  }
`;
export const REVIEW_MASTER_CLASS_GQL = gql`
  mutation reviewMasterClass(
    $review_request: ReviewContentRequest!
    $master_class_history_id: String!
  ) {
    reviewMasterClass(
      review_request: $review_request
      master_class_history_id: $master_class_history_id
    ) {
      status
      error
      message
      version
      service
      master_class {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_id
        alias_name
        master_class_code
        master_class_name
        master_class_descriptions {
          client_type
          description
        }
        master_class_image_urls {
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
        master_class_video_urls {
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
        master_class_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_meta {
          type
          key
          value
          image_urls {
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
        }
        category_ids
        master_class_status
        tag_ids
        sort_order
      }
      master_class_history {
        created_by
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        updated_data {
          master_class_name
          alias_name
          master_class_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          master_class_meta {
            update_items {
              update_type
              index
              update_data {
                type
                key
                value
                image_urls {
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
              }
            }
          }
          master_class_status
          tag_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          active
          published
          content_version
          update_counter
          sort_order
        }
        master_class_history_id
        master_class_id
      }
    }
  }
`;
export const RESCHEDULE_MASTER_CLASS_ACTION_GQL = gql`
  mutation RescheduleMasterClassAction(
    $update_request: UpdateMasterClassActionRequest!
  ) {
    RescheduleMasterClassAction(update_request: $update_request) {
      status
      error
      message
      version
      service
      master_class_action {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_action_id
        master_class_session_id
        master_class_id
        master_class_action_name
        master_class_action_code
        alias_name
        master_class_action_descriptions {
          client_type
          description
        }
        master_class_action_image_urls {
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
        master_class_action_video_urls {
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
        master_class_action_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_action_type
        master_class_action_status
        duration
        intervention_id
        speaker_ids
        host_ids
        start_time
        end_time
        scheduled_start_time
        scheduled_end_time
        raw_video_url
        livestream_password
        recorded_video_url {
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
        meeting_url
        sort_order
        previous_scheduled_actions {
          scheduled_ts
          reason
        }
      }
      master_class_action_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        updated_data {
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          intervention_id
          master_class_action_name
          master_class_action_type
          master_class_action_status
          alias_name
          master_class_action_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_action_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          sort_order
          duration
          speaker_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          host_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          recorded_video_url {
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
          meeting_url
          previous_scheduled_actions {
            update_items {
              update_type
              index
              update_data {
                scheduled_ts
                reason
              }
            }
          }
          published
          content_version
          update_counter
          active
          row_crc
        }
        master_class_action_history_id
        master_class_action_id
        master_class_session_id
      }
    }
  }
`;

export const CANCEL_MASTER_CLASS_ACTION_GQL = gql`
  mutation CancelMasterClassAction(
    $update_request: UpdateMasterClassActionRequest!
  ) {
    CancelMasterClassAction(update_request: $update_request) {
      status
      error
      message
      version
      service
      master_class_action {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        master_class_action_id
        master_class_session_id
        master_class_id
        master_class_action_name
        master_class_action_code
        alias_name
        master_class_action_descriptions {
          client_type
          description
        }
        master_class_action_image_urls {
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
        master_class_action_video_urls {
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
        master_class_action_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        master_class_action_type
        master_class_action_status
        duration
        intervention_id
        speaker_ids
        host_ids
        start_time
        end_time
        scheduled_start_time
        scheduled_end_time
        raw_video_url
        livestream_password
        recorded_video_url {
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
        meeting_url
        sort_order
        previous_scheduled_actions {
          scheduled_ts
          reason
        }
      }
      master_class_action_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        content_version
        update_counter
        content_type
        update_status
        update_type
        child_content_histories {
          child_content_history_id
          child_content_type
        }
        publish_data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
        updated_data {
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          intervention_id
          master_class_action_name
          master_class_action_type
          master_class_action_status
          alias_name
          master_class_action_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          master_class_action_image_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_video_urls {
            update_items {
              update_type
              index
              update_data {
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
            }
          }
          master_class_action_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                duration
                url
                is_mobile
              }
            }
          }
          sort_order
          duration
          speaker_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          host_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          recorded_video_url {
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
          meeting_url
          previous_scheduled_actions {
            update_items {
              update_type
              index
              update_data {
                scheduled_ts
                reason
              }
            }
          }
          published
          content_version
          update_counter
          active
          row_crc
        }
        master_class_action_history_id
        master_class_action_id
        master_class_session_id
      }
    }
  }
`;

export const GET_MASTER_CLASS_ACTION_INFO_GQL = gql`
  query getMasterClassActionInfo(
    $master_class_id: String
    $master_class_action_id: String
    $master_class_session_id: String
    $intervention_id: String
    $screener_id: String
    $master_class_ids: [String!]
    $master_class_session_ids: [String!]
    $master_class_action_ids: [String!]
    $host_ids: [String!]
    $speaker_ids: [String!]
    $category_ids: [String!]
    $master_class_action_type: MasterClassActionType
    $master_class_action_status: MasterClassActionStatus
    $master_class_action_statuses: [MasterClassActionStatus!]
    $master_class_action_name: String
    $master_class_action_code: String
    $start_date_from: DateTime
    $start_date_to: DateTime
    $scheduled_start_time: DateTime
    $scheduled_end_time: DateTime
    $end_date_from: DateTime
    $end_date_to: DateTime
    $published: Boolean
    $is_featured: Boolean
    $is_pilot: Boolean
    $is_live: Boolean
    $platform_content_mode_tag: PlatformContentModeTag
    $platform_content_mode_formats: [PlatformContentModeFormat!]
    $related_content_types: [ContentType!]
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $master_class_session_title: String
    $master_class_name: String
    $master_class_code: String
    $master_class_status: MasterClassStatus
    $show_cancelled_actions: Boolean
  ) {
    getMasterClassActionInfo(
      master_class_id: $master_class_id
      master_class_action_id: $master_class_action_id
      master_class_session_id: $master_class_session_id
      intervention_id: $intervention_id
      screener_id: $screener_id
      master_class_ids: $master_class_ids
      master_class_session_ids: $master_class_session_ids
      master_class_action_ids: $master_class_action_ids
      host_ids: $host_ids
      speaker_ids: $speaker_ids
      category_ids: $category_ids
      master_class_action_type: $master_class_action_type
      master_class_action_status: $master_class_action_status
      master_class_action_statuses: $master_class_action_statuses
      master_class_action_name: $master_class_action_name
      master_class_action_code: $master_class_action_code
      start_date_from: $start_date_from
      start_date_to: $start_date_to
      scheduled_start_time: $scheduled_start_time
      scheduled_end_time: $scheduled_end_time
      end_date_from: $end_date_from
      end_date_to: $end_date_to
      published: $published
      is_featured: $is_featured
      is_pilot: $is_pilot
      is_live: $is_live
      platform_content_mode_tag: $platform_content_mode_tag
      platform_content_mode_formats: $platform_content_mode_formats
      related_content_types: $related_content_types
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      master_class_session_title: $master_class_session_title
      master_class_name: $master_class_name
      master_class_code: $master_class_code
      master_class_status: $master_class_status
      show_cancelled_actions: $show_cancelled_actions
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
      master_class_infos {
        master_class {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_id
          alias_name
          master_class_code
          master_class_name
          master_class_descriptions {
            client_type
            description
          }
          master_class_image_urls {
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
          master_class_video_urls {
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
          master_class_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_meta {
            type
            key
            value
            image_urls {
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
          }
          category_ids
          master_class_status
          tag_ids
          sort_order
        }
        master_class_session {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_session_id
          master_class_id
          master_class_session_title
          alias_name
          master_class_session_code
          master_class_session_descriptions {
            client_type
            description
          }
          master_class_session_image_urls {
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
          master_class_session_video_urls {
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
          master_class_session_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_session_meta {
            type
            key
            value
            image_urls {
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
          }
          master_class_session_status
          sort_order
        }
        master_class_action {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          master_class_action_id
          master_class_session_id
          master_class_id
          master_class_action_name
          master_class_action_code
          alias_name
          master_class_action_descriptions {
            client_type
            description
          }
          master_class_action_image_urls {
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
          master_class_action_video_urls {
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
          master_class_action_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          master_class_action_type
          master_class_action_status
          duration
          intervention_id
          screener_id
          speaker_ids
          host_ids
          start_time
          end_time
          scheduled_start_time
          scheduled_end_time
          raw_video_url
          livestream_password
          recorded_video_url {
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
          meeting_url
          sort_order
          previous_scheduled_actions {
            scheduled_ts
            reason
          }
        }
      }
    }
  }
`;
