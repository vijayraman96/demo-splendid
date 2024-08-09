import { gql } from "@apollo/client";

export const ADD_TEMPLATE_GQL = gql`
  mutation AddTemplate($addReq: AddTemplateRequest!) {
    AddTemplate(addReq: $addReq) {
      status
      error
      message
      version
      service
      template {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        template_id
        template_name
        template_type
        template_code
        template_document {
          document_url_id
          name
          document_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;

export const UPDATE_TEMPLATE_GQL = gql`
  mutation updateTemplate($update_request: UpdateTemplateRequest!) {
    updateTemplate(update_request: $update_request) {
      status
      error
      message
      version
      service
      template {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        template_id
        template_name
        template_type
        template_code
        template_document {
          document_url_id
          name
          document_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;

export const GET_TEMPLATE_GQL = gql`
  query getTemplate($template_id: String!) {
    getTemplate(template_id: $template_id) {
      status
      error
      message
      version
      service
      template {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        template_id
        template_name
        template_type
        template_code
        template_document {
          document_url_id
          name
          document_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;

export const GET_TEMPLATE_LIST_GQL = gql`
  query getTemplateList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $template_id: String
    $template_type: TemplateType
    $template_name: String
    $content_ids: [String!]
  ) {
    getTemplateList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      template_id: $template_id
      template_type: $template_type
      template_name: $template_name
      content_ids: $content_ids
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
      templates {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        template_id
        template_name
        template_type
        template_code
        template_document {
          document_url_id
          name
          document_type
          url
          is_mobile
        }
        active
      }
    }
  }
`;
export const REMOVE_TEMPLATE_GQL = gql`
  mutation removeTemplate($template_id: String!) {
    removeTemplate(template_id: $template_id) {
      status
      error
      message
      version
      service
    }
  }
`;
export const ADD_RULE_ENGINE_GQL = gql`
  mutation AddRuleEngine($addReq: AddRuleEngineRequest!) {
    AddRuleEngine(addReq: $addReq) {
      status
      error
      message
      version
      service
      rule_engine {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        rule_engine_id
        rule_input_id
        rule_input_type
        rule_output_id
        rule_output_type
        platform_type
        weightage
        active
      }
    }
  }
`;

export const UPDATE_RULE_ENGINE_GQL = gql`
  mutation updateRuleEngine($update_request: UpdateRuleEngineRequest!) {
    updateRuleEngine(update_request: $update_request) {
      status
      error
      message
      version
      service
      rule_engine {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        rule_engine_id
        rule_input_id
        rule_input_type
        rule_output_id
        rule_output_type
        platform_type
        weightage
        active
      }
    }
  }
`;

export const ACTIVATE_RULE_ENGINE_GQL = gql`
  mutation activateRuleEngine($active_request: ActivateRuleEngineRequest!) {
    activateRuleEngine(active_request: $active_request) {
      status
      error
      message
      version
      service
      rule_engine {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        rule_engine_id
        rule_input_id
        rule_input_type
        rule_output_id
        rule_output_type
        platform_type
        weightage
        active
      }
    }
  }
`;

export const REMOVE_RULE_ENGINE_GQL = gql`
  mutation removeRuleEngine($rule_engine_id: String!) {
    removeRuleEngine(rule_engine_id: $rule_engine_id) {
      status
      error
      message
      version
      service
    }
  }
`;

export const GET_RULE_ENGINE_GQL = gql`
  query getRuleEngine($rule_engine_id: String!) {
    getRuleEngine(rule_engine_id: $rule_engine_id) {
      status
      error
      message
      version
      service
      rule_engine {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        rule_engine_id
        rule_input_id
        rule_input_type
        rule_output_id
        rule_output_type
        platform_type
        weightage
        active
      }
    }
  }
`;

export const GET_RULE_ENGINE_LIST_GQL = gql`
  query getRuleEngineList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $rule_engine_id: String
    $rule_input_id: String
    $rule_input_type: RuleType
    $rule_output_id: String
    $rule_output_type: ContentType
    $platform_type: PlatformType
    $weightage: Float
  ) {
    getRuleEngineList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      rule_engine_id: $rule_engine_id
      rule_input_id: $rule_input_id
      rule_input_type: $rule_input_type
      rule_output_id: $rule_output_id
      rule_output_type: $rule_output_type
      platform_type: $platform_type
      weightage: $weightage
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
      rule_engines {
        created_at
        created_by
        updated_at
        updated_by
        row_crc
        rule_engine_id
        rule_input_id
        rule_input_type
        rule_output_id
        rule_output_type
        platform_type
        weightage
        active
      }
    }
  }
`;
