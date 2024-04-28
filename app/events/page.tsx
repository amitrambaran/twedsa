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
          }
        }
      }
    }
  `;
  const { allEventCard }: EventCardResponse = await client.request(query);

  return (
    <section className="m-8">
      {allEventCard.edges.map((edge, index) => (
        <EventCard
          description={edge.node.description}
          image={edge.node.image}
          index={index}
          key={edge.node.id}
        />
      ))}
    </section>
  );
}
