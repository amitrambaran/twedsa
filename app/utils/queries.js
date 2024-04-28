export const headlineQuery = `query headlineQuery {
  allHeadline {
    totalCount
    edges {
      node {
        headline
        id
        subheadline
        titleInternal
      }
    }
  }
}
`

export const eventCardQuery = `query MyQuery {
  allEventCard {
    edges {
      node {
        image {
          src
        }
        description {
          json
        }
      }
    }
  }
}
`