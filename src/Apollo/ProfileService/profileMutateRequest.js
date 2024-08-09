import { gql } from "@apollo/client";
import { loginResponse, serviceResponse } from "./profileResponse";

export const LOGIN_ADMIN = gql`
  mutation loginAdmin($login_request: LoginRequest!) {
    loginAdmin(login_request: $login_request) {
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
      session {
        created_at
        created_by
        updated_at
        updated_by
        session_token
        session_id
        user_id
        user_type
        device_id
        login_method
        last_accessed
        expiry
        status
        license_type
        license_id
        user_session_info {
          browser_version
          browser_name
          user_ip
          resolution
          device_type
        }
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
    }
  }
`;

export const UPDATE_EMPLOYEE_USER = gql`
  mutation updateEmployeeProfessionalInfo(
    $update_request: UpdateEmployeeProfessionalInfoRequest!
  ) {
    updateEmployeeProfessionalInfo(update_request: $update_request) {
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

export const UPDATE_ADMIN_PASSWORD_GQL = gql`
  mutation updateAdminPassword($password: String!) {
    updateAdminPassword(password: $password) {
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
    }
  }
`;
export const UPDATE_EMPLOYEE_PASSWORD_GQL = gql`
  mutation updateEmployeePassword($password: String!) {
    updateEmployeePassword(password: $password) {
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
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($update_request: UpdateUserRequest!) {
    updateUser(update_request: $update_request) {
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

export const ACTIVATE_USER_GQL = gql`
  mutation activateUser($activate: Boolean!, $user_id: String!) {
    activateUser(activate: $activate, user_id: $user_id) {
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

export const RESET_ADMIN_PASSWORD_GQL = gql`
  mutation resetAdminPassword($password_otp_req: ResetPasswordRequest!) {
    resetAdminPassword(password_otp_req: $password_otp_req) {
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
    }
  }
`;

export const RESET_EMPLOYEE_PASSWORD_GQL = gql`
  mutation resetEmployeePassword($password_otp_req: ResetPasswordRequest!) {
    resetEmployeePassword(password_otp_req: $password_otp_req) {
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
            video_stream {
              provider_u_id
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
  }
`;

export const FORGOT_ADMIN_PASSWORD_GQL = gql`
  mutation forgotAdminPassword($password_otp_req: ForgotPasswordRequest!) {
    forgotAdminPassword(password_otp_req: $password_otp_req) {
      status
      error
      message
      version
      service
    }
  }
`;

export const SET_ADMIN_PASSWORD_GQL = gql`
  mutation setAdminPassword($password_otp_req: ResetPasswordRequest!) {
    setAdminPassword(password_otp_req: $password_otp_req) {
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
    }
  }
`;

export const SET_EMPLOYEE_PASSWORD_GQL = gql`
  mutation setEmployeePassword($password_otp_req: ResetPasswordRequest!) {
    setEmployeePassword(password_otp_req: $password_otp_req) {
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
            video_stream {
              provider_u_id
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
  }
`;
