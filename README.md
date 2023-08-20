# GraphQL Demo with Apollo Server and Express

This is a simple GraphQL demo showcasing how to set up a server using Apollo Server and Express. In this demo, we have a list of books and authors, and you can query the data using GraphQL queries.

## Table of Contents

- [Setup](#setup)
- [Running the Server](#running-the-server)
- [Using the API](#using-the-api)

## Setup

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd graphql-demo
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

## Running the Server

To start the server, run the following command:

    ```bash
    node server.js
    ```

The server will start, and you can access the Apollo Server Playground at http://localhost:4000/graphql.


## Using the API

Once the server is running, you can use the Playground or any GraphQL client to test the API. Run the following queries in the playground.

1. **Fetch all books with their authors**

    ```json
    {
        books {
            title
            author {
                name
            }
        }
    }

    ```

2. **Fetch all authors and their books**

    ```json
    {
        authors {
            name
            books {
                title
            }
        }
    }

    ```