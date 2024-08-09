import { gql } from "@apollo/client";
import { serviceResponse } from "./DefaultResponse";

export const CREATE_RELATED_CONTENT_GQL = gql`
mutation AddRelatedContent ($createReq: CreateRelatedContentRequest!) {
    AddRelatedContent (createReq: $createReq) {
        ${serviceResponse}
        related_content {
            created_at
            created_by
            updated_at
            updated_by
            row_crc
            related_content_row_id
            content_id
            content_type
            related_content_id
            related_content_type
            related_content_descriptions {
                client_type
                description
            }
            active
        }
    }
}
`;

export const UPDATE_RELATED_CONTENT_GQL = gql`
mutation UpdateRelatedContent ($update_request: UpdateRelatedContentRequest!) {
    UpdateRelatedContent (update_request: $update_request) {
        ${serviceResponse}
        related_content {
            created_at
            created_by
            updated_at
            updated_by
            row_crc
            related_content_row_id
            content_id
            content_type
            related_content_id
            related_content_type
            related_content_descriptions {
                client_type
                description
            }
            active
        }
    }
}
`;

export const REMOVE_RELATED_CONTENT_GQL = gql`
  mutation removeRelatedContent($related_content_row_id: String!) {
    removeRelatedContent(related_content_row_id: $related_content_row_id) {
      status
      error
      message
      version
      service
    }
  }
`;
