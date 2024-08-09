import { gql } from "@apollo/client";
import { serviceResponse, userResponse } from "./profileResponse";

export const GET_USER = gql`
  query getUser($user_id: String!) {
    getUser(user_id: $user_id) {
      status
      error
      message
      version
      service
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
    }
  }
`;

export const GET_EMPLOYEE_GQL = gql`
  query getEmployee($user_id: String!) {
    getEmployee(user_id: $user_id) {
      status
      error
      message
      version
      service
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
        qualification
        alias_name
        social_link_urls {
          provider
          link
        }
        employee_profile_descriptions {
          client_type
          description
        }
        employee_profile_meta {
          type
          key
          value
          image_urls {
            image_type
            url
            is_mobile
          }
        }
      }
    }
  }
`;

export const GET_USER_LIST = gql`
  query getUserList(
    $user_ids: [String!]
    $user_types: [UserType!]
    $name: String
    $first_name: String
    $last_name: String
    $mobile_number: String
    $email: String
    $active: Boolean
    $personal_email_verified: Boolean
    $mobile_number_verified: Boolean
    $role_types: [RoleType!]
    $gender: Gender
    $dob: DateTime
    $education_id: String
    $country_id: String
    $city_id: String
    $industry_id: String
    $function_id: String
    $marital_status: MaritalStatus
    $work_experience_years: Float
  ) {
    getUserList(
      user_ids: $user_ids
      user_types: $user_types
      name: $name
      first_name: $first_name
      last_name: $last_name
      mobile_number: $mobile_number
      email: $email
      active: $active
      personal_email_verified: $personal_email_verified
      mobile_number_verified: $mobile_number_verified
      role_types: $role_types
      gender: $gender
      dob: $dob
      education_id: $education_id
      country_id: $country_id
      city_id: $city_id
      industry_id: $industry_id
      function_id: $function_id
      marital_status: $marital_status
      work_experience_years: $work_experience_years
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
      users {
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
    }
  }
`;

export const EMAIL_EXIST = gql`
    query IsEmailExists($email: String!) {
        isEmailExists(email: $email) {
            ${serviceResponse}
            exists
        }
    }
`;

export const MOBILE_EXIST = gql`
    query IsMobileExists($mobile_number: String!) {
        isMobileExists(mobile_number: $mobile_number) {
            ${serviceResponse}
            exists
        }
    }
`;

export const USERNAME_EXIST = gql`
    query IsUserNameExists($user_name: String!) {
        isUserNameExists(user_name: $user_name) {
            ${serviceResponse}
            exists
        }
    }
`;

export const GET_USER_ACTIVITY_LIST_GQL = gql`
  query getUserActivity(
    $affected_user_id: String
    $user_action: UserActivityType
    $user_id: String!
  ) {
    getUserActivity(
      affected_user_id: $affected_user_id
      user_action: $user_action
      user_id: $user_id
    ) {
      status
      error
      message
      version
      service
      user_activity_list {
        created_by
        updated_by
        user_activity_id
        user_id
        user_activity_type
        reason
        data {
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
        roles {
          created_by
          updated_by
          row_crc
          admin_role_id
          user_id
          sub_domain_id
          role_type
          active
        }
      }
    }
  }
`;

export const GET_USER_ACTIVITY_CONTENT_LIST_GQL = gql`
  query getUserContentActivity(
    $content_type: ContentType
    $content_version: String
    $update_status: String
    $update_type: String
    $user_id: String!
  ) {
    getUserContentActivity(
      content_type: $content_type
      content_version: $content_version
      update_status: $update_status
      update_type: $update_type
      user_id: $user_id
    ) {
      status
      error
      message
      version
      service
      content_history_list {
        created_at
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
        }
        publish_at
        reviewer_comment
        reviewed_by
        reviewed_at
        approver_comment
        approved_by
        approved_at
      }
    }
  }
`;
