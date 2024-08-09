import { gql } from "@apollo/client";
import { serviceResponse } from "./applicationResponse";
export const VERIFY_STORE_SUBSCRIPTION = gql`
mutation VerifyStoreSubscription ($create_request: CreateStoreSubscriptionRequest!) {
    verifyStoreSubscription (create_request: $create_request) {
        ${serviceResponse}
        store_subscription {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            paayment_id
            allowed_posts
            allowed_audio_documents
            allowed_video_documents
            allowed_image_documents
            allowed_sd_video_streaming_minutes
            allowed_hd_video_streaming_minutes
            allowed_sd_audio_streaming_minutes
            allowed_hd_audio_streaming_minutes
            allowed_image_views
            subscription_start
            subscription_end
            store_subscription_status
        }
    }
}`;

export const CREATE_STORE_SUBSCRIPTION = gql`
mutation createStoreSubscription ($create_request: CreateStoreSubscriptionRequest!) {
    createStoreSubscription (create_request: $create_request) {
        ${serviceResponse}
        store_subscription{
            created_at
            created_by
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            payment_id
            min_subscription_posts
            allowed_posts
            allowed_audio_documents
            allowed_video_documents
            allowed_image_documents
            allowed_sd_video_streaming_minutes
            allowed_hd_video_streaming_minutes
            allowed_sd_audio_streaming_minutes
            allowed_hd_audio_streaming_minutes
            allowed_image_views
            subscription_start
            subscription_end
            is_free_plan
            store_subscription_status
        }
        store_subscription_stats{
            created_at
            created_by
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        payment_requiered
        payment_id
        gateway_txn_token
        order_value
        order_status
    }
}`;

export const UPGRADE_STORE_SUBSCRIPTION = gql`
mutation upgradeStoreSubscription ($upgrade_request: UpgradeStoreSubscriptionRequest!) {
  upgradeStoreSubscription (upgrade_request: $upgrade_request) {
        ${serviceResponse}
        store_subscription{
            created_at
            created_by
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            payment_id
            min_subscription_posts
            allowed_posts
            allowed_audio_documents
            allowed_video_documents
            allowed_image_documents
            allowed_sd_video_streaming_minutes
            allowed_hd_video_streaming_minutes
            allowed_sd_audio_streaming_minutes
            allowed_hd_audio_streaming_minutes
            allowed_image_views
            subscription_start
            subscription_end
            is_free_plan
            store_subscription_status
        }
        store_subscription_stats{
            created_at
            created_by
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        payment_requiered
        payment_id
        gateway_txn_token
        order_value
        order_status
    }
}`;

export const CREATE_POST = gql`
mutation CreatePost ($create_request: CreatePostRequest!) {
    createPost (create_request: $create_request) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_url
        }
    }
}`;

export const TAG_POST = gql`
mutation TagPost ($tag_post: AddTagsRequest!) {
    tagPost (tag_post: $tag_post) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_name
            post_document_url
            post_document_description
        }
    }
}`;

export const UPDATE_POST = gql`
mutation UpdatePost ($update_request: UpdatePostRequest!) {
    updatePost (update_request: $update_request) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_name
            post_document_url
            post_document_description
        }
    }
}`;

export const ARCHIVE_POST = gql`
mutation archivePost ($post_id: String!) {
  archivePost (post_id: $post_id) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_name
            post_document_url
            post_document_description
        }
    }
}`;

export const REMOVE_POST = gql`
mutation deletePost ($post_id: String!) {
  deletePost (post_id: $post_id) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_name
            post_document_url
            post_document_description
        }
    }
}`;

export const ADD_POST_DOCUMENT = gql`
  mutation addPostDocument($create_request: AddPostDocumentRequest!) {
    addPostDocument(create_request: $create_request) {
      status
      error
      message
      post_document {
        post_document_id
        user_id
        store_id
        post_document_type
        post_document_url
      }
    }
  }
`;

export const UPDATE_POST_DOCUMENT = gql`
mutation UpdatePostDocument ($create_request: UpdatePostDocumentRequest!) {
    updatePostDocument (create_request: $create_request) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_name
            post_document_url
            post_document_description
        }
    }
}`;

export const REMOVE_POST_DOCUMENT = gql`
mutation RemovePostDocument ($create_request: RemovePostDocumentRequest!) {
    removePostDocument (create_request: $create_request) {
        ${serviceResponse}
        post {
            post_id
            user_id
            store_id
            post_title
            post_description
            post_content
            post_social_links {
                provider
                link
            }
            post_status
            post_cost
            tag_ids
            connection_ids
        }
        post_stats {
            post_id
            total_views
            total_likes
            total_shares
            total_comments
            total_bookmarks
            total_activity
        }
        store_subscription_stats {
            store_subscription_id
            subscription_package_id
            user_id
            store_id
            active_posts
            active_audio_documents
            active_video_documents
            active_image_documents
            streamed_sd_video_minutes
            streamed_hd_video_minutes
            streamed_sd_audio_minutes
            streamed_hd_audio_minutes
            images_viewed
            store_subscription_status
        }
        post_documents {
            post_document_id
            user_id
            store_id
            post_id
            post_document_type
            post_document_name
            post_document_url
            post_document_description
        }
    }
}`;

export const SUBMIT_KYC_DOCUMENT = gql`
  mutation submitKycDocument($kyc_request: AddKycDcumentRequest!) {
    submitKycDocument(kyc_request: $kyc_request) {
      status
      error
      message
      kyc_document {
        kyc_document_id
        user_id
        store_ids
        name_on_document
        kyc_document_name
        document_number
        kyc_documents {
          name
          document_type
          url
        }
        document_kyc_status
        approver_id
        comments
      }
    }
  }
`;
export const UPDATE_KYC_DOCUMENT = gql`
  mutation updateKycDocument($kyc_request: UpdateKycDcumentRequest!) {
    updateKycDocument(kyc_request: $kyc_request) {
      status
      error
      message
      kyc_document {
        kyc_document_id
        user_id
        store_ids
        name_on_document
        kyc_document_name
        document_number
        kyc_documents {
          name
          document_type
          url
        }
        document_kyc_status
        approver_id
        comments
      }
    }
  }
`;

export const CREATE_SERIES = gql`
  mutation CreateSeries($create_request: CreateSeriesRequest!) {
    createSeries(create_request: $create_request) {
      status
      error
      message
      series {
        series_id
        user_id
        store_id
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_social_links {
          provider
          link
        }
        series_status
      }
    }
  }
`;

export const UPDATE_SERIES = gql`
  mutation UpdateSeries($update_request: UpdateSeriesRequest!) {
    updateSeries(update_request: $update_request) {
      status
      error
      message
      series {
        series_id
        user_id
        store_id
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_social_links {
          provider
          link
        }
        series_status
      }
    }
  }
`;

export const FINALIZE_SERIES = gql`
  mutation finalizeSeries($update_request: UpdateSeriesRequest!) {
    finalizeSeries(update_request: $update_request) {
      status
      error
      message
      series {
        series_id
        user_id
        store_id
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_social_links {
          provider
          link
        }
        series_status
      }
    }
  }
`;

export const ADD_POST_TO_SERIES = gql`
  mutation AddPostToSeries($post_ids: [String!]!, $series_id: String!) {
    addPostToSeries(post_ids: $post_ids, series_id: $series_id) {
      status
      error
      message
      series {
        created_at
        created_by
        updated_at
        updated_by
        series_id
        user_id
        store_id
        post_ids
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_social_links {
          provider
          link
        }
        series_status
      }
    }
  }
`;

export const ARCHIVE_SERIES = gql`
  mutation archiveSeries($series_id: String!) {
    archiveSeries(series_id: $series_id) {
      status
      error
      message
      series {
        series_id
        user_id
        store_id
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_social_links {
          provider
          link
        }
        series_status
      }
    }
  }
`;

export const DELETE_SERIES = gql`
  mutation deleteSeries($series_id: String!) {
    deleteSeries(series_id: $series_id) {
      status
      error
      message
      series {
        series_id
        user_id
        store_id
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_social_links {
          provider
          link
        }
        series_status
      }
    }
  }
`;

export const UPDATE_STORE = gql`
  mutation updateStore($update_request: UpdateStoreRequest!) {
    updateStore(update_request: $update_request) {
      status
      error
      message
      store {
        created_at
        created_by
        updated_at
        updated_by
        store_id
        user_id
        store_category_type
        store_type
        store_name
        store_description
        store_image_urls {
          image_type
          url
        }
        store_social_links {
          provider
          link
        }
        store_kyc_status
        store_status
        subscription_store_status
        user_subscription_cost
        dafault_post_amount
        store_mobile_number
        mobile_number_verified
        store_email
        email_verified
        store_address {
          line_1
          line_2
          region
          town_city
          postcode
          country_id
        }
      }
      kyc_documents {
        created_at
        created_by
        updated_at
        updated_by
        kyc_document_id
        user_id
        name_on_document
        document_number
        store_ids
        kyc_document_name
        kyc_documents {
          name
          document_type
          url
        }
        document_kyc_status
        approver_id
        comments
      }
    }
  }
`;

export const UPDATE_STORE_SUBSCRIPTION = gql`
  mutation updateStoreSubscription(
    $subscription_request: UpdateStoreSubscriptionRequest!
  ) {
    updateStoreSubscription(subscription_request: $subscription_request) {
      status
      error
      message
      store {
        created_at
        created_by
        updated_at
        store_id
        user_id
        store_category_type
        store_type
        store_name
        store_description
        store_image_urls {
          image_type
          url
        }
        store_social_links {
          provider
          link
        }
        store_kyc_status
        store_status
        subscription_store_status
        user_subscription_cost
        dafault_post_amount
        store_mobile_number
        mobile_number_verified
        store_email
        email_verified
        store_address {
          line_1
          line_2
          region
          town_city
          postcode
          country_id
        }
      }
      kyc_documents {
        created_at
        created_by
        updated_at
        kyc_document_id
        user_id
        name_on_document
        document_number
        store_ids
        kyc_document_name
        kyc_documents {
          name
          document_type
          url
        }
        document_kyc_status
        approver_id
        comments
      }
    }
  }
`;

export const GET_PAYMENT = gql`
  mutation getPayment($payment_id: String!) {
    getPayment(payment_id: $payment_id) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      payment {
        created_at
        created_by
        updated_at
        updated_by
        payment_id
        user_id
        store_id
        payment_reason
        payment_status
        amount
        gateway_txn_token
        comment
        is_refunded
        refund_type
        refund_amount
      }
    }
  }
`;
export const GET_STORE_WALLET = gql`
  query {
    getCreatorWallet {
      creator_wallet {
        withdrawable_balance
        balance
        store_type_wallets {
          store_type
          total_earning
        }
      }
    }
  }
`;
export const GET_STORE_WALLET_TRANSACTION_LIST = gql`
  query getCreatorWalletTransactionList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $store_id: String
    $creator_wallet_id: String
    $payment_id: String
    $transaction_type: TransactionType
    $transaction_reasons: [TransactionReason!]
    $post_id: String
    $series_id: String
  ) {
    getCreatorWalletTransactionList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      store_id: $store_id
      creator_wallet_id: $creator_wallet_id
      payment_id: $payment_id
      transaction_type: $transaction_type
      transaction_reasons: $transaction_reasons
      post_id: $post_id
      series_id: $series_id
    ) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      creator_wallet_transactions {
        created_at
        created_by
        # updated_at
        # updated_by
        creator_wallet_transaction_id
        creator_wallet_id
        store_id
        payment_id
        transaction_type
        transaction_reason
        post_id
        series_id
        comment
        amount
        balance
      }
    }
  }
`;

export const ADD_BANK = gql`
  mutation addBank($add_bank_request: CreateBankAccountRequest!) {
    addBank(add_bank_request: $add_bank_request) {
      status
      error
      message
      bank_account {
        created_at
        created_by
        bank_account_id
        creator_id
        bank_transfer_mode
        account_short_name
        name_on_account
        bank_name
        account_number
        bank_ifsc
        active
      }
    }
  }
`;
export const ADD_BANK_UPI = gql`
  mutation addBank($add_bank_request: CreateBankAccountRequest!) {
    addBank(add_bank_request: $add_bank_request) {
      status
      error
      message
      bank_account {
        created_at
        created_by
        bank_account_id
        creator_id
        bank_transfer_mode
        account_short_name
        name_on_account
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        active
      }
    }
  }
`;
export const UPDATE_BANK = gql`
  mutation updateBank($update_request: UpdateBankAccountRequest!) {
    updateBank(update_request: $update_request) {
      status
      error
      message
      bank_account {
        created_at
        created_by
        updated_at
        updated_by
        bank_account_id
        creator_id
        bank_transfer_mode
        account_short_name
        name_on_account
        bank_name
        account_number
        bank_ifsc
        active
      }
    }
  }
`;
export const UPDATE_BANK_UPI = gql`
  mutation updateBank($update_request: UpdateBankAccountRequest!) {
    updateBank(update_request: $update_request) {
      status
      error
      message
      bank_account {
        created_at
        created_by
        updated_at
        updated_by
        bank_account_id
        creator_id
        bank_transfer_mode
        account_short_name
        name_on_account
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        active
      }
    }
  }
`;
export const SEND_STORE_MOBILE_OTP = gql`
  mutation sendStoreMobileOtp(
    $verification_req: SendStoreVerificationRequest!
  ) {
    sendStoreMobileOtp(verification_req: $verification_req) {
      status
      error
      message
    }
  }
`;

export const VERIFY_STORE_MOBILE = gql`
  mutation verifyStoreMobile($verify_request: VerifyStoreRequest!) {
    verifyStoreMobile(verify_request: $verify_request) {
      status
      error
      message
      store {
        created_at
        created_by
        updated_at
        updated_by
        store_id
        user_id
        store_category_type
        store_type
        store_name
        store_description
        store_image_urls {
          image_type
          url
        }
        store_social_links {
          provider
          link
        }
        store_kyc_status
        store_status
        subscription_store_status
        user_subscription_cost
        dafault_post_amount
        store_mobile_number
        mobile_number_verified
        store_email
        email_verified
        store_address {
          line_1
          line_2
          region
          town_city
          postcode
          country_id
        }
      }
      kyc_documents {
        created_at
        created_by
        updated_at
        updated_by
        kyc_document_id
        user_id
        name_on_document
        document_number
        store_ids
        kyc_document_name
        kyc_documents {
          name
          document_type
          url
        }
        document_kyc_status
        approver_id
        comments
      }
    }
  }
`;
export const REMOVE_TIMEZONE_GQL = gql`
  mutation removeTimeZone($time_zone_id: String!) {
    removeTimeZone(time_zone_id: $time_zone_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_COUNTRY_GQL = gql`
  mutation removeCountry($country_id: String!) {
    removeCountry(country_id: $country_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_CITY_GQL = gql`
  mutation removeCity($city_id: String!) {
    removeCity(city_id: $city_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_LANGUAGE_GQL = gql`
  mutation removeLanguage($language_id: String!) {
    removeLanguage(language_id: $language_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_INDUSTRY_GQL = gql`
  mutation removeIndustry($industry_id: String!) {
    removeIndustry(industry_id: $industry_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_FUNCTION_GQL = gql`
  mutation removeFunction($function_id: String!) {
    removeFunction(function_id: $function_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_EDUCATION_GQL = gql`
  mutation removeEducation($education_id: String!) {
    removeEducation(education_id: $education_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const REMOVE_GAME_CONFIG_GQL = gql`
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
export const RENEW_ORGANIZATION_LICENSE = gql`
  mutation renewalOrganizationLicense(
    $renwalReq: RenewOrganizationLicenseRequest!
  ) {
    renewalOrganizationLicense(renwalReq: $renwalReq) {
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
export const CANCEL_ORGANIZATION_LICENSE = gql`
  mutation cancelOrganizationLicense(
    $cancel_request: CancelOrganizationLicenseRequest!
  ) {
    cancelOrganizationLicense(cancel_request: $cancel_request) {
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
