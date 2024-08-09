import { gql } from "@apollo/client";

export const GET_RELATED_CONTENT_LIST_GQL = gql`
  query getRelatedContentList(
    $pagination: PaginationFilter
    $dateFilter: DateFilter
    $active: Boolean
    $related_content_row_id: String
    $related_content_row_ids: [String!]
    $content_id: String
    $content_type: ContentType
  ) {
    getRelatedContentList(
      pagination: $pagination
      dateFilter: $dateFilter
      active: $active
      related_content_row_id: $related_content_row_id
      related_content_row_ids: $related_content_row_ids
      content_id: $content_id
      content_type: $content_type
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
      related_contents {
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

export const GET_RELATED_CONTENT_GQL = gql`
  query getRelatedContent($related_content_row_id: String!) {
    getRelatedContent(related_content_row_id: $related_content_row_id) {
      status
      error
      message
      version
      service
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
