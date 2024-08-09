import { gql } from "@apollo/client";

export const GET_ORGANIZATION_LIST_GQL = gql`
  query getOrganizationList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $organization_id: String
    $organization_name: String
    $organization_country_id: String
    $organization_city_id: String
    $organization_status: OrganizationStatus
  ) {
    getOrganizationList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      organization_id: $organization_id
      organization_name: $organization_name
      organization_country_id: $organization_country_id
      organization_city_id: $organization_city_id
      organization_status: $organization_status
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
      organizations {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_id
        organization_name
        domain_name
        email_domains
        organization_onboard_status
        organization_mobile_number
        organization_email
        organization_description {
          client_type
          description
        }
        organization_image_urls {
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        organization_address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        organization_city_id
        organization_country_id
        organization_status
        active
      }
    }
  }
`;

export const GET_ORGANIZATION_GQL = gql`
  query getOrganization($organization_id: String!) {
    getOrganization(organization_id: $organization_id) {
      status
      error
      message
      version
      service
      organization {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_id
        organization_name
        domain_name
        email_domains
        organization_onboard_status
        organization_mobile_number
        organization_email
        organization_description {
          client_type
          description
        }
        organization_image_urls {
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        organization_address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        organization_city_id
        organization_country_id
        organization_status
        active
      }
    }
  }
`;

export const CREATE_ORGANIZATION_GQL = gql`
  mutation createOrganization($create_req: CreateOrganizationRequest!) {
    createOrganization(create_req: $create_req) {
      status
      error
      message
      version
      service
      organization {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_id
        organization_name
        domain_name
        email_domains
        organization_onboard_status
        organization_mobile_number
        organization_email
        organization_description {
          client_type
          description
        }
        organization_image_urls {
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        organization_address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        organization_city_id
        organization_country_id
        organization_status
        active
      }
    }
  }
`;

export const ACTIVATE_ORGANIZATION_GQL = gql`
  mutation activateOrganization($active_request: ActivateOrganizationRequest!) {
    activateOrganization(active_request: $active_request) {
      status
      error
      message
      version
      service
      organization {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_id
        organization_name
        domain_name
        email_domains
        organization_onboard_status
        organization_mobile_number
        organization_email
        organization_description {
          client_type
          description
        }
        organization_image_urls {
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        organization_address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        organization_city_id
        organization_country_id
        organization_status
        active
      }
    }
  }
`;

export const UPDATE_ORGANIZATION_GQL = gql`
  mutation UpdateOrganization($update_request: UpdateOrganizationRequest!) {
    UpdateOrganization(update_request: $update_request) {
      status
      error
      message
      version
      service
      organization {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_id
        organization_name
        domain_name
        email_domains
        organization_onboard_status
        organization_mobile_number
        organization_email
        organization_description {
          client_type
          description
        }
        organization_image_urls {
          image_type
          url
          is_mobile
          video_stream {
            provider_u_id
            provider_thumbnail_url
            provider_preview_url
            provider_ready_to_stream
            provider_file_size
            provider_stream_duration
            provider_playback_hls_url
            provider_playback_dash_url
          }
        }
        organization_address {
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        organization_city_id
        organization_country_id
        organization_status
        active
      }
    }
  }
`;

export const GET_ORGANIZATION_EMPLOYEE_LIST_GQL = gql`
  query getOrganizationEmployeeProfileList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $user_id: String
    $organization_employee_name: String
    $organization_id: String
    $email: String
    $organization_employee_profile_status: OrganizationEmployeeProfileStatus
  ) {
    getOrganizationEmployeeProfileList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      user_id: $user_id
      organization_employee_name: $organization_employee_name
      organization_id: $organization_id
      email: $email
      organization_employee_profile_status: $organization_employee_profile_status
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
      organization_employee_profiles {
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
        organization_employee_profile {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          user_id
          organization_id
          email
          email_verified
          password
          time_format
          date_format
          device_id
          pn_token
          organization_employee_profile_status
        }
      }
    }
  }
`;

export const CREATE_ORGANIZATION_EMPLOYEE_GQL = gql`
  mutation createOrganizationEmployeeProfile(
    $create_req: CreateOrganizationEmployeeProfileRequest!
  ) {
    createOrganizationEmployeeProfile(create_req: $create_req) {
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
      organization_employee_profile {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_id
        organization_id
        email
        email_verified
        password
        time_format
        date_format
        device_id
        pn_token
        organization_employee_profile_status
      }
    }
  }
`;

export const UPDATE_ORGANIZATION_EMPLOYEE_GQL = gql`
  mutation updateOrganizationEmployeeProfile(
    $update_request: UpdateOrganizationEmployeeProfileRequest!
  ) {
    updateOrganizationEmployeeProfile(update_request: $update_request) {
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
      organization_employee_profile {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        user_id
        organization_id
        email
        email_verified
        password
        time_format
        date_format
        device_id
        pn_token
        organization_employee_profile_status
      }
    }
  }
`;

export const ACTIVATE_ORGANIZATION_EMPLOYEE_GQL = gql`
  mutation activateOrganizationEmployeeRequest(
    $active_request: ActivateUserRequest!
  ) {
    activateOrganizationEmployeeRequest(active_request: $active_request) {
      status
      error
      message
      version
      service
    }
  }
`;

export const GET_LICENSE_LIST_GQL = gql`
  query getOrganizationLicenseList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $organization_license_id: String
    $organization_id: String
    $organization_license_number: String
    $organization_license_status: LicenseStatus
  ) {
    getOrganizationLicenseList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      organization_license_id: $organization_license_id
      organization_id: $organization_id
      organization_license_number: $organization_license_number
      organization_license_status: $organization_license_status
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
      organization_licenses {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_license_id
        organization_license_number
        organization_id
        license_type
        license_start_ts
        license_expiry_ts
        total_seat_count
        license_duration_months
        allow_signup
        organization_license_status
        cancellation_at
        cancellation_reason
      }
    }
  }
`;

export const CREATE_LICENSE_GQL = gql`
  mutation AddOrganizationLicense($addReq: AddOrganizationLicenseRequest!) {
    AddOrganizationLicense(addReq: $addReq) {
      status
      error
      message
      version
      service
      organization_license {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_license_id
        organization_license_number
        organization_id
        license_type
        license_start_ts
        license_expiry_ts
        total_seat_count
        license_duration_months
        allow_signup
        organization_license_status
        cancellation_at
        cancellation_reason
      }
    }
  }
`;

export const UPDATE_LICENSE_GQL = gql`
  mutation updateOrganizationLicense(
    $update_request: UpdateOrganizationLicenseRequest!
  ) {
    updateOrganizationLicense(update_request: $update_request) {
      status
      error
      message
      version
      service
      organization_license {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_license_id
        organization_license_number
        organization_id
        license_type
        license_start_ts
        license_expiry_ts
        total_seat_count
        license_duration_months
        allow_signup
        organization_license_status
        cancellation_at
        cancellation_reason
      }
    }
  }
`;

export const ADD_LICENSE_TRANSACTION = gql`
  mutation AddLicenseTransaction($addReq: CreateTransactionRequest!) {
    AddLicenseTransaction(addReq: $addReq) {
      status
      error
      message
      version
      service
      transaction {
        created_at
        created_by
        updated_at
        updated_by
        transaction_id
        organization_license_id
        organization_id
        transaction_type
        amount
        cgst
        igst
        sgst
        vat
        total_amount
      }
    }
  }
`;

export const GET_TRANSACTION_LIST = gql`
  query getTransactionList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $transaction_id: String
    $transaction_type: String
    $organization_license_id: String
    $organization_id: String
  ) {
    getTransactionList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      transaction_id: $transaction_id
      transaction_type: $transaction_type
      organization_license_id: $organization_license_id
      organization_id: $organization_id
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
      Transactions {
        created_at
        created_by
        updated_at
        updated_by
        transaction_id
        organization_license_id
        organization_id
        transaction_type
        amount
        cgst
        igst
        sgst
        vat
        total_amount
      }
    }
  }
`;

export const GET_ORGANIZATION_USER_LIST_GQL = gql`
  query getOrganizationUserList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $email: String
    $is_blocked: Boolean
    $organization_id: String
    $license_id: String
    $organization_user_id: String
    $user_id: String
    $user_ids: [String!]
    $onboard_status: OnboardStatus
    $organization_user_type: LicenseUserType
    $license_user_statuses: [LicenseUserStatus!]
  ) {
    getOrganizationUserList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      email: $email
      is_blocked: $is_blocked
      organization_id: $organization_id
      license_id: $license_id
      organization_user_id: $organization_user_id
      user_id: $user_id
      user_ids: $user_ids
      onboard_status: $onboard_status
      organization_user_type: $organization_user_type
      license_user_statuses: $license_user_statuses
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
      organization_users {
        user_id
        organization_id
        organization_name
        email
        organization_user_type
        onboard_status
        is_blocked
        license_id
        license_number
        license_type
        license_start_ts
        license_expiry_ts
        total_seat_count
        license_user_id
        license_user_start_ts
        license_user_expiry_ts
        license_user_status
      }
    }
  }
`;

export const ADD_ORGANIZATION_USER_GQL = gql`
  mutation AddLicenseUsers($createReq: CreateLicenseUsersRequest!) {
    AddLicenseUsers(createReq: $createReq) {
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
        license_user {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          license_user_id
          user_id
          email
          organization_id
          license_id
          license_user_type
          license_start_ts
          license_expiry_ts
          license_user_status
        }
        organization_user {
          created_at
          created_by
          updated_at
          updated_by
          row_crc
          organization_user_id
          organization_id
          user_id
          email
          organization_user_type
          onboard_status
          is_blocked
        }
      }
      errors {
        email
        error
      }
    }
  }
`;

export const ACTIVATE_ORGANIZATION_USER_GQL = gql`
  query deactivateLicenseUser($license_user_id: String!) {
    deactivateLicenseUser(license_user_id: $license_user_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const BLOCK_ORGANIZATION_USER_GQL = gql`
  mutation BlockOrganizationUser($updateReq: BlockOrganizationUserRequest!) {
    BlockOrganizationUser(updateReq: $updateReq) {
      status
      error
      message
      version
      service
      organization_user {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        organization_user_id
        organization_id
        user_id
        email
        organization_user_type
        onboard_status
        is_blocked
      }
    }
  }
`;

export const SEND_ORGANIZATION_INVITE_MAIL = gql`
  query SendOrganisationInviteMail($organization_id: String!, $email: String!) {
    SendOrganisationInviteMail(
      organization_id: $organization_id
      email: $email
    ) {
      status
      error
      message
      version
      service
    }
  }
`;

export const RESEND_INVITE_MAIL = gql`
  mutation resendInviteEmail($verification_req: SendEmailVerificationRequest!) {
    resendInviteEmail(verification_req: $verification_req) {
      status
      error
      message
      version
      service
    }
  }
`;
