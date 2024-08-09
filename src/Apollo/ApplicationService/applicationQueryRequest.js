import { gql } from "@apollo/client";
import { serviceResponse } from "./applicationResponse";
export const GET_USER_STORE = gql`
query GetUserStore ($store_type: StoreType!) {
    getUserStore (store_type: $store_type) {
        ${serviceResponse}
        store {
            created_at
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
        kyc_documents  {
            kyc_document_id
            user_id
            store_ids
            kyc_document_name
            kyc_documents{
                name
                document_type
                url
                }
            document_kyc_status
            approver_id
            comments
            }
    }
}`;

export const GRAPH_EARNINGS = gql`
query calculateCreatorEarning ($store_id: String $transaction_type:TransactionType  $dateFilter:DateFilter) {
  calculateCreatorEarning (store_id: $store_id transaction_type:$transaction_type  dateFilter:$dateFilter) {
        ${serviceResponse}
        earning
    }
}`;

export const IS_SUBSCRIBED_TO_STORE = gql`
  query isStoreSubscribed($store_id: String!) {
    isStoreSubscribed(store_id: $store_id) {
      status
      error
      message
      store_subscription {
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
        subscription_validity_days
        payout_days
        subscription_start
        subscription_end
        is_free_plan
        store_subscription_status
      }
      store_subscription_stats {
        created_at
        created_by
        updated_at
        updated_by
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
    }
  }
`;
export const GET_STORE_SUBSCRIPTION_DETAILS = gql`
  query getStoreSubscriptionDetails($store_subscription_id: String!) {
    getStoreSubscriptionDetails(store_subscription_id: $store_subscription_id) {
      status
      error
      message
      store_subscription {
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
      store_subscription_stats {
        store_subscription_id
        subscription_package_id
        user_id
        store_id
        active_posts
        active_audio_documents
        active_video_documents
        active_image_documents
        active_series
        streamed_sd_video_minutes
        streamed_hd_video_minutes
        streamed_sd_audio_minutes
        streamed_hd_audio_minutes
        images_viewed
        store_subscription_status
      }
      content_topups {
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
    }
  }
`;
export const GET_SUBSCRIPTION_PACKAGE_LIST = gql`
query GetSubscriptionPackageList ($pagination: PaginationFilter, $dateFilter: DateFilter, $active: Boolean, $subscription_package_name: String, $store_type: StoreType, $public_access: Boolean) {
    getSubscriptionPackageList (pagination: $pagination, dateFilter: $dateFilter, active: $active, subscription_package_name: $subscription_package_name, store_type: $store_type, public_access: $public_access) {
        ${serviceResponse}
        pagination {
            page_number
            item_count
            total_count
        }
        subscription_packages {
            subscription_package_id
            subscription_package_code
            store_type
            subscription_package_name
            subscription_package_description
            subscription_package_images {
                image_type
                url
            }
            subscription_package_keys {
                key
                value
            }
            default_content_package_id
            subscription_package_cost
            platform_comission_percent
            payment_gateway_discount_pecent
            subscription_package_validity_days
            public_access
            active
        }
    }
}
`;

export const GET_STORE_SERIES_LIST = gql`
  query getSeriesList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: String
    $name: String
    $store_id: String
  ) {
    getSeriesList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      name: $name
      store_id: $store_id
    ) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      seriess {
        created_at
        created_by
        series_id
        series_number
        user_id
        store_id
        post_ids
        series_title
        series_description
        series_image_urls {
          image_type
          url
        }
        series_status
        series_cost_type
        series_cost
      }
    }
  }
`;
export const GET_STORE_SUBSCRIPTION_LIST = gql`
query GetStoreSubscriptionList ($pagination: PaginationFilter, $dateFilter: DateFilter, $active: Boolean, $user_id: String, $store_id: StoreType, $subscription_package_id: String, $store_subscription_status: SubscriptionStatus) {
    getStoreSubscriptionList (pagination: $pagination, dateFilter: $dateFilter, active: $active, user_id: $user_id, store_id: $store_id, subscription_package_id: $subscription_package_id, store_subscription_status: $store_subscription_status) {
        ${serviceResponse}
        pagination {
            page_number
            item_count
            total_count
        }
        store_subscriptions {
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
}
`;
export const GET_STORE_LIST = gql`
query getStoreList ($pagination: PaginationFilter, $dateFilter: DateFilter, $active: Boolean, $name: String) {
    getStoreList (pagination: $pagination, dateFilter: $dateFilter, active: $active, name: $name) {
        ${serviceResponse}
        pagination {
            page_number
            item_count
            total_count
        }
        stores {
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
            user_subscription_cost
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
            active
        }
    }
}`;
export const GET_STORE_POST_LIST = gql`
  query getStorePostList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: String
    $name: String
    $store_id: String
    $user_id: String
    $post_cost_type: PostCostType
  ) {
    getStorePostList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      name: $name
      store_id: $store_id
      user_id: $user_id
      post_cost_type: $post_cost_type
    ) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      posts {
        post {
          post_id
          user_id
          created_at
          store_id
          post_title
          post_description
          post_content
          post_social_links {
            provider
            link
          }
          post_status
          post_cost_type
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
        post_documents {
          post_document_id
          user_id
          store_id
          post_id
          post_document_type
          post_document_url
        }
      }
    }
  }
`;
export const GET_POST_LIST = gql`
query GetPostList ($pagination: PaginationFilter, $dateFilter: DateFilter, $active: String, $name: String, $store_id: String, $user_id: String) {
    getPostList (pagination: $pagination, dateFilter: $dateFilter, active: $active, name: $name, store_id: $store_id, user_id: $user_id) {
        ${serviceResponse}
        pagination {
            page_number
            item_count
            total_count
        }
        posts {
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
            active
        }
    }
}`;

export const GET_POST = gql`
  query GetPost($post_id: String!) {
    getPost(post_id: $post_id) {
      status
      error
      message
      post {
        post_id
        user_id
        created_at
        store_id
        post_title
        post_description
        post_content
        post_social_links {
          provider
          link
        }
        post_status
        post_cost_type
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
      post_documents {
        post_document_id
        user_id
        store_id
        post_id
        post_document_type
        post_document_url
      }
    }
  }
`;

export const GET_KYC_STATUS = gql`
  query GetKycStatus($store_id: String) {
    getKycStatus(store_id: $store_id) {
      status
      error
      message
      kyc_status
    }
  }
`;

export const GET_KYC_DOCUMENT_LIST = gql`
  query getKycDocumentList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $user_id: String
    $store_id: String
    $kyc_document_name: KycDocumentName
    $document_kyc_status: KycStatus
  ) {
    getKycDocumentList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      user_id: $user_id
      store_id: $store_id
      kyc_document_name: $kyc_document_name
      document_kyc_status: $document_kyc_status
    ) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      kyc_documents {
        kyc_document_id
        user_id
        store_ids
        name_on_document
        document_number
        kyc_documents {
          name
          document_type
          url
        }
        document_kyc_status
        kyc_document_name
        approver_id
        comments
      }
    }
  }
`;
export const GET_USER_SERIES = gql`
  query getUserSeries($store_id: String!) {
    getUserSeries(store_id: $store_id) {
      status
      error
      message
      series {
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
        series_subscription_cost
        active
      }
    }
  }
`;

export const GET_SERIES_LIST = gql`
  query getSeriesList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: String
    $name: String
    $store_id: String
  ) {
    getSeriesList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      name: $name
      store_id: $store_id
    ) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      seriess {
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
        series_subscription_cost
      }
    }
  }
`;

export const GET_STORE = gql`
query getStore ($store_id: String!
    ) {
    getStore (store_id: $store_id) {
        ${serviceResponse}
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
            store_image_urls{
                image_type
                url
            }
            store_social_links{
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
            store_address{
                    line_1
                    line_2
                    region
                    town_city
                    postcode
                    country_id
                }
        }
        kyc_documents {
            kyc_document_id
            user_id
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
}`;

export const GET_STORE_CATEGORY_LIST = gql`
query getStoreCategoryList (
    $store_id: String!
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $name: String
    $fassai_requiered: Boolean
    ) {
        getStoreCategoryList (
            store_id: $store_id
            pagination: $pagination
            dateFilter: $dateFilter
            active: $active
            name: $name
            fassai_requiered: $fassai_requiered) {
        ${serviceResponse}
        store_categorys {
            created_at
            created_by
            updated_at
            updated_by
            store_category_type
            store_type
            store_category_name
            store_category_description
            store_category_image_urls{
                image_type
                url
            }
            fassai_requiered
            active
        }
        pagination {
            page_number
            item_count
            total_count
        }
    }
}`;

export const GET_STORE_TYPE_LIST = gql`
query getStoreTypeList (
    $store_type: StoreType
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    ) {
        getStoreTypeList (
            store_type: $store_type
            pagination: $pagination
            dateFilter: $dateFilter
            active: $active
            ) {
        ${serviceResponse}
        store_types {
            store_type
            store_type_name
            store_type_description
            store_categories
            store_type_image_urls{
                image_type
                url
            }
            store_type_keys{
                key
                value
                }
            active
        }
        pagination {
            page_number
            item_count
            total_count
        }
    }
}`;

export const GET_BANK_LIST = gql`
  query getBankList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $creator_id: String
    $bank_name: String
  ) {
    getBankList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      creator_id: $creator_id
      bank_name: $bank_name
    ) {
      status
      error
      message
      pagination {
        page_number
        item_count
        total_count
      }
      bank_accounts {
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

export const GET_CREATOR_WALLET = gql`
  query getCreatorWallet {
    getCreatorWallet {
      status
      error
      message
      creator_wallet {
        created_at
        created_by
        creator_wallet_id
        user_id
        balance
        withdrawable_balance
        store_type_wallets {
          store_type
          total_earning
        }
      }
    }
  }
`;

export const WITHDRAW_REQUEST = gql`
  query withdrawRequest($amount: Float!) {
    withdrawRequest(amount: $amount) {
      status
      error
      message
    }
  }
`;

export const GET_SCREENER_TOPIC = gql`
  query getScreenerTopic($screener_topic_id: String!) {
    getScreenerTopic(screener_topic_id: $screener_topic_id) {
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
    }
  }
`;

export const GET_SUB_DOMAIN = gql`
  query getSubDomain($sub_domain_id: String!) {
    getSubDomain(sub_domain_id: $sub_domain_id) {
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

export const GET_QUESTIONAIRE_HISTORIES = gql`
  query getAllScreenerQuestionHistories($screener_question_id: String!) {
    getAllScreenerQuestionHistories(
      screener_question_id: $screener_question_id
    ) {
      status
      error
      message
      version
      service
      screener_question_history_list {
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
