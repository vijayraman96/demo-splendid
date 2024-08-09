import { gql } from "@apollo/client";
import { serviceResponse } from "./DefaultResponse";

export const GET_BRAND_ITEM_LIST = gql`
  query getAllBrandList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $brand_ids: [String!]
    $brand_name: String
    $brand_domain: String
    $business_email: String
    $cs_email: String
    $business_mobile_number: String
    $cs_mobile_number: String
    $shopify_url: String
    $website_url: String
    $account_number: String
    $bank_name: String
    $bank_ifsc: String
    $account_name: String
    $gst_number: String
    $pan_number: String
    $brand_hashtags: [String!]
    $brand_note: String
    $last_sync_ts: DateTimeISO
    $plugin_sync_status: PluginSyncStatus
    $onboarding_status: BrandOnboardingStatus
    $brand_platform_type: BrandPlatformType
    $plugin: Boolean
    $is_kyc_completed: Boolean
    $is_agreement_completed: Boolean
    $is_agreed: Boolean
    $is_admin_onboarded: Boolean
    $is_toolkit_added: Boolean
    $is_shopify_sync_completed: Boolean
    $is_policy_updated: Boolean
    $is_product_sync_completed: Boolean
    $is_info_updated: Boolean
    $creator_id: String
  ) {
    getAllBrandList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      brand_ids: $brand_ids
      brand_name: $brand_name
      brand_domain: $brand_domain
      business_email: $business_email
      cs_email: $cs_email
      business_mobile_number: $business_mobile_number
      cs_mobile_number: $cs_mobile_number
      shopify_url: $shopify_url
      website_url: $website_url
      account_number: $account_number
      bank_name: $bank_name
      bank_ifsc: $bank_ifsc
      account_name: $account_name
      gst_number: $gst_number
      pan_number: $pan_number
      brand_hashtags: $brand_hashtags
      brand_note: $brand_note
      last_sync_ts: $last_sync_ts
      plugin_sync_status: $plugin_sync_status
      onboarding_status: $onboarding_status
      brand_platform_type: $brand_platform_type
      plugin: $plugin
      is_kyc_completed: $is_kyc_completed
      is_agreement_completed: $is_agreement_completed
      is_agreed: $is_agreed
      is_admin_onboarded: $is_admin_onboarded
      is_toolkit_added: $is_toolkit_added
      is_shopify_sync_completed: $is_shopify_sync_completed
      is_policy_updated: $is_policy_updated
      is_product_sync_completed: $is_product_sync_completed
      is_info_updated: $is_info_updated
      creator_id: $creator_id
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
      brands {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_number
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        cs_mobile_number_verfied
        business_email
        cs_email
        cs_email_verfied
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          label
          mobile_number
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_product_approved
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;

export const GET_BRAND_LIST = gql`
  query getBrandList(
    $active: Boolean
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $brand_ids: [String!]
    $brand_name: String
    $brand_domain: String
    $business_email: String
    $cs_email: String
    $business_mobile_number: String
    $cs_mobile_number: String
    $shopify_url: String
    $website_url: String
    $account_number: String
    $bank_name: String
    $bank_ifsc: String
    $account_name: String
    $gst_number: String
    $pan_number: String
    $brand_hashtags: [String!]
    $brand_note: String
    $last_sync_ts: DateTimeISO
    $plugin_sync_status: PluginSyncStatus
    $onboarding_status: BrandOnboardingStatus
    $brand_platform_type: BrandPlatformType
    $plugin: Boolean
    $is_kyc_completed: Boolean
    $is_agreement_completed: Boolean
    $is_agreed: Boolean
    $is_admin_onboarded: Boolean
    $is_toolkit_added: Boolean
    $is_shopify_sync_completed: Boolean
    $is_policy_updated: Boolean
    $is_product_sync_completed: Boolean
    $is_info_updated: Boolean
    $creator_id: String
  ) {
    getBrandList(
      active: $active
      pagination: $pagination
      dateFilter: $dateFilter
      brand_ids: $brand_ids
      brand_name: $brand_name
      brand_domain: $brand_domain
      business_email: $business_email
      cs_email: $cs_email
      business_mobile_number: $business_mobile_number
      cs_mobile_number: $cs_mobile_number
      shopify_url: $shopify_url
      website_url: $website_url
      account_number: $account_number
      bank_name: $bank_name
      bank_ifsc: $bank_ifsc
      account_name: $account_name
      gst_number: $gst_number
      pan_number: $pan_number
      brand_hashtags: $brand_hashtags
      brand_note: $brand_note
      last_sync_ts: $last_sync_ts
      plugin_sync_status: $plugin_sync_status
      onboarding_status: $onboarding_status
      brand_platform_type: $brand_platform_type
      plugin: $plugin
      is_kyc_completed: $is_kyc_completed
      is_agreement_completed: $is_agreement_completed
      is_agreed: $is_agreed
      is_admin_onboarded: $is_admin_onboarded
      is_toolkit_added: $is_toolkit_added
      is_shopify_sync_completed: $is_shopify_sync_completed
      is_policy_updated: $is_policy_updated
      is_product_sync_completed: $is_product_sync_completed
      is_info_updated: $is_info_updated
      creator_id: $creator_id
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
      brands {
        created_at
        created_by
        updated_at
        updated_by
        brand_id
        brand_name
        brand_number
        brand_domain
        brand_description
        business_mobile_number
        cs_mobile_number
        cs_mobile_number_verfied
        business_email
        cs_email
        cs_email_verfied
        brand_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_page_image_urls {
          image_url_id
          key
          sort_order
          image_type
          url
        }
        brand_content_meta {
          key
          value
        }
        address {
          label
          mobile_number
          line_1
          line_2
          region
          town_city
          postcode
          state_id
          country_id
        }
        social_urls {
          provider
          link
        }
        shopify_url
        website_url
        account_name
        bank_name
        account_number
        bank_ifsc
        bank_vpa
        gst_number
        pan_number
        is_kyc_completed
        is_info_updated
        is_product_sync_completed
        is_product_approved
        is_shopify_sync_completed
        brand_platform_type
        plugin
        is_policy_updated
        is_agreement_completed
        is_agreed
        is_admin_onboarded
        is_toolkit_added
        onboarding_status
        default_mark_down
        default_creator_commission
        brand_hashtags
        brand_note
        last_sync_ts
        plugin_sync_status
        active
      }
    }
  }
`;
