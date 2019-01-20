import React, { Component } from 'react';
import Head from 'next/head';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

const SingleItemStyles = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${({ theme }) => theme.bs};
  min-height: 800px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <p>Error: {error.message}</p>;
          if (!data.item) return <p>No item found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
                <h2>Viewing {item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
