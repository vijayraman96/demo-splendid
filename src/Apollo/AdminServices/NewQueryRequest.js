import { gql } from "@apollo/client";
import { serviceResponse } from "./DefaultResponse";
export const GET_PLAN_LIST_GQL = gql`
  query getPlanList(
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
    $plan_id: String
    $plan_type: PlanType
    $plan_ids: [String!]
    $plan_name: String
    $sub_domain_ids: [String!]
    $category_ids: [String!]
    $plan_code: String
    $alias_name: String
    $auto_start: Boolean
  ) {
    getPlanList(
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
      plan_id: $plan_id
      plan_type: $plan_type
      plan_ids: $plan_ids
      plan_name: $plan_name
      sub_domain_ids: $sub_domain_ids
      category_ids: $category_ids
      plan_code: $plan_code
      alias_name: $alias_name
      auto_start: $auto_start
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
      plans {
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
        pending_plan_history {
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
  }
`;

export const GET_PLAN_GQL = gql`
  query getPlan($plan_id: String!) {
    getPlan(plan_id: $plan_id) {
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
    }
  }
`;

export const GET_PLAN_GROUP_LIST_GQL = gql`
  query getPlanGroupList(
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
    $plan_id: String
    $category_ids: [String!]
    $plan_group_ids: [String!]
    $plan_group_id: String
    $plan_group_name: String
    $plan_group_code: String
    $plan_group_type: PlanGroupType
  ) {
    getPlanGroupList(
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
      plan_id: $plan_id
      category_ids: $category_ids
      plan_group_ids: $plan_group_ids
      plan_group_id: $plan_group_id
      plan_group_name: $plan_group_name
      plan_group_code: $plan_group_code
      plan_group_type: $plan_group_type
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
      plan_groups {
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
        pending_plan_group_history {
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
  }
`;

export const GET_PLAN_ACTION_GQL = gql`
  query getPlanAction($plan_action_id: String!) {
    getPlanAction(plan_action_id: $plan_action_id) {
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
          duration
          url
          is_mobile
        }
        plan_action_video_urls {
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
    }
  }
`;

export const GET_PLAN_ACTION_LIST_GQL = gql`
  query getPlanActionList(
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
    $plan_id: String
    $plan_action_id: String
    $plan_action_ids: [String!]
    $plan_group_id: String
    $plan_action_type: PlanActionType
    $intervention_id: String
    $screener_id: String
    $therapy_id: String
    $action_plan_id: String
    $sort_order: Float
    $plan_action_code: String
    $plan_action_name: String
  ) {
    getPlanActionList(
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
      plan_id: $plan_id
      plan_action_id: $plan_action_id
      plan_action_ids: $plan_action_ids
      plan_group_id: $plan_group_id
      plan_action_type: $plan_action_type
      intervention_id: $intervention_id
      screener_id: $screener_id
      therapy_id: $therapy_id
      action_plan_id: $action_plan_id
      sort_order: $sort_order
      plan_action_code: $plan_action_code
      plan_action_name: $plan_action_name
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
      plan_actions {
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
            duration
            url
            is_mobile
          }
          plan_action_video_urls {
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
        pending_plan_action_history {
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
              duration
              url
              is_mobile
            }
            plan_action_video_urls {
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
              duration
              url
              is_mobile
            }
            plan_action_video_urls {
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
                  duration
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
  }
`;
