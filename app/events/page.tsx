import EventCard from "../components/EventCard";
import { GraphQLClient, gql } from "graphql-request";

interface EventCardResponse {
  allEventCard: {
    edges: {
      node: Card;
    }[];
  };
}

interface Card {
  description: any;
  id: string;
  image: {
    src: string;
  };
  position: number;
}

export default async function Events() {
  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/e/v4/${process.env.CAISY_PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": process.env.CAISY_API_KEY || "",
      },
    }
  );

  const query = gql`
    query eventCardQuery {
      allEventCard {
        edges {
          node {
            image {
              src
            }
            description {
              json
            }
            id
            position
          }
        }
      }
    }
  `;
  const { allEventCard }: EventCardResponse = await client.request(query);
  const sortedEdges = allEventCard.edges.sort(
    (a, b) => a.node.position - b.node.position
  );

  return (
    <section className="m-2">
      {sortedEdges.map((edge) => (
        <EventCard
          description={edge.node.description}
          image={edge.node.image}
          index={edge.node.position}
          key={edge.node.id}
        />
      ))}
    </section>
  );
}
