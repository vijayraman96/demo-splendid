import { gql } from "@apollo/client";
export const CREATE_PLAN_GQL = gql`
  mutation createPlan($create_request: CreatePlanRequest!) {
    createPlan(create_request: $create_request) {
      status
      error
      message
      version
      service
      plan {
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
        plan_id
        plan_code
        alias_name
        category_ids
        plan_name
        plan_type
        plan_descriptions {
          client_type
          description
        }
        plan_image_urls {
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
        plan_video_urls {
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
        plan_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        plan_meta {
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
        auto_start
      }
      plan_history {
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
          plan_id
          plan_code
          alias_name
          category_ids
          plan_name
          plan_type
          plan_descriptions {
            client_type
            description
          }
          plan_image_urls {
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
          plan_video_urls {
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
          plan_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          plan_meta {
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
          auto_start
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          plan_id
          plan_code
          alias_name
          category_ids
          plan_name
          plan_type
          plan_descriptions {
            client_type
            description
          }
          plan_image_urls {
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
          plan_video_urls {
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
          plan_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          plan_meta {
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
          auto_start
        }
        updated_data {
          plan_name
          plan_code
          alias_name
          plan_type
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          plan_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          plan_image_urls {
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
          plan_video_urls {
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
          plan_document_urls {
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
          plan_meta {
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
          auto_start
          active
        }
        plan_history_id
        plan_id
      }
    }
  }
`;

export const UPDATE_PLAN_GQL = gql`
  mutation updatePlan($update_request: UpdatePlanRequest!) {
    updatePlan(update_request: $update_request) {
      status
      error
      message
      version
      service
      plan {
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
        plan_id
        plan_code
        alias_name
        category_ids
        plan_name
        plan_type
        plan_descriptions {
          client_type
          description
        }
        plan_image_urls {
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
        plan_video_urls {
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
        plan_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        plan_meta {
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
        auto_start
      }
      plan_history {
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
          plan_id
          plan_code
          alias_name
          category_ids
          plan_name
          plan_type
          plan_descriptions {
            client_type
            description
          }
          plan_image_urls {
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
          plan_video_urls {
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
          plan_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          plan_meta {
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
          auto_start
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          plan_id
          plan_code
          alias_name
          category_ids
          plan_name
          plan_type
          plan_descriptions {
            client_type
            description
          }
          plan_image_urls {
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
          plan_video_urls {
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
          plan_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          plan_meta {
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
          auto_start
        }
        updated_data {
          plan_name
          plan_code
          alias_name
          plan_type
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          plan_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          plan_image_urls {
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
          plan_video_urls {
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
          plan_document_urls {
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
          plan_meta {
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
          auto_start
          active
        }
        plan_history_id
        plan_id
      }
    }
  }
`;

export const CREATE_PLAN_GROUP_GQL = gql`
  mutation createPlanGroup($create_request: CreatePlanGroupRequest!) {
    createPlanGroup(create_request: $create_request) {
      status
      error
      message
      version
      service
      plan_group {
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
        plan_group_id
        plan_id
        plan_group_type
        plan_group_code
        plan_group_name
        sort_order
        category_ids
        plan_group_descriptions {
          client_type
          description
        }
        plan_group_image_urls {
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
        plan_group_video_urls {
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
        plan_group_meta {
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
        min_completion_days
        max_completion_days
        start_interval_seconds
        plan_group_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        mandatory
        auto_generate
      }
      plan_group_history {
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
          plan_group_id
          plan_id
          plan_group_type
          plan_group_code
          plan_group_name
          sort_order
          category_ids
          plan_group_descriptions {
            client_type
            description
          }
          plan_group_image_urls {
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
          plan_group_video_urls {
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
          plan_group_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          plan_group_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          mandatory
          auto_generate
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          plan_group_id
          plan_id
          plan_group_type
          plan_group_code
          plan_group_name
          sort_order
          category_ids
          plan_group_descriptions {
            client_type
            description
          }
          plan_group_image_urls {
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
          plan_group_video_urls {
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
          plan_group_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          plan_group_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          mandatory
          auto_generate
        }
        updated_data {
          plan_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          plan_group_name
          plan_group_code
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          plan_group_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          plan_group_image_urls {
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
          plan_group_video_urls {
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
          sort_order
          min_completion_days
          max_completion_days
          start_interval_seconds
          mandatory
          auto_generate
          plan_group_meta {
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
        }
        plan_group_history_id
        plan_group_id
        plan_id
      }
    }
  }
`;

export const UPDATE_PLAN_GROUP_GQL = gql`
  mutation updatePlanGroup($update_request: UpdatePlanGroupRequest!) {
    updatePlanGroup(update_request: $update_request) {
      status
      error
      message
      version
      service
      plan_group {
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
        plan_group_id
        plan_id
        plan_group_type
        plan_group_code
        plan_group_name
        sort_order
        category_ids
        plan_group_descriptions {
          client_type
          description
        }
        plan_group_image_urls {
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
        plan_group_video_urls {
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
        plan_group_meta {
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
        min_completion_days
        max_completion_days
        start_interval_seconds
        plan_group_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        mandatory
        auto_generate
      }
      plan_group_history {
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
          plan_group_id
          plan_id
          plan_group_type
          plan_group_code
          plan_group_name
          sort_order
          category_ids
          plan_group_descriptions {
            client_type
            description
          }
          plan_group_image_urls {
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
          plan_group_video_urls {
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
          plan_group_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          plan_group_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          mandatory
          auto_generate
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          plan_group_id
          plan_id
          plan_group_type
          plan_group_code
          plan_group_name
          sort_order
          category_ids
          plan_group_descriptions {
            client_type
            description
          }
          plan_group_image_urls {
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
          plan_group_video_urls {
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
          plan_group_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          plan_group_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          mandatory
          auto_generate
        }
        updated_data {
          plan_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          plan_group_name
          plan_group_code
          category_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          plan_group_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          plan_group_image_urls {
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
          plan_group_video_urls {
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
          sort_order
          min_completion_days
          max_completion_days
          start_interval_seconds
          mandatory
          auto_generate
          plan_group_meta {
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
        }
        plan_group_history_id
        plan_group_id
        plan_id
      }
    }
  }
`;

export const CREATE_PLAN_ACTION_GQL = gql`
  mutation createPlanAction($create_request: CreatePlanActionRequest!) {
    createPlanAction(create_request: $create_request) {
      status
      error
      message
      version
      service
      plan_action {
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
        plan_action_id
        plan_id
        plan_group_id
        plan_action_code
        plan_action_type
        intervention_id
        therapy_id
        action_plan_id
        screener_id
        template_id
        sort_order
        plan_action_name
        plan_action_descriptions {
          client_type
          description
        }
        plan_action_image_urls {
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
        plan_action_document_urls {
          document_url_id
          name
          document_type
          url
          is_mobile
        }
        plan_action_video_urls {
          video_type
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
        plan_action_meta {
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
        min_completion_days
        max_completion_days
        start_interval_seconds
        mandatory
        action_time_seconds
      }
      plan_action_history {
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
          plan_action_id
          plan_id
          plan_group_id
          plan_action_code
          plan_action_type
          intervention_id
          therapy_id
          action_plan_id
          screener_id
          template_id
          sort_order
          plan_action_name
          plan_action_descriptions {
            client_type
            description
          }
          plan_action_image_urls {
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
          plan_action_document_urls {
            document_url_id
            name
            document_type
            url
            is_mobile
          }
          plan_action_video_urls {
            video_type
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
          plan_action_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          mandatory
          action_time_seconds
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          plan_action_id
          plan_id
          plan_group_id
          plan_action_code
          plan_action_type
          intervention_id
          therapy_id
          action_plan_id
          screener_id
          template_id
          sort_order
          plan_action_name
          plan_action_descriptions {
            client_type
            description
          }
          plan_action_image_urls {
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
          plan_action_document_urls {
            document_url_id
            name
            document_type
            url
            is_mobile
          }
          plan_action_video_urls {
            video_type
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
          plan_action_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          mandatory
          action_time_seconds
        }
        updated_data {
          plan_id
          plan_group_id
          plan_action_type
          intervention_id
          screener_id
          template_id
          therapy_id
          action_plan_id
          sort_order
          plan_action_code
          plan_action_name
          min_completion_days
          max_completion_days
          start_interval_seconds
          action_time_seconds
          mandatory
          plan_action_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          plan_action_image_urls {
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
          plan_action_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                url
                is_mobile
              }
            }
          }
          plan_action_video_urls {
            update_items {
              update_type
              index
              update_data {
                video_type
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
          published
          content_version
          update_counter
          active
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
        }
        plan_action_history_id
        plan_action_id
        plan_group_id
      }
    }
  }
`;

export const UPDATE_PLAN_ACTION_GQL = gql`
  mutation updatePlanAction($update_request: UpdatePlanActionRequest!) {
    updatePlanAction(update_request: $update_request) {
      status
      error
      message
      version
      service
      plan_action {
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
        plan_action_id
        plan_id
        plan_group_id
        plan_action_code
        plan_action_type
        intervention_id
        therapy_id
        action_plan_id
        screener_id
        template_id
        sort_order
        plan_action_name
        plan_action_descriptions {
          client_type
          description
        }
        plan_action_image_urls {
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
        plan_action_document_urls {
          document_url_id
          name
          document_type
          url
          is_mobile
        }
        plan_action_video_urls {
          video_type
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
        plan_action_meta {
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
        min_completion_days
        max_completion_days
        start_interval_seconds
        mandatory
        action_time_seconds
      }
      plan_action_history {
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
          plan_action_id
          plan_id
          plan_group_id
          plan_action_code
          plan_action_type
          intervention_id
          therapy_id
          action_plan_id
          screener_id
          template_id
          sort_order
          plan_action_name
          plan_action_descriptions {
            client_type
            description
          }
          plan_action_image_urls {
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
          plan_action_document_urls {
            document_url_id
            name
            document_type
            url
            is_mobile
          }
          plan_action_video_urls {
            video_type
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
          plan_action_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          mandatory
          action_time_seconds
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_by
          updated_by
          row_crc
          sub_domain_ids
          content_version
          update_counter
          published
          active
          plan_action_id
          plan_id
          plan_group_id
          plan_action_code
          plan_action_type
          intervention_id
          therapy_id
          action_plan_id
          screener_id
          template_id
          sort_order
          plan_action_name
          plan_action_descriptions {
            client_type
            description
          }
          plan_action_image_urls {
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
          plan_action_document_urls {
            document_url_id
            name
            document_type
            url
            is_mobile
          }
          plan_action_video_urls {
            video_type
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
          plan_action_meta {
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
          min_completion_days
          max_completion_days
          start_interval_seconds
          mandatory
          action_time_seconds
        }
        updated_data {
          plan_id
          plan_group_id
          plan_action_type
          intervention_id
          screener_id
          template_id
          therapy_id
          action_plan_id
          sort_order
          plan_action_code
          plan_action_name
          min_completion_days
          max_completion_days
          start_interval_seconds
          action_time_seconds
          mandatory
          plan_action_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          plan_action_image_urls {
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
          plan_action_document_urls {
            update_items {
              update_type
              index
              update_data {
                document_url_id
                name
                document_type
                url
                is_mobile
              }
            }
          }
          plan_action_video_urls {
            update_items {
              update_type
              index
              update_data {
                video_type
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
          published
          content_version
          update_counter
          active
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
        }
        plan_action_history_id
        plan_action_id
        plan_group_id
      }
    }
  }
`;

export const REMOVE_PLAN_GROUP_GQL = gql`
  mutation removePlanGroup($plan_group_id: String!) {
    removePlanGroup(plan_group_id: $plan_group_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REMOVE_PLAN_ACTION_GQL = gql`
  mutation removePlanAction($plan_action_id: String!) {
    removePlanAction(plan_action_id: $plan_action_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const APPROVE_PLAN_GQL = gql`
  mutation approvePlan(
    $approve_request: ApproveContentRequest!
    $plan_history_id: String!
  ) {
    approvePlan(
      approve_request: $approve_request
      plan_history_id: $plan_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const ACTIVATE_PLAN_GQL = gql`
  mutation activatePlan($active_request: ActivatePlanRequest!) {
    activatePlan(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REVIEW_PLAN_GQL = gql`
  mutation reviewPlan(
    $review_request: ReviewContentRequest!
    $plan_history_id: String!
  ) {
    reviewPlan(
      review_request: $review_request
      plan_history_id: $plan_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;
