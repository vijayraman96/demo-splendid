import { gql } from "@apollo/client";
import { userResponse } from "../ProfileService/profileResponse";
import { serviceResponse } from "./DefaultResponse";
export const CREATE_ADMIN_USER_GQL = gql`
mutation createAdminUser ($create_req: CreateAdminRequest!) {
    createAdminUser (create_req: $create_req) {
        ${serviceResponse}
        user {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          user_id
          user_types
          user_name
          first_name
          last_name
          gender
          dob
          personal_email
          personal_email_verified
          mobile_number
          mobile_number_verified
          email
          active_organization_id
          address {
              line_1
              line_2
              region
              town_city
              postcode
              state_id
              country_id
          }
          profile_image_urls {
              
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
          alternate_email
          education_id
          country_id
          city_id
          industry_id
          function_id
          time_zone_id
          function
          education
          industry
          city
          marital_status
          work_experience_years
          pilot_consent
          fgd_consent
          screener_consent
          active
      }
      admin_profile {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          user_id
          password
          email
          email_verified
          time_format
          date_format
          device_id
          pn_token
        }
        roles {
            created_at
            created_by
            updated_at
            updated_by
            admin_role_id
            user_id
            sub_domain_id
            role_type
            active
        }
    }
}`;

export const CREATE_CONTENT_USER_GQL = gql`
mutation createContentUser ($create_req: CreateAdminRequest!) {
    createContentUser (create_req: $create_req) {
        ${serviceResponse}
        user {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_id
        user_types
        user_name
        first_name
        last_name
        gender
        dob
        personal_email
        personal_email_verified
        mobile_number
        mobile_number_verified
        email
        active_organization_id
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        profile_image_urls {
          
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
        alternate_email
        education_id
        country_id
        city_id
        industry_id
        function_id
        time_zone_id
        function
        education
        industry
        city
        marital_status
        work_experience_years
        pilot_consent
        fgd_consent
        screener_consent
        active
      }
      employee_profile {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_id
        email
        email_verified
        password
        time_format
        date_format
        device_id
        pn_token
        employee_profile_status
        designation
        }
        roles {
            created_at
            created_by
            updated_at
            updated_by
            admin_role_id
            user_id
            sub_domain_id
            role_type
            active
        }
    }
}`;

export const ADD_ADMIN_ROLE_GQL = gql`
mutation addRoleToAdmin ($add_req: AddRoleToAdminRequest!) {
    addRoleToAdmin (add_req: $add_req) {
        ${serviceResponse}
        user {
        created_by
        updated_by
        row_crc
        user_id
        user_types
        user_name
        first_name
        last_name
        gender
        dob
        personal_email
        personal_email_verified
        mobile_number
        mobile_number_verified
        email
        active_organization_id
        address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        profile_image_urls {
          
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
        alternate_email
        education_id
        country_id
        city_id
        industry_id
        function_id
        time_zone_id
        function
        education
        industry
        city
        marital_status
        work_experience_years
        pilot_consent
        fgd_consent
        screener_consent
        active
      }
      admin_profile {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_id
        password
        email
        email_verified
        time_format
        date_format
        device_id
        pn_token
        }
        roles {
            created_at
            created_by
            updated_at
            updated_by
            admin_role_id
            user_id
            sub_domain_id
            role_type
            active
        }
    }
}`;

export const REMOVE_ADMIN_ROLE_GQL = gql`
  mutation removeAdminRole($admin_role_id: String!) {
    removeAdminRole(admin_role_id: $admin_role_id) {
      ${serviceResponse}
    }
  }
`;

export const CREATE_DOMAIN_GQL = gql`
  mutation CreateDomain($create_request: CreateDomainRequest!) {
    CreateDomain(create_request: $create_request) {
      status
      error
      message
      version
      service
      domain {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        domain_id
        domain_name
        alias_name
        sort_order
        domain_description {
          client_type
          description
        }
        domain_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;

export const UPDATE_DOMAIN_GQL = gql`
  mutation updateDomain($update_request: UpdateDomainRequest!) {
    updateDomain(update_request: $update_request) {
      status
      error
      message
      version
      service
      domain {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        domain_id
        domain_name
        alias_name
        sort_order
        domain_description {
          client_type
          description
        }
        domain_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;

export const ACTIVATE_DOMAIN_GQL = gql`
  mutation activateDomain($active_request: ActivateDomainRequest!) {
    activateDomain(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;

export const CREATE_SUB_DOMAIN_GQL = gql`
  mutation CreateSubDomain($create_request: CreateSubDomainRequest!) {
    CreateSubDomain(create_request: $create_request) {
      status
      error
      message
      version
      service
      sub_domain {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_id
        domain_id
        sub_domain_name
        alias_name
        sort_order
        result_sort_order
        sub_domain_description {
          client_type
          description
        }
        sub_domain_image_urls {
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
        sub_domain_document_urls {
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        visibility_status
        sub_domain_code
        sub_domain_meta {
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
        active
      }
    }
  }
`;

export const UPDATE_SUB_DOMAIN_GQL = gql`
  mutation updateSubDomain($update_request: UpdateSubDomainRequest!) {
    updateSubDomain(update_request: $update_request) {
      status
      error
      message
      version
      service
      sub_domain {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_id
        domain_id
        sub_domain_name
        alias_name
        sort_order
        result_sort_order
        sub_domain_description {
          client_type
          description
        }
        sub_domain_image_urls {
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
        sub_domain_document_urls {
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        visibility_status
        sub_domain_code
        sub_domain_meta {
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
        active
      }
    }
  }
`;

export const ACTIVATE_SUBDOMAIN_GQL = gql`
  mutation activateSubDomain($active_request: ActivateSubDomainRequest!) {
    activateSubDomain(active_request: $active_request) {
      status
      error
      message
      version
      service
      sub_domain {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        sub_domain_id
        domain_id
        sub_domain_name
        alias_name
        sort_order
        sub_domain_description {
          client_type
          description
        }
        sub_domain_image_urls {
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
        visibility_status
        sub_domain_code
        sub_domain_meta {
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
        active
      }
    }
  }
`;

export const CREATE_AUTHOR_GQL = gql`
  mutation AddAuthor($addReq: CreateAuthorRequest!) {
    AddAuthor(addReq: $addReq) {
      status
      error
      message
      version
      service
      author {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        author_id
        author_name
        author_code
        author_description {
          client_type
          description
        }
        author_image_urls {
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
        author_social_urls {
          provider
          link
        }
        active
      }
    }
  }
`;

export const UPDATE_AUTHOR_GQL = gql`
  mutation updateAuthor($update_request: UpdateAuthorRequest!) {
    updateAuthor(update_request: $update_request) {
      status
      error
      message
      version
      service
      author {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        author_id
        author_name
        author_code
        author_description {
          client_type
          description
        }
        author_image_urls {
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
        author_social_urls {
          provider
          link
        }
        active
      }
    }
  }
`;

export const CREATE_TOPIC_GQL = gql`
  mutation createScreenerTopic($create_request: CreateScreenerTopicRequest!) {
    createScreenerTopic(create_request: $create_request) {
      status
      error
      message
      version
      service
      screener_topic {
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
        screener_topic_id
        screener_id
        screener_topic_code
        domain_id
        screener_topic_aggregate_type
        screener_result_calculation_type
        screener_topic_title
        screener_topic_descriptions {
          client_type
          description
        }
        screener_topic_image_urls {
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
        sort_order
        render_topic
      }
      screener_topic_history {
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
          screener_topic_id
          screener_id
          screener_topic_code
          domain_id
          screener_topic_aggregate_type
          screener_result_calculation_type
          screener_topic_title
          screener_topic_descriptions {
            client_type
            description
          }
          screener_topic_image_urls {
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
          sort_order
          render_topic
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
          screener_topic_id
          screener_id
          screener_topic_code
          domain_id
          screener_topic_aggregate_type
          screener_result_calculation_type
          screener_topic_title
          screener_topic_descriptions {
            client_type
            description
          }
          screener_topic_image_urls {
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
          sort_order
          render_topic
        }
        updated_data {
          screener_id
          domain_id
          screener_topic_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_result_calculation_type
          screener_topic_aggregate_type {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_topic_title
          screener_topic_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_topic_image_urls {
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
          sort_order
          render_topic
          content_version
          update_counter
          published
          active
        }
        screener_topic_id
        screener_topic_history_id
        screener_id
      }
    }
  }
`;

export const UPDATE_TOPIC_GQL = gql`
  mutation updateScreenerTopic($update_request: UpdateScreenerTopicRequest!) {
    updateScreenerTopic(update_request: $update_request) {
      status
      error
      message
      version
      service
      screener_topic {
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
        screener_topic_id
        screener_id
        screener_topic_code
        domain_id
        screener_topic_aggregate_type
        screener_result_calculation_type
        screener_topic_title
        screener_topic_descriptions {
          client_type
          description
        }
        screener_topic_image_urls {
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
        sort_order
        render_topic
      }
      screener_topic_history {
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
          screener_topic_id
          screener_id
          screener_topic_code
          domain_id
          screener_topic_aggregate_type
          screener_result_calculation_type
          screener_topic_title
          screener_topic_descriptions {
            client_type
            description
          }
          screener_topic_image_urls {
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
          sort_order
          render_topic
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
          screener_topic_id
          screener_id
          screener_topic_code
          domain_id
          screener_topic_aggregate_type
          screener_result_calculation_type
          screener_topic_title
          screener_topic_descriptions {
            client_type
            description
          }
          screener_topic_image_urls {
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
          sort_order
          render_topic
        }
        updated_data {
          screener_id
          domain_id
          screener_topic_code
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_result_calculation_type
          screener_topic_aggregate_type {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_topic_title
          screener_topic_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_topic_image_urls {
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
          sort_order
          render_topic
          content_version
          update_counter
          published
          active
        }
        screener_topic_id
        screener_topic_history_id
        screener_id
      }
    }
  }
`;

export const CREATE_SCREENER = gql`
  mutation createScreener($create_request: CreateScreenerRequest!) {
    createScreener(create_request: $create_request) {
      status
      error
      message
      version
      service
      screener {
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
        screener_id
        screener_code
        intervention_id
        template_id
        screener_type
        alias_name
        screener_name
        screener_description {
          client_type
          description
        }
        screener_image_urls {
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
        screener_video_urls {
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
        screener_meta {
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
        screener_time
        sort_type
        screener_format
      }
      screener_history {
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
          screener_id
          screener_code
          intervention_id
          template_id
          screener_type
          alias_name
          screener_name
          screener_description {
            client_type
            description
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
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
          screener_time
          sort_type
          screener_format
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
          screener_id
          screener_code
          intervention_id
          template_id
          screener_type
          alias_name
          screener_name
          screener_description {
            client_type
            description
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
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
          screener_time
          sort_type
          screener_format
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_type
          screener_name
          alias_name
          screener_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
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
                image_urls_update {
                  update_items {
                    update_type
                    index
                  }
                }
              }
            }
          }
          screener_time
          screener_code
          sort_type
          screener_format
          intervention_id
          template_id
        }
        screener_id
        screener_history_id
      }
    }
  }
`;

export const UPDATE_SCREENER = gql`
  mutation updateScreener($update_request: UpdateScreenerRequest!) {
    updateScreener(update_request: $update_request) {
      status
      error
      message
      version
      service
      screener {
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
        screener_id
        screener_code
        intervention_id
        template_id
        screener_type
        alias_name
        screener_name
        screener_description {
          client_type
          description
        }
        screener_image_urls {
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
        screener_video_urls {
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
        screener_meta {
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
        screener_time
        sort_type
        screener_format
      }
      screener_history {
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
          screener_id
          screener_code
          intervention_id
          template_id
          screener_type
          alias_name
          screener_name
          screener_description {
            client_type
            description
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
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
          screener_time
          sort_type
          screener_format
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
          screener_id
          screener_code
          intervention_id
          template_id
          screener_type
          alias_name
          screener_name
          screener_description {
            client_type
            description
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
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
          screener_time
          sort_type
          screener_format
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_type
          screener_name
          alias_name
          screener_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
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
                image_urls_update {
                  update_items {
                    update_type
                    index
                  }
                }
              }
            }
          }
          screener_time
          screener_code
          sort_type
          screener_format
          intervention_id
          template_id
        }
        screener_id
        screener_history_id
      }
    }
  }
`;
export const CREATE_SCREENER_QUESTIONAIRE_GQL = gql`
  mutation createScreenerQuestion(
    $create_request: CreateScreenerQuestionRequest!
  ) {
    createScreenerQuestion(create_request: $create_request) {
      status
      error
      message
      version
      service
      screener_question {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_question_id
        sub_domain_id
        screener_topic_id
        screener_question_title
        screener_question_descriptions {
          client_type
          description
        }
        screener_question_image_urls {
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
        screener_question_type
        mandatory
        sort_order
        screener_id
        default_option_name
        option_type
        options {
          option_type
          options {
            data
            value
            flag
          }
          start_value
          end_value
          step
        }
        result_weightage
        ignore_for_scoring
      }
      screener_question_history {
        created_at
        created_by
        updated_at
        updated_by
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
        }
        updated_data {
          screener_topic_id
          screener_id
          sub_domain_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_question_title
          screener_question_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_question_image_urls {
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
          screener_question_type
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
            options_update {
              update_items {
                update_type
                index
                update_data {
                  data
                  value
                  flag
                }
              }
            }
          }
          default_option_name
          result_weightage
          mandatory
          sort_order
          ignore_for_scoring
          published
          content_version
          update_counter
          active
        }
        screener_question_id
        screener_question_history_id
        screener_topic_id
      }
    }
  }
`;

export const UPDATE_SCREENER_QUESTIONAIRE_GQL = gql`
  mutation updateScreenerQuestion(
    $update_request: UpdateScreenerQuestionRequest!
  ) {
    updateScreenerQuestion(update_request: $update_request) {
      status
      error
      message
      version
      service
      screener_question {
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
        screener_question_id
        sub_domain_id
        screener_topic_id
        screener_question_title
        screener_question_descriptions {
          client_type
          description
        }
        screener_question_image_urls {
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
        screener_question_type
        mandatory
        sort_order
        screener_id
        default_option_name
        option_type
        options {
          option_type
          options {
            data
            value
            flag
          }
          start_value
          end_value
          step
        }
        result_weightage
        ignore_for_scoring
      }
      screener_question_history {
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
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
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
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
        }
        updated_data {
          screener_topic_id
          screener_id
          sub_domain_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_question_title
          screener_question_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_question_image_urls {
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
          screener_question_type
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
            options_update {
              update_items {
                update_type
                index
                update_data {
                  data
                  value
                  flag
                }
              }
            }
          }
          default_option_name
          result_weightage
          mandatory
          sort_order
          ignore_for_scoring
          published
          content_version
          update_counter
          active
        }
        screener_question_id
        screener_question_history_id
        screener_topic_id
      }
    }
  }
`;
export const UPDATE_SCREENER_QUESTIONAIRE_SORT_ORDER_GQL = gql`
  mutation updateScreenerQuestionSortOrder(
    $sort_order_request: UpdateScreenerQuestionSortOrderRequest!
  ) {
    updateScreenerQuestionSortOrder(sort_order_request: $sort_order_request) {
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
      screener_questions {
        screener_question {
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
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
        }
        pending_screener_question_history {
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
            screener_question_id
            sub_domain_id
            screener_topic_id
            screener_question_title
            screener_question_descriptions {
              client_type
              description
            }
            screener_question_image_urls {
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
            screener_question_type
            mandatory
            sort_order
            screener_id
            default_option_name
            option_type
            options {
              option_type
              start_value
              end_value
              step
            }
            result_weightage
            ignore_for_scoring
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
            screener_question_id
            sub_domain_id
            screener_topic_id
            screener_question_title
            screener_question_descriptions {
              client_type
              description
            }
            screener_question_image_urls {
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
            screener_question_type
            mandatory
            sort_order
            screener_id
            default_option_name
            option_type
            options {
              option_type
              start_value
              end_value
              step
            }
            result_weightage
            ignore_for_scoring
          }
          updated_data {
            screener_topic_id
            screener_id
            sub_domain_id
            sub_domain_ids {
              update_items {
                update_type
                index
                update_data
              }
              IsValid
              MergeData
            }
            screener_question_title
            screener_question_descriptions {
              update_items {
                update_type
                index
                update_data {
                  client_type
                  description
                }
              }
            }
            screener_question_image_urls {
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
            screener_question_type
            option_type
            options {
              option_type
              start_value
              end_value
              step
              options_update {
                update_items {
                  update_type
                  index
                  update_data {
                    data
                    value
                    flag
                  }
                }
              }
            }
            default_option_name
            result_weightage
            mandatory
            sort_order
            ignore_for_scoring
            published
            content_version
            update_counter
            active
          }
          screener_question_id
          screener_question_history_id
          screener_topic_id
        }
      }
    }
  }
`;
export const CREATE_SCREENER_RESULT_RANGE_GQL = gql`
  mutation createScreenerResultRange(
    $create_request: CreateScreenerResultRangeRequest!
  ) {
    createScreenerResultRange(create_request: $create_request) {
      status
      error
      message
      version
      service
      screener_result_range {
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
        screener_result_range_id
        screener_id
        screener_result_range_entity_type
        game_name_key
        entity_ref_id
        screener_result_range_name
        screener_result_range_type_name
        screener_result_range_min
        screener_result_range_max
        screener_result_range_color
        screener_result_range_meta {
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
        screener_result_range_descriptions {
          client_type
          description
        }
        screener_result_range_image_urls {
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
        screener_result_range_report_description
      }
      screener_result_range_history {
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
          screener_result_range_id
          screener_id
          screener_result_range_entity_type
          game_name_key
          entity_ref_id
          screener_result_range_name
          screener_result_range_type_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
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
          screener_result_range_descriptions {
            client_type
            description
          }
          screener_result_range_image_urls {
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
          screener_result_range_report_description
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
          screener_result_range_id
          screener_id
          screener_result_range_entity_type
          game_name_key
          entity_ref_id
          screener_result_range_name
          screener_result_range_type_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
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
          screener_result_range_descriptions {
            client_type
            description
          }
          screener_result_range_image_urls {
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
          screener_result_range_report_description
        }
        updated_data {
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_result_range_entity_type
          game_name_key
          entity_ref_id
          screener_result_range_type_name
          screener_result_range_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
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
                image_urls_update {
                  update_items {
                    update_type
                    index
                  }
                }
              }
            }
          }
          screener_result_range_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_result_range_report_description
          screener_result_range_image_urls {
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
          content_version
          update_counter
          published
          active
        }
        screener_result_range_id
        screener_result_range_history_id
        screener_id
      }
    }
  }
`;

export const UPDATE_SCREENER_RESULT_RANGE_GQL = gql`
  mutation updateScreenerResultRange(
    $update_request: UpdateScreenerResultRangeRequest!
  ) {
    updateScreenerResultRange(update_request: $update_request) {
      status
      error
      message
      version
      service
      screener_result_range {
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
        screener_result_range_id
        screener_id
        screener_result_range_entity_type
        game_name_key
        entity_ref_id
        screener_result_range_name
        screener_result_range_type_name
        screener_result_range_min
        screener_result_range_max
        screener_result_range_color
        screener_result_range_meta {
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
        screener_result_range_descriptions {
          client_type
          description
        }
        screener_result_range_image_urls {
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
        screener_result_range_report_description
      }
      screener_result_range_history {
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
          screener_result_range_id
          screener_id
          screener_result_range_entity_type
          game_name_key
          entity_ref_id
          screener_result_range_name
          screener_result_range_type_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
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
          screener_result_range_descriptions {
            client_type
            description
          }
          screener_result_range_image_urls {
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
          screener_result_range_report_description
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
          screener_result_range_id
          screener_id
          screener_result_range_entity_type
          game_name_key
          entity_ref_id
          screener_result_range_name
          screener_result_range_type_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
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
          screener_result_range_descriptions {
            client_type
            description
          }
          screener_result_range_image_urls {
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
          screener_result_range_report_description
        }
        updated_data {
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_result_range_entity_type
          game_name_key
          entity_ref_id
          screener_result_range_type_name
          screener_result_range_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
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
                image_urls_update {
                  update_items {
                    update_type
                    index
                  }
                }
              }
            }
          }
          screener_result_range_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          screener_result_range_report_description
          screener_result_range_image_urls {
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
          content_version
          update_counter
          published
          active
        }
        screener_result_range_id
        screener_result_range_history_id
        screener_id
      }
    }
  }
`;

export const REMOVE_SCREENER_RESULT_RANGE_GQL = gql`
  mutation removeScreenerResultRange($screener_result_range_id: String!) {
    removeScreenerResultRange(
      screener_result_range_id: $screener_result_range_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const APPROVE_SCREENER_RESULT_RANGE_GQL = gql`
  mutation approveScreenerResultRange(
    $approve_request: ApproveContentRequest!
    $screener_result_range_history_id: String!
  ) {
    approveScreenerResultRange(
      approve_request: $approve_request
      screener_result_range_history_id: $screener_result_range_history_id
    ) {
      status
      error
      message
      version
      service
      screener_result_range {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_result_range_id
        screener_id
        screener_result_range_entity_type
        entity_ref_id
        screener_result_range_name
        screener_result_range_min
        screener_result_range_max
        screener_result_range_color
        screener_result_range_meta {
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
        screener_result_range_descriptions {
          client_type
          description
        }
        screener_result_range_image_urls {
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
        screener_result_range_report_descriptions {
          client_type
          description
        }
      }
      screener_result_range_history {
        created_at
        created_by
        updated_at
        updated_by
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
          created_at
          created_by
          updated_at
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_result_range_id
          screener_id
          screener_result_range_entity_type
          entity_ref_id
          screener_result_range_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_result_range_descriptions {
            client_type
            description
          }
          screener_result_range_image_urls {
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
          screener_result_range_report_descriptions {
            client_type
            description
          }
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_at
          created_by
          updated_at
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_result_range_id
          screener_id
          screener_result_range_entity_type
          entity_ref_id
          screener_result_range_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_result_range_descriptions {
            client_type
            description
          }
          screener_result_range_image_urls {
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
          screener_result_range_report_descriptions {
            client_type
            description
          }
        }
        updated_data {
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_result_range_entity_type
          entity_ref_id
          screener_result_range_name
          screener_result_range_min
          screener_result_range_max
          screener_result_range_color
          screener_result_range_meta {
            update_items {
              update_type
              index
            }
          }
          screener_result_range_descriptions {
            update_items {
              update_type
              index
            }
          }
          screener_result_range_report_descriptions {
            update_items {
              update_type
              index
            }
          }
          screener_result_range_image_urls {
            update_items {
              update_type
              index
            }
          }
          content_version
          update_counter
          published
          active
        }
        screener_result_range_id
        screener_result_range_history_id
        screener_id
      }
    }
  }
`;

export const REVIEW_SCREENER_RESULT_RANGE_GQL = gql`
  mutation reviewScreenerResultRange(
    $review_request: ReviewContentRequest!
    $screener_result_range_history_id: String!
  ) {
    reviewScreenerResultRange(
      review_request: $review_request
      screener_result_range_history_id: $screener_result_range_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const CREATE_SCREENER_THRESHOLD_GQL = gql`
  mutation createScreenerThreshold(
    $create_request: CreateScreenerThresholdRequest!
  ) {
    createScreenerThreshold(create_request: $create_request) {
      status
      error
      message
      version
      service
      screener_threshold {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_threshold_id
        screener_id
        screener_threshold_entity_type
        entity_ref_id
        min_threshold
        screener_threshold_meta {
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
        screener_threshold_descriptions {
          client_type
          description
        }
      }
      screener_threshold_history {
        created_at
        created_by
        updated_at
        updated_by
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_threshold_id
          screener_id
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_threshold_descriptions {
            client_type
            description
          }
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_threshold_id
          screener_id
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_threshold_descriptions {
            client_type
            description
          }
        }
        updated_data {
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
            update_items {
              update_type
              index
            }
          }
          screener_threshold_descriptions {
            update_items {
              update_type
              index
            }
          }
          content_version
          update_counter
          published
          active
        }
        screener_threshold_id
        screener_threshold_history_id
        screener_id
      }
    }
  }
`;

export const UPDATE_SCREENER_THRESHOLD_GQL = gql`
  mutation updateScreenerThreshold(
    $update_request: UpdateScreenerThresholdRequest!
  ) {
    updateScreenerThreshold(update_request: $update_request) {
      status
      error
      message
      version
      service
      screener_threshold {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_threshold_id
        screener_id
        screener_threshold_entity_type
        entity_ref_id
        min_threshold
        screener_threshold_meta {
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
        screener_threshold_descriptions {
          client_type
          description
        }
      }
      screener_threshold_history {
        created_at
        created_by
        updated_at
        updated_by
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_threshold_id
          screener_id
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
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
          screener_threshold_descriptions {
            client_type
            description
          }
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_threshold_id
          screener_id
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
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
          screener_threshold_descriptions {
            client_type
            description
          }
        }
        updated_data {
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
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
                image_urls_update {
                  update_items {
                    update_type
                    index
                  }
                }
              }
            }
          }
          screener_threshold_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          content_version
          update_counter
          published
          active
        }
        screener_threshold_id
        screener_threshold_history_id
        screener_id
      }
    }
  }
`;

export const REMOVE_SCREENER_THRESHOLD_GQL = gql`
  mutation removeScreenerThreshold($screener_threshold_id: String!) {
    removeScreenerThreshold(screener_threshold_id: $screener_threshold_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const APPROVE_SCREENER_THRESHOLD_GQL = gql`
  mutation approveScreenerThreshold(
    $approve_request: ApproveContentRequest!
    $screener_threshold_history_id: String!
  ) {
    approveScreenerThreshold(
      approve_request: $approve_request
      screener_threshold_history_id: $screener_threshold_history_id
    ) {
      status
      error
      message
      version
      service
      screener_threshold {
        created_by
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_threshold_id
        screener_id
        screener_threshold_entity_type
        entity_ref_id
        min_threshold
        screener_threshold_meta {
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
        screener_threshold_descriptions {
          client_type
          description
        }
      }
      screener_threshold_history {
        created_at
        created_by
        updated_at
        updated_by
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
          created_at
          created_by
          updated_at
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_threshold_id
          screener_id
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_threshold_descriptions {
            client_type
            description
          }
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_at
          created_by
          updated_at
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_threshold_id
          screener_id
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_threshold_descriptions {
            client_type
            description
          }
        }
        updated_data {
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_threshold_entity_type
          entity_ref_id
          min_threshold
          screener_threshold_meta {
            update_items {
              update_type
              index
            }
          }
          screener_threshold_descriptions {
            update_items {
              update_type
              index
            }
          }
          content_version
          update_counter
          published
          active
        }
        screener_threshold_id
        screener_threshold_history_id
        screener_id
      }
    }
  }
`;

export const REVIEW_SCREENER_THRESHOLD_GQL = gql`
  mutation reviewScreenerThreshold(
    $review_request: ReviewContentRequest!
    $screener_threshold_history_id: String!
  ) {
    reviewScreenerThreshold(
      review_request: $review_request
      screener_threshold_history_id: $screener_threshold_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;
export const ADD_CALCULATION_GQL = gql`
  mutation AddScoringDetails($scoring_details_req: ScoringDetailsRequest!) {
    AddScoringDetails(scoring_details_req: $scoring_details_req) {
      status
      error
      message
      version
      service
      screener {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_id
        intervention_id
        screener_type
        screener_entity_result_range {
          range_entity_type
          entity_ref_id
          range_name
          range_min
          range_max
          range_color
          range_descriptions {
            client_type
            description
          }
          range_image_urls {
            image_type
            url
            is_mobile
          }
        }
        screener_entity_threshold {
          range_entity_type
          entity_ref_id
          min_threshold
        }
        screener_name
        screener_description {
          client_type
          description
        }
        screener_image_urls {
          image_type
          url
          is_mobile
        }
        screener_meta {
          type
          key
          value
          image_urls {
            image_type
            url
            is_mobile
          }
        }
        screener_time
        sort_type
        screener_format
      }
    }
  }
`;
export const REVIEW_QUESTIONAIRE_GQL = gql`
  mutation reviewScreenerQuestion(
    $review_request: ReviewContentRequest!
    $screener_question_history_id: String!
  ) {
    reviewScreenerQuestion(
      review_request: $review_request
      screener_question_history_id: $screener_question_history_id
    ) {
      status
      error
      message
      version
      service
      screener_question {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        published
        active
        screener_question_id
        screener_question_title
        screener_question_image_urls {
          image_type
          url
        }
        mandatory
        sort_order
        screener_topic_id
        data_type
        option_type
        options {
          option_type
          options {
            data
            value
            flag
          }
          start_value
          end_value
          step
        }
        result_weightage
      }
      screener_question_history {
        created_at
        created_by
        updated_at
        updated_by
        content_version
        content_type
        update_status
        update_type
        data {
          sub_domain_ids
          content_version
          published
          active
          screener_question_id
          screener_question_title
          screener_question_image_urls {
            image_type
            url
          }
          mandatory
          sort_order
          screener_topic_id
          data_type
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
        }
        reviewer_comments
        reviewed_by
        reviewed_at
        approver_comments
        approved_by
        approved_at
        screener_question_id
        screener_question_history_id
      }
    }
  }
`;

export const APPROVE_QUESTIONAIRE_GQL = gql`
  mutation approveScreenerQuestion(
    $approve_request: ApproveContentRequest!
    $screener_question_history_id: String!
  ) {
    approveScreenerQuestion(
      approve_request: $approve_request
      screener_question_history_id: $screener_question_history_id
    ) {
      status
      error
      message
      version
      service
      screener_question {
        created_at
        created_by
        updated_at
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_question_id
        sub_domain_id
        screener_topic_id
        screener_question_title
        screener_question_descriptions {
          client_type
          description
        }
        screener_question_image_urls {
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
        screener_question_type
        mandatory
        sort_order
        screener_id
        default_option_name
        option_type
        options {
          option_type
          options {
            data
            value
            flag
          }
          start_value
          end_value
          step
        }
        result_weightage
        ignore_for_scoring
      }
      screener_question_history {
        created_at
        created_by
        updated_at
        updated_by
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
          created_at
          created_by
          updated_at
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
        data {
          created_at
          created_by
          updated_at
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_question_id
          sub_domain_id
          screener_topic_id
          screener_question_title
          screener_question_descriptions {
            client_type
            description
          }
          screener_question_image_urls {
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
          screener_question_type
          mandatory
          sort_order
          screener_id
          default_option_name
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          result_weightage
          ignore_for_scoring
        }
        updated_data {
          screener_topic_id
          screener_id
          sub_domain_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_question_title
          screener_question_descriptions {
            update_items {
              update_type
              index
            }
          }
          screener_question_image_urls {
            update_items {
              update_type
              index
            }
          }
          screener_question_type
          option_type
          options {
            option_type
            options {
              data
              value
              flag
            }
            start_value
            end_value
            step
          }
          default_option_name
          result_weightage
          mandatory
          sort_order
          ignore_for_scoring
          published
          content_version
          update_counter
          active
        }
        screener_question_id
        screener_question_history_id
        screener_topic_id
      }
    }
  }
`;

export const CREATE_TAG_GQL = gql`
  mutation createInterventionTag(
    $create_request: CreateInterventionTagRequest!
  ) {
    createInterventionTag(create_request: $create_request) {
      status
      error
      message
      version
      service
      intervention_tag {
        created_at
        created_by
        updated_at
        updated_by
        intervention_tag_id
        sub_domain_id
        sort_order
        intervention_tag_title
        intervention_tag_description {
          client_type
          description
        }
        intervention_tag_image_urls {
          image_type
          url
          is_mobile
        }
        published
        active
      }
    }
  }
`;

export const UPDATE_TAG_GQL = gql`
  mutation updateInterventionTag(
    $update_request: UpdateInterventionTagRequest!
  ) {
    updateInterventionTag(update_request: $update_request) {
      status
      error
      message
      version
      service
      intervention_tag {
        created_at
        created_by
        updated_at
        updated_by
        intervention_tag_id
        sub_domain_id
        sort_order
        intervention_tag_title
        intervention_tag_description {
          client_type
          description
        }
        intervention_tag_image_urls {
          image_type
          url
          is_mobile
        }
        published
        active
      }
    }
  }
`;

export const ACTIVATE_TAG_GQL = gql`
  mutation activateInterventionTag(
    $active_request: ActivateInterventionTagRequest!
  ) {
    activateInterventionTag(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;

export const CREATE_INTERVENTION_GQL = gql`
  mutation createIntervention($create_request: CreateInterventionRequest!) {
    createIntervention(create_request: $create_request) {
      status
      error
      message
      version
      service
      intervention {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        intervention_id
        category_ids
        intervention_name
        alias_name
        intervention_code
        intervention_description {
          client_type
          description
        }
        intervention_image_urls {
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
        intervention_video_urls {
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
        intervention_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        intervention_formats
        activity_type
        intervention_duration
        days_per_week
        intervention_data_url
        intervention_meta_datas {
          meta_data_type
          meta_data_title
          meta_data_value
          meta_data_image_urls {
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
      intervention_history {
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
          intervention_id
          category_ids
          intervention_name
          alias_name
          intervention_code
          intervention_description {
            client_type
            description
          }
          intervention_image_urls {
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
          intervention_video_urls {
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
          intervention_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          intervention_formats
          activity_type
          intervention_duration
          days_per_week
          intervention_data_url
          intervention_meta_datas {
            meta_data_type
            meta_data_title
            meta_data_value
            meta_data_image_urls {
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
          intervention_id
          category_ids
          intervention_name
          alias_name
          intervention_code
          intervention_description {
            client_type
            description
          }
          intervention_image_urls {
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
          intervention_video_urls {
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
          intervention_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          intervention_formats
          activity_type
          intervention_duration
          days_per_week
          intervention_data_url
          intervention_meta_datas {
            meta_data_type
            meta_data_title
            meta_data_value
            meta_data_image_urls {
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
        updated_data {
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
          intervention_name
          intervention_code
          alias_name
          intervention_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          intervention_document_urls {
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
          intervention_image_urls {
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
          intervention_video_urls {
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
          intervention_meta_datas {
            update_items {
              update_type
              index
              update_data {
                meta_data_type
                meta_data_title
                meta_data_value
                meta_data_image_urls {
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
          intervention_formats {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          activity_type
          intervention_duration
          days_per_week
          intervention_data_url
          game_view_id
          is_featured
          active
        }
        intervention_history_id
        intervention_id
      }
    }
  }
`;

export const UPDATE_INTERVENTION_GQL = gql`
  mutation updateIntervention($update_request: UpdateInterventionRequest!) {
    updateIntervention(update_request: $update_request) {
      status
      error
      message
      version
      service
      intervention {
        created_at
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        intervention_id
        category_ids
        intervention_name
        alias_name
        intervention_code
        intervention_description {
          client_type
          description
        }
        intervention_image_urls {
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
        intervention_video_urls {
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
        intervention_document_urls {
          document_url_id
          name
          web_description
          mobile_description
          document_type
          duration
          url
          is_mobile
        }
        intervention_formats
        activity_type
        intervention_duration
        days_per_week
        intervention_data_url
        intervention_meta_datas {
          meta_data_type
          meta_data_title
          meta_data_value
          meta_data_image_urls {
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
      intervention_history {
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
          intervention_id
          category_ids
          intervention_name
          alias_name
          intervention_code
          intervention_description {
            client_type
            description
          }
          intervention_image_urls {
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
          intervention_video_urls {
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
          intervention_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          intervention_formats
          activity_type
          intervention_duration
          days_per_week
          intervention_data_url
          intervention_meta_datas {
            meta_data_type
            meta_data_title
            meta_data_value
            meta_data_image_urls {
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
          intervention_id
          category_ids
          intervention_name
          alias_name
          intervention_code
          intervention_description {
            client_type
            description
          }
          intervention_image_urls {
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
          intervention_video_urls {
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
          intervention_document_urls {
            document_url_id
            name
            web_description
            mobile_description
            document_type
            duration
            url
            is_mobile
          }
          intervention_formats
          activity_type
          intervention_duration
          days_per_week
          intervention_data_url
          intervention_meta_datas {
            meta_data_type
            meta_data_title
            meta_data_value
            meta_data_image_urls {
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
        updated_data {
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
          intervention_name
          intervention_code
          alias_name
          intervention_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          intervention_document_urls {
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
          intervention_image_urls {
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
          intervention_video_urls {
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
          intervention_meta_datas {
            update_items {
              update_type
              index
              update_data {
                meta_data_type
                meta_data_title
                meta_data_value
                meta_data_image_urls {
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
          intervention_formats {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          activity_type
          intervention_duration
          days_per_week
          intervention_data_url
          game_view_id
          is_featured
          active
        }
        intervention_history_id
        intervention_id
      }
    }
  }
`;

export const APPROVE_INTERVENTION_GQL = gql`
  mutation approveIntervention(
    $approve_request: ApproveContentRequest!
    $intervention_history_id: String!
  ) {
    approveIntervention(
      approve_request: $approve_request
      intervention_history_id: $intervention_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REVIEW_INTERVENTION_GQL = gql`
  mutation reviewIntervention(
    $review_request: ReviewContentRequest!
    $intervention_history_id: String!
  ) {
    reviewIntervention(
      review_request: $review_request
      intervention_history_id: $intervention_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const ACTIVATE_INTERVENTION_GQL = gql`
  mutation activateIntervention($active_request: ActivateInterventionRequest!) {
    activateIntervention(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REVIEW_SCREENER_GQL = gql`
  mutation reviewScreener(
    $review_request: ReviewContentRequest!
    $screener_history_id: String!
  ) {
    reviewScreener(
      review_request: $review_request
      screener_history_id: $screener_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const APPROVE_SCREENER_GQL = gql`
  mutation approveScreener(
    $approve_request: ApproveContentRequest!
    $screener_history_id: String!
  ) {
    approveScreener(
      approve_request: $approve_request
      screener_history_id: $screener_history_id
    ) {
      status
      error
      message
      version
      service
      screener {
        created_by
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_id
        screener_code
        intervention_id
        screener_type
        screener_name
        screener_description {
          client_type
          description
        }
        screener_image_urls {
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
        screener_video_urls {
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
        screener_meta {
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
        screener_time
        sort_type
        screener_format
      }
      screener_history {
        created_by
        updated_by
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
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_id
          screener_code
          intervention_id
          screener_type
          screener_name
          screener_description {
            client_type
            description
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_time
          sort_type
          screener_format
        }
        reviewer_comment
        reviewed_by
        approver_comment
        approved_by
        data {
          created_by
          updated_by
          sub_domain_ids
          content_version
          update_counter
          published
          active
          screener_id
          screener_code
          intervention_id
          screener_type
          screener_name
          screener_description {
            client_type
            description
          }
          screener_image_urls {
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
          screener_video_urls {
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
          screener_meta {
            type
            key
            value
            image_urls {
              image_type
              url
              is_mobile
            }
          }
          screener_time
          sort_type
          screener_format
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          screener_type
          screener_name
          screener_description {
            update_items {
              update_type
              index
            }
          }
          screener_image_urls {
            update_items {
              update_type
              index
            }
          }
          screener_video_urls {
            update_items {
              update_type
              index
            }
          }
          screener_meta {
            update_items {
              update_type
              index
            }
          }
          screener_time
          screener_code
          sort_type
          screener_format
          intervention_id
        }
        screener_id
        screener_history_id
      }
    }
  }
`;

export const ACTIVE_SCREENER_GQL = gql`
  mutation activateScreener($active_request: ActivateScreenerRequest!) {
    activateScreener(active_request: $active_request) {
      status
      error
      message
      version
      service
      screener {
        created_by
        updated_by
        sub_domain_ids
        content_version
        update_counter
        published
        active
        screener_id
        screener_code
        intervention_id
        screener_type
        screener_name
        screener_description {
          client_type
          description
        }
        screener_image_urls {
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
        screener_video_urls {
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
        screener_meta {
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
        screener_time
        sort_type
        screener_format
      }
    }
  }
`;

export const REMOVE_TOPIC_GQL = gql`
  mutation removeScreenerTopic($screener_topic_id: String!) {
    removeScreenerTopic(screener_topic_id: $screener_topic_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REMOVE_QUESTION_GQL = gql`
  mutation removeScreenerQuestion($screener_question_id: String!) {
    removeScreenerQuestion(screener_question_id: $screener_question_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const CREATE_EXPLAINER_GQL = gql`
  mutation createExplainer($create_request: CreateExplainerRequest!) {
    createExplainer(create_request: $create_request) {
      status
      error
      message
      version
      service
      explainer {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        explainer_id
        explainer_name
        explainer_code
        explainer_description {
          client_type
          description
        }
        explainer_image_urls {
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
        explainer_video_urls {
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
        published
        active
      }
    }
  }
`;

export const UPDATE_EXPLAINER_GQL = gql`
  mutation updateExplainer($update_request: UpdateExplainerRequest!) {
    updateExplainer(update_request: $update_request) {
      status
      error
      message
      version
      service
      explainer {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        explainer_id
        explainer_name
        explainer_code
        explainer_description {
          client_type
          description
        }
        explainer_image_urls {
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
        explainer_video_urls {
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
        published
        active
      }
    }
  }
`;
export const ACTIVE_STORY_GQL = gql`
  mutation activateStory($active_request: ActivateStoryRequest!) {
    activateStory(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;
export const CREATE_BLOG_GQL = gql`
  mutation createBlog($create_request: CreateBlogRequest!) {
    createBlog(create_request: $create_request) {
      status
      error
      message
      version
      service
      blog {
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
        blog_id
        blog_code
        intervention_ids
        category_ids
        author_ids
        read_duration
        blog_name
        alias_name
        blog_type
        sort_order
        blog_descriptions {
          client_type
          description
        }
        blog_contents
        blog_image_urls {
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
        blog_video_urls {
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
        blog_meta {
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
        blog_url
      }
      blog_history {
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
          blog_id
          blog_code
          intervention_ids
          category_ids
          author_ids
          read_duration
          blog_name
          alias_name
          blog_type
          sort_order
          blog_descriptions {
            client_type
            description
          }
          blog_contents
          blog_image_urls {
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
          blog_video_urls {
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
          blog_meta {
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
          blog_url
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
          blog_id
          blog_code
          intervention_ids
          category_ids
          author_ids
          read_duration
          blog_name
          alias_name
          blog_type
          sort_order
          blog_descriptions {
            client_type
            description
          }
          blog_contents
          blog_image_urls {
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
          blog_video_urls {
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
          blog_meta {
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
          blog_url
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          blog_name
          blog_code
          sort_order
          alias_name
          blog_type
          blog_contents
          blog_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          blog_image_urls {
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
          blog_video_urls {
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
          intervention_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
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
          author_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          blog_meta {
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
          read_duration
          blog_url
          active
        }
        blog_id
        blog_history_id
      }
    }
  }
`;

export const UPDATE_BLOG_GQL = gql`
  mutation updateBlog($update_request: UpdateBlogRequest!) {
    updateBlog(update_request: $update_request) {
      status
      error
      message
      version
      service
      blog {
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
        blog_id
        blog_code
        intervention_ids
        category_ids
        author_ids
        read_duration
        blog_name
        alias_name
        blog_type
        sort_order
        blog_descriptions {
          client_type
          description
        }
        blog_contents
        blog_image_urls {
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
        blog_video_urls {
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
        blog_meta {
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
        blog_url
      }
      blog_history {
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
          blog_id
          blog_code
          intervention_ids
          category_ids
          author_ids
          read_duration
          blog_name
          alias_name
          blog_type
          sort_order
          blog_descriptions {
            client_type
            description
          }
          blog_contents
          blog_image_urls {
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
          blog_video_urls {
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
          blog_meta {
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
          blog_url
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
          blog_id
          blog_code
          intervention_ids
          category_ids
          author_ids
          read_duration
          blog_name
          alias_name
          blog_type
          sort_order
          blog_descriptions {
            client_type
            description
          }
          blog_contents
          blog_image_urls {
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
          blog_video_urls {
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
          blog_meta {
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
          blog_url
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          blog_name
          blog_code
          sort_order
          alias_name
          blog_type
          blog_contents
          blog_descriptions {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          blog_image_urls {
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
          blog_video_urls {
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
          intervention_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
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
          author_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          blog_meta {
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
          read_duration
          blog_url
          active
        }
        blog_id
        blog_history_id
      }
    }
  }
`;

export const APPROVE_BLOG_GQL = gql`
  mutation approveBlog(
    $approve_request: ApproveContentRequest!
    $blog_history_id: String!
  ) {
    approveBlog(
      approve_request: $approve_request
      blog_history_id: $blog_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const ACTIVE_BLOG_GQL = gql`
  mutation activateBlog($active_request: ActivateBlogRequest!) {
    activateBlog(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REVIEW_BLOG_GQL = gql`
  mutation reviewBlog(
    $review_request: ReviewContentRequest!
    $blog_history_id: String!
  ) {
    reviewBlog(
      review_request: $review_request
      blog_history_id: $blog_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const CREATE_THERAPY_GQL = gql`
  mutation createTherapy($create_request: CreateTherapyRequest!) {
    createTherapy(create_request: $create_request) {
      status
      error
      message
      version
      service
      therapy {
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
        therapy_id
        screener_id
        alias_name
        therapy_code
        screener_result_range_min
        screener_result_range_max
        therapy_name
        therapy_description {
          client_type
          description
        }
        therapy_image_urls {
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
        therapy_video_urls {
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
        therapy_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        therapy_meta {
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
        total_duration
        time_per_module
        days_per_week
      }
      therapy_history {
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
          therapy_id
          screener_id
          alias_name
          therapy_code
          screener_result_range_min
          screener_result_range_max
          therapy_name
          therapy_description {
            client_type
            description
          }
          therapy_image_urls {
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
          therapy_video_urls {
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
          therapy_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_meta {
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
          total_duration
          time_per_module
          days_per_week
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
          therapy_id
          screener_id
          alias_name
          therapy_code
          screener_result_range_min
          screener_result_range_max
          therapy_name
          therapy_description {
            client_type
            description
          }
          therapy_image_urls {
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
          therapy_video_urls {
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
          therapy_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_meta {
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
          total_duration
          time_per_module
          days_per_week
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          therapy_name
          therapy_code
          screener_id
          alias_name
          screener_result_range_min
          screener_result_range_max
          therapy_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          therapy_image_urls {
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
          therapy_video_urls {
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
          therapy_document_urls {
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
          therapy_meta {
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
          total_duration
          time_per_module
          days_per_week
          is_featured
          published
          content_version
          update_counter
          active
        }
        therapy_history_id
        therapy_id
      }
    }
  }
`;

export const UPDATE_THERAPY_GQL = gql`
  mutation updateTherapy($update_request: UpdateTherapyRequest!) {
    updateTherapy(update_request: $update_request) {
      status
      error
      message
      version
      service
      therapy {
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
        therapy_id
        screener_id
        alias_name
        therapy_code
        screener_result_range_min
        screener_result_range_max
        therapy_name
        therapy_description {
          client_type
          description
        }
        therapy_image_urls {
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
        therapy_video_urls {
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
        therapy_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        therapy_meta {
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
        total_duration
        time_per_module
        days_per_week
      }
      therapy_history {
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
          therapy_id
          screener_id
          alias_name
          therapy_code
          screener_result_range_min
          screener_result_range_max
          therapy_name
          therapy_description {
            client_type
            description
          }
          therapy_image_urls {
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
          therapy_video_urls {
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
          therapy_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_meta {
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
          total_duration
          time_per_module
          days_per_week
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
          therapy_id
          screener_id
          alias_name
          therapy_code
          screener_result_range_min
          screener_result_range_max
          therapy_name
          therapy_description {
            client_type
            description
          }
          therapy_image_urls {
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
          therapy_video_urls {
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
          therapy_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_meta {
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
          total_duration
          time_per_module
          days_per_week
        }
        updated_data {
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          therapy_name
          therapy_code
          screener_id
          alias_name
          screener_result_range_min
          screener_result_range_max
          therapy_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          therapy_image_urls {
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
          therapy_video_urls {
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
          therapy_document_urls {
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
          therapy_meta {
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
          total_duration
          time_per_module
          days_per_week
          is_featured
          published
          content_version
          update_counter
          active
        }
        therapy_history_id
        therapy_id
      }
    }
  }
`;
export const FORCE_PUBLISH_PLAN_GQL = gql`
  mutation forcePublishPlan($content_type: String!, $content_id: String!) {
    forcePublishPlan(content_type: $content_type, content_id: $content_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const FORCE_PUBLISH_THERAPY_GQL = gql`
  mutation forcePublishTherapy($content_type: String!, $content_id: String!) {
    forcePublishTherapy(content_type: $content_type, content_id: $content_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const FORCE_PUBLISH_BLOG_GQL = gql`
  mutation forcePublishBlog($content_type: String!, $content_id: String!) {
    forcePublishBlog(content_type: $content_type, content_id: $content_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const FORCE_PUBLISH_MASTERCLASS_GQL = gql`
  mutation forcePublishMasterClass(
    $content_type: String!
    $content_id: String!
  ) {
    forcePublishMasterClass(
      content_type: $content_type
      content_id: $content_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;
export const FORCE_PUBLISH_INTERVENTION_GQL = gql`
  mutation forcePublishIntervention(
    $content_type: String!
    $content_id: String!
  ) {
    forcePublishIntervention(
      content_id: $content_id
      content_type: $content_type
    ) {
      status
      error
      message
      version
      service
    }
  }
`;
export const CREATE_MODULE_GQL = gql`
  mutation createTherapyModule($create_request: CreateTherapyModuleRequest!) {
    createTherapyModule(create_request: $create_request) {
      status
      error
      message
      version
      service
      therapy_module {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        therapy_module_id
        therapy_id
        therapy_module_code
        intervention_ids
        sort_order
        min_completion_days
        max_completion_days
        start_interval_seconds
        therapy_module_name
        therapy_module_description {
          client_type
          description
        }
        therapy_module_image_urls {
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
        therapy_module_video_urls {
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
        therapy_module_meta {
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
      therapy_module_history {
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
          therapy_module_id
          therapy_id
          therapy_module_code
          intervention_ids
          sort_order
          min_completion_days
          max_completion_days
          start_interval_seconds
          therapy_module_name
          therapy_module_description {
            client_type
            description
          }
          therapy_module_image_urls {
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
          therapy_module_video_urls {
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
          therapy_module_meta {
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
          therapy_module_id
          therapy_id
          therapy_module_code
          intervention_ids
          sort_order
          min_completion_days
          max_completion_days
          start_interval_seconds
          therapy_module_name
          therapy_module_description {
            client_type
            description
          }
          therapy_module_image_urls {
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
          therapy_module_video_urls {
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
          therapy_module_meta {
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
        updated_data {
          therapy_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          intervention_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          therapy_module_name
          therapy_module_code
          therapy_module_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          therapy_module_image_urls {
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
          therapy_module_video_urls {
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
          therapy_module_meta {
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
        therapy_module_history_id
        therapy_module_id
        therapy_id
      }
    }
  }
`;

export const UPDATE_MODULE_GQL = gql`
  mutation updateTherapyModule($update_request: UpdateTherapyModuleRequest!) {
    updateTherapyModule(update_request: $update_request) {
      status
      error
      message
      version
      service
      therapy_module {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        therapy_module_id
        therapy_id
        therapy_module_code
        intervention_ids
        sort_order
        min_completion_days
        max_completion_days
        start_interval_seconds
        therapy_module_name
        therapy_module_description {
          client_type
          description
        }
        therapy_module_image_urls {
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
        therapy_module_video_urls {
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
        therapy_module_meta {
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
      therapy_module_history {
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
          therapy_module_id
          therapy_id
          therapy_module_code
          intervention_ids
          sort_order
          min_completion_days
          max_completion_days
          start_interval_seconds
          therapy_module_name
          therapy_module_description {
            client_type
            description
          }
          therapy_module_image_urls {
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
          therapy_module_video_urls {
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
          therapy_module_meta {
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
          therapy_module_id
          therapy_id
          therapy_module_code
          intervention_ids
          sort_order
          min_completion_days
          max_completion_days
          start_interval_seconds
          therapy_module_name
          therapy_module_description {
            client_type
            description
          }
          therapy_module_image_urls {
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
          therapy_module_video_urls {
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
          therapy_module_meta {
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
        updated_data {
          therapy_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          intervention_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          therapy_module_name
          therapy_module_code
          therapy_module_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          therapy_module_image_urls {
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
          therapy_module_video_urls {
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
          therapy_module_meta {
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
        therapy_module_history_id
        therapy_module_id
        therapy_id
      }
    }
  }
`;

export const CREATE_MODULE_ACTION_GQL = gql`
  mutation createTherapyModuleAction(
    $create_request: CreateTherapyModuleActionRequest!
  ) {
    createTherapyModuleAction(create_request: $create_request) {
      status
      error
      message
      version
      service
      therapy_module_action {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        therapy_module_action_id
        therapy_id
        therapy_module_id
        therapy_module_action_code
        therapy_action_type
        intervention_id
        screener_id
        sort_order
        therapy_module_action_name
        therapy_module_action_description {
          client_type
          description
        }
        therapy_module_action_image_urls {
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
        therapy_module_action_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        therapy_module_action_video_urls {
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
      therapy_module_action_history {
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
          therapy_module_action_id
          therapy_id
          therapy_module_id
          therapy_module_action_code
          therapy_action_type
          intervention_id
          screener_id
          sort_order
          therapy_module_action_name
          therapy_module_action_description {
            client_type
            description
          }
          therapy_module_action_image_urls {
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
          therapy_module_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_module_action_video_urls {
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
          therapy_module_action_id
          therapy_id
          therapy_module_id
          therapy_module_action_code
          therapy_action_type
          intervention_id
          screener_id
          sort_order
          therapy_module_action_name
          therapy_module_action_description {
            client_type
            description
          }
          therapy_module_action_image_urls {
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
          therapy_module_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_module_action_video_urls {
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
        updated_data {
          therapy_id
          therapy_module_id
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          therapy_action_type
          intervention_id
          therapy_module_action_code
          sort_order
          therapy_module_action_name
          therapy_module_action_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          therapy_module_action_image_urls {
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
          therapy_module_action_document_urls {
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
          therapy_module_action_video_urls {
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
        }
        therapy_module_action_history_id
        therapy_module_action_id
        therapy_module_id
      }
    }
  }
`;

export const UPDATE_MODULE_ACTION_GQL = gql`
  mutation updateTherapyModuleAction(
    $update_request: UpdateTherapyModuleActionRequest!
  ) {
    updateTherapyModuleAction(update_request: $update_request) {
      status
      error
      message
      version
      service
      therapy_module_action {
        created_by
        updated_by
        row_crc
        sub_domain_ids
        content_version
        update_counter
        published
        active
        therapy_module_action_id
        therapy_id
        therapy_module_id
        therapy_module_action_code
        therapy_action_type
        intervention_id
        screener_id
        sort_order
        therapy_module_action_name
        therapy_module_action_description {
          client_type
          description
        }
        therapy_module_action_image_urls {
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
        therapy_module_action_document_urls {
          document_url_id
          name
          document_type
          duration
          url
          is_mobile
        }
        therapy_module_action_video_urls {
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
      therapy_module_action_history {
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
          therapy_module_action_id
          therapy_id
          therapy_module_id
          therapy_module_action_code
          therapy_action_type
          intervention_id
          screener_id
          sort_order
          therapy_module_action_name
          therapy_module_action_description {
            client_type
            description
          }
          therapy_module_action_image_urls {
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
          therapy_module_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_module_action_video_urls {
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
          therapy_module_action_id
          therapy_id
          therapy_module_id
          therapy_module_action_code
          therapy_action_type
          intervention_id
          screener_id
          sort_order
          therapy_module_action_name
          therapy_module_action_description {
            client_type
            description
          }
          therapy_module_action_image_urls {
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
          therapy_module_action_document_urls {
            document_url_id
            name
            document_type
            duration
            url
            is_mobile
          }
          therapy_module_action_video_urls {
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
        updated_data {
          therapy_id
          therapy_module_id
          screener_id
          sub_domain_ids {
            update_items {
              update_type
              index
              update_data
            }
            IsValid
            MergeData
          }
          therapy_action_type
          intervention_id
          therapy_module_action_code
          sort_order
          therapy_module_action_name
          therapy_module_action_description {
            update_items {
              update_type
              index
              update_data {
                client_type
                description
              }
            }
          }
          therapy_module_action_image_urls {
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
          therapy_module_action_document_urls {
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
          therapy_module_action_video_urls {
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
        }
        therapy_module_action_history_id
        therapy_module_action_id
        therapy_module_id
      }
    }
  }
`;

export const APPROVE_THERAPY_GQL = gql`
  mutation approveTherapy(
    $approve_request: ApproveContentRequest!
    $therapy_history_id: String!
  ) {
    approveTherapy(
      approve_request: $approve_request
      therapy_history_id: $therapy_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REVIEW_THERAPY_GQL = gql`
  mutation reviewTherapy(
    $review_request: ReviewContentRequest!
    $therapy_history_id: String!
  ) {
    reviewTherapy(
      review_request: $review_request
      therapy_history_id: $therapy_history_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const ACTIVE_THERAPY_GQL = gql`
  mutation activateTherapy($active_request: ActivateTherapyRequest!) {
    activateTherapy(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REMOVE_MODULE_GQL = gql`
  mutation removeTherapyModule($therapy_module_id: String!) {
    removeTherapyModule(therapy_module_id: $therapy_module_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const REMOVE_ACTION_GQL = gql`
  mutation removeTherapyModuleAction($therapy_module_action_id: String!) {
    removeTherapyModuleAction(
      therapy_module_action_id: $therapy_module_action_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const ADD_LOCALIZE_GQL = gql`
  mutation AddLocalizationData($addReq: AddLocalizationDataRequest!) {
    AddLocalizationData(addReq: $addReq) {
      status
      error
      message
      version
      service
      localization_data {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        localization_data_id
        sub_domain_id
        localization_data_code
        language_id
        key
        value {
          description_value {
            client_type
            description
          }
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
        active
      }
    }
  }
`;

export const EDIT_LOCALIZE_GQL = gql`
  mutation updateLocalizationData(
    $update_request: UpdateLocalizationDataRequest!
  ) {
    updateLocalizationData(update_request: $update_request) {
      status
      error
      message
      version
      service
      localization_data {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        localization_data_id
        sub_domain_id
        localization_data_code
        language_id
        key
        value {
          description_value {
            client_type
            description
          }
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
        active
      }
    }
  }
`;

export const CREATE_CATEGORY_GQL = gql`
  mutation AddCategory($addReq: AddCategoryRequest!) {
    AddCategory(addReq: $addReq) {
      status
      error
      message
      version
      service
      category {
        created_at
        created_by
        updated_at
        updated_by
        category_id
        sub_domain_id
        category_name
        sort_order
        supported_content_types
        category_description {
          client_type
          description
        }
        category_image_urls {
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
        category_code
        active
      }
    }
  }
`;
export const UPDATE_CATEGORY_GQL = gql`
  mutation updateCategory($update_request: UpdateCategoryRequest!) {
    updateCategory(update_request: $update_request) {
      status
      error
      message
      version
      service
      category {
        created_at
        created_by
        updated_at
        updated_by
        category_id
        sub_domain_id
        category_name
        sort_order
        supported_content_types
        category_description {
          client_type
          description
        }
        category_image_urls {
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
        category_code
        active
      }
    }
  }
`;

export const CREATE_FAQ_CATEGORY_GQL = gql`
  mutation AddFAQCategory($addReq: AddFAQCategoryRequest!) {
    AddFAQCategory(addReq: $addReq) {
      status
      error
      message
      version
      service
      faq_category {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        faq_category_name
        faq_category_type
        faq_category_description {
          client_type
          description
        }
        faq_category_image_urls {
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
        active
      }
    }
  }
`;

export const REMOVE_FAQ_CATEGORY_GQL = gql`
  mutation removeFAQCategory($faq_category_name: String!) {
    removeFAQCategory(faq_category_name: $faq_category_name) {
      status
      error
      message
      version
      service
    }
  }
`;

export const UPDATE_FAQ_CATEGORY_GQL = gql`
  mutation updateFAQCategory($update_request: UpdateFAQCategoryRequest!) {
    updateFAQCategory(update_request: $update_request) {
      status
      error
      message
      version
      service
      faq_category {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        faq_category_name
        faq_category_type
        faq_category_description {
          client_type
          description
        }
        faq_category_image_urls {
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
        active
      }
    }
  }
`;

export const CREATE_FAQ_GQL = gql`
  mutation AddFAQ($addReq: AddFAQRequest!) {
    AddFAQ(addReq: $addReq) {
      status
      error
      message
      version
      service
      faq {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        faq_id
        faq_category_name
        question {
          client_type
          description
        }
        answer {
          client_type
          description
        }
        faq_image_urls {
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
        active
      }
    }
  }
`;

export const UPDATE_FAQ_GQL = gql`
  mutation updateFAQ($update_request: UpdateFAQRequest!) {
    updateFAQ(update_request: $update_request) {
      status
      error
      message
      version
      service
      faq {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        faq_id
        faq_category_name
        question {
          client_type
          description
        }
        answer {
          client_type
          description
        }
        faq_image_urls {
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
        active
      }
    }
  }
`;

export const CREATE_POLICY_GQL = gql`
  mutation AddPolicy($addReq: AddPolicyRequest!) {
    AddPolicy(addReq: $addReq) {
      status
      error
      message
      version
      service
      policy {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        policy_id
        policy_title
        policy_user_type
        policy_body
        policy_url
        policy_version
        policy_type
        active
      }
    }
  }
`;

export const UPDATE_POLICY_GQL = gql`
  mutation UpdatePolicy($update_request: UpdatePolicyRequest!) {
    UpdatePolicy(update_request: $update_request) {
      status
      error
      message
      version
      service
      policy {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        policy_id
        policy_title
        policy_user_type
        policy_body
        policy_url
        policy_version
        policy_type
        active
      }
    }
  }
`;

export const ADD_COUNTRY_GQL = gql`
  mutation AddCountry($addReq: AddCountryRequest!) {
    AddCountry(addReq: $addReq) {
      status
      error
      message
      version
      service
      country {
        created_at
        created_by
        updated_at
        updated_by
        country_id
        country_name
        country_description
        country_image_urls {
          image_type
          url
          is_mobile
        }
        country_mobile_number_prefix
        country_short_code
        active
      }
    }
  }
`;

export const UPDATE_COUNTRY_GQL = gql`
  mutation updateCountry($update_request: UpdateCountryRequest!) {
    updateCountry(update_request: $update_request) {
      status
      error
      message
      version
      service
      country {
        created_at
        created_by
        updated_at
        updated_by
        country_id
        country_name
        country_description
        country_image_urls {
          image_type
          url
          is_mobile
        }
        country_mobile_number_prefix
        country_short_code
        active
      }
    }
  }
`;
export const CREATE_TIMEZONE_GQL = gql`
  mutation AddTimeZone($addReq: AddTimeZoneRequest!) {
    AddTimeZone(addReq: $addReq) {
      status
      error
      message
      version
      service
      time_zone {
        created_at
        created_by
        updated_at
        updated_by
        time_zone_id
        time_zone_name
        time_zone_description
        time_zone_image_urls {
          image_type
          url
          is_mobile
        }
        time_zone_short_code
        time_zone_utc_offset
        active
      }
    }
  }
`;
export const CREATE_CITY_GQL = gql`
  mutation AddCity($addReq: AddCityRequest!) {
    AddCity(addReq: $addReq) {
      status
      error
      message
      version
      service
      city {
        created_at
        created_by
        updated_at
        updated_by
        city_id
        country_id
        city_name
        city_description
        city_image_urls {
          image_type
          url
          is_mobile
        }
        city_short_code
        active
      }
    }
  }
`;
export const UPDATE_TIMEZONE_GQL = gql`
  mutation updateTimeZone($update_request: UpdateTimeZoneRequest!) {
    updateTimeZone(update_request: $update_request) {
      status
      error
      message
      version
      service
      time_zone {
        created_at
        created_by
        updated_at
        updated_by
        time_zone_id
        time_zone_name
        time_zone_description
        time_zone_image_urls {
          image_type
          url
          is_mobile
        }
        time_zone_short_code
        time_zone_utc_offset
        active
      }
    }
  }
`;
export const UPDATE_CITY_GQL = gql`
  mutation updateCity($update_request: UpdateCityRequest!) {
    updateCity(update_request: $update_request) {
      status
      error
      message
      version
      service
      city {
        created_at
        created_by
        updated_at
        updated_by
        city_id
        country_id
        city_name
        city_description
        city_image_urls {
          image_type
          url
          is_mobile
        }
        city_short_code
        active
      }
    }
  }
`;
export const ADD_EDUCATION_GQL = gql`
  mutation AddEducation($addReq: AddEducationRequest!) {
    AddEducation(addReq: $addReq) {
      status
      error
      message
      version
      service
      education {
        created_at
        created_by
        updated_at
        updated_by
        education_id
        education_name
        education_description
        education_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;
export const UPDATE_EDUCATION_GQL = gql`
  mutation updateEducation($update_request: UpdateEducationRequest!) {
    updateEducation(update_request: $update_request) {
      status
      error
      message
      version
      service
      education {
        created_at
        created_by
        updated_at
        updated_by
        education_id
        education_name
        education_description
        education_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;

export const CREATE_CONFIG_GQL = gql`
  mutation createGameConfig($create_request: CreateGameConfigRequest!) {
    createGameConfig(create_request: $create_request) {
      status
      error
      message
      version
      service
      game_config {
        created_at
        created_by
        updated_at
        updated_by
        game_config_id
        game_type
        intervention_id
        screener_id
        game_name_key
        game_view_id
        game_config
      }
    }
  }
`;
export const UPDATE_CONFIG_GQL = gql`
  mutation updateGameConfig($update_request: UpdateGameConfigRequest!) {
    updateGameConfig(update_request: $update_request) {
      status
      error
      message
      version
      service
      game_config {
        created_at
        created_by
        updated_at
        updated_by
        game_config_id
        game_type
        intervention_id
        screener_id
        game_name_key
        game_view_id
        game_config
      }
    }
  }
`;
export const CREATE_GAME_LEVEL_GQL = gql`
  mutation createGameLevel($create_request: CreateGameLevelRequest!) {
    createGameLevel(create_request: $create_request) {
      status
      error
      message
      version
      service
      game_level {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        game_level_id
        game_type
        game_config_id
        intervention_id
        screener_id
        level_id
        stage_id
        game_level_code
        level_data
        mile_stone_name
        mile_stone_score
        mile_stone_descriptions {
          client_type
          description
        }
        mile_stone_image_urls {
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
        mile_stone_meta {
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
        is_practice_trial
        active
      }
    }
  }
`;
export const UPDATE_GAME_LEVEL_GQL = gql`
  mutation updateGameLevel($update_request: UpdateGameLevelRequest!) {
    updateGameLevel(update_request: $update_request) {
      status
      error
      message
      version
      service
      game_level {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        game_level_id
        game_type
        game_config_id
        intervention_id
        screener_id
        level_id
        stage_id
        game_level_code
        level_data
        mile_stone_name
        mile_stone_score
        mile_stone_descriptions {
          client_type
          description
        }
        mile_stone_image_urls {
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
        mile_stone_meta {
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
        is_practice_trial
        active
      }
    }
  }
`;
export const REMOVE_GAME_LEVEL_GQL = gql`
  mutation removeGameLevel($game_level_id: String!) {
    removeGameLevel(game_level_id: $game_level_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_CONFIG_GQL = gql`
  mutation removeGameConfig($game_config_id: String!) {
    removeGameConfig(game_config_id: $game_config_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const ADD_INDUSTRY_GQL = gql`
  mutation AddIndustry($addReq: AddIndustryRequest!) {
    AddIndustry(addReq: $addReq) {
      status
      error
      message
      version
      service
      industry {
        created_at
        created_by
        updated_at
        updated_by
        industry_id
        industry_name
        industry_description
        industry_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;
export const UPDATE_INDUSTRY_GQL = gql`
  mutation updateIndustry($update_request: UpdateIndustryRequest!) {
    updateIndustry(update_request: $update_request) {
      status
      error
      message
      version
      service
      industry {
        created_at
        created_by
        updated_at
        updated_by
        industry_id
        industry_name
        industry_description
        industry_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;
export const ADD_FUNCTION_GQL = gql`
  mutation AddFunction($addReq: AddFunctionRequest!) {
    AddFunction(addReq: $addReq) {
      status
      error
      message
      version
      service
      function {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        function_id
        industry_id
        function_name
        function_description
        function_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;
export const UPDATE_FUNCTION_GQL = gql`
  mutation updateFunction($update_request: UpdateFunctionRequest!) {
    updateFunction(update_request: $update_request) {
      status
      error
      message
      version
      service
      function {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        function_id
        industry_id
        function_name
        function_description
        function_image_urls {
          image_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;
export const ADD_LANGUAGE_GQL = gql`
  mutation AddLanguage($addReq: AddLanguageRequest!) {
    AddLanguage(addReq: $addReq) {
      status
      error
      message
      version
      service
      language {
        created_at
        created_by
        updated_at
        updated_by
        language_id
        language_name
        language_description
        language_image_urls {
          image_type
          url
          is_mobile
        }
        language_iso_short_code
        active
      }
    }
  }
`;
export const UPDATE_LANGUAGE_GQL = gql`
  mutation updateLanguage($update_request: UpdateLanguageRequest!) {
    updateLanguage(update_request: $update_request) {
      status
      error
      message
      version
      service
      language {
        created_at
        created_by
        updated_at
        updated_by
        language_id
        language_name
        language_description
        language_image_urls {
          image_type
          url
          is_mobile
        }
        language_iso_short_code
        active
      }
    }
  }
`;
export const ADD_PLATFORM_CONTENT_GQL = gql`
  mutation addPlatformContentMode($addReq: AddPlatformContentModeRequest!) {
    addPlatformContentMode(addReq: $addReq) {
      status
      error
      message
      version
      service
      platform_content_mode {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        platform_content_mode_id
        platform_content_mode_name
        platform_content_mode_tag
        platform_content_mode_formats
        category_id
        sort_order
        content_id
        content_type
        is_featured
        is_pilot
        is_live
      }
      platform_content_mode_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        platform_content_mode_history_id
        platform_content_mode_id
        category_id
        content_id
        content_type
        content_version
        update_counter
        update_type
      }
    }
  }
`;
export const UPDATE_PLATFORM_CONTENT_GQL = gql`
  mutation updatePlatformContentMode(
    $update_request: UpdatePlatformContentModeRequest!
  ) {
    updatePlatformContentMode(update_request: $update_request) {
      status
      error
      message
      version
      service
      platform_content_mode {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        platform_content_mode_id
        platform_content_mode_name
        platform_content_mode_tag
        platform_content_mode_formats
        category_id
        sort_order
        content_id
        content_type
        is_featured
        is_pilot
        is_live
      }
      platform_content_mode_history {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        platform_content_mode_history_id
        platform_content_mode_id
        category_id
        content_id
        content_type
        content_version
        update_counter
        update_type
      }
    }
  }
`;
export const ACTIVE_FAQ_GQL = gql`
  mutation activateFAQ($active_request: ActivateFAQRequest!) {
    activateFAQ(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;
export const ACTIVE_FAQ_CATEGORY_GQL = gql`
  mutation activateFAQCategory($active_request: ActivateFAQCategoryRequest!) {
    activateFAQCategory(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_PLATFORM_CONTENT_GQL = gql`
  mutation removePlatformContentMode($platform_content_mode_id: String!) {
    removePlatformContentMode(
      platform_content_mode_id: $platform_content_mode_id
    ) {
      status
      error
      message
      version
      service
    }
  }
`;
