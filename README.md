# MSPT Subgraph

Just a simple first pass at spinning up a subgraph via [TheGraph.com](https://thegraph.com) to check it out. Seems like this can be updated later on when TheGraph incorporates [versioning](https://thegraph.com/docs/versioning).

## Explorer/ Playground GUI

Query the subgraph with playground GUI:
[https://thegraph.com/explorer/subgraph/microsponsors/mspt-subgraph?selected=playground](https://thegraph.com/explorer/subgraph/microsponsors/mspt-subgraph?selected=playground)

## API endpoints

- Queries (HTTP):
```
https://api.thegraph.com/subgraphs/name/microsponsors/mspt-subgraph
```

- Subscriptions (WS):
```
wss://api.thegraph.com/subgraphs/name/microsponsors/mspt-subgraph
```

## Develop

#### Dependencies
Install the yarn cli tool on your machine
```
yarn global add @graphprotocol/graph-cli
```
Install dependencies in for this repo
```
yarn
```
Edit the `schema.graphql` file, then rebuild:
```
yarn codegen
```

#### Deploy
```
$ yarn deploy --access-token <ACCESS TOKEN>
```
- Name: `mspt-subgraph`
- Location: `https://thegraph.com/explorer/subgraph/microsponsors/mspt-subgraph`
- Access token can be found in TheGraph.com's profile page

#### Contents
- `subgraph.yaml`: YAML file containing subgraph manifest
- `schema.graphql`: GraphQL schema that defines what data is stored and how to query it
- `Assemblyscript Mappings`: AssemblyScript code that translates from the event data in Ethereum to entities defined in your schema (`mappings.ts`)


