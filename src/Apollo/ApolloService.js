import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client";

// class CommonDataManager {
//   static instance = null;
//   cache = null;
//   profileClient = null;
//   applicationClient = null;
//   licenseClient =null;

//   static getInstance() {
//     if (CommonDataManager.instance == null) {
//       CommonDataManager.instance = new CommonDataManager();
//       this.instance.cache = new InMemoryCache({ addTypename: false });
//       this.instance.profileClient = new ApolloClient({
//         uri: process.env.REACT_APP_GRAPH_PROFILE_URL,
//         cache: this.instance.cache,
//       });
//       this.instance.applicationClient = new ApolloClient({
//         uri: process.env.REACT_APP_GRAPH_APPLICATION_URL,
//         cache: this.instance.cache,
//       });
//       this.instance.licenseClient = new ApolloClient({
//         uri: process.env.REACT_APP_GRAPH_LICENSE_URL,
//         cache: this.instance.cache,
//       });
//     }
//     return this.instance;
//   }
//   getProfile() {
//     if (this.profileClient == null) {
//       this.profileClient = new ApolloClient({
//         uri: process.env.REACT_APP_GRAPH_PROFILE_URL,
//         cache: new InMemoryCache({ addTypename: false }),
//       });
//     }
//     return this.profileClient;
//   }

//   getApplication() {
//     if (this.applicationClient == null) {
//       this.applicationClient = new ApolloClient({
//         uri: process.env.REACT_APP_GRAPH_APPLICATION_URL,
//         cache: new InMemoryCache({ addTypename: false }),
//       });
//     }
//     return this.applicationClient;
//   }

//   getLicense() {
//     if (this.licenseClient == null) {
//       this.licenseClient = new ApolloClient({
//         uri: process.env.REACT_APP_GRAPH_LICENSE_URL,
//         cache: new InMemoryCache({ addTypename: false }),
//       });
//     }
//     return this.licenseClient;
//   }

//   setProfileToken(token) {
//     this.profileClient = new ApolloClient({
//       uri: process.env.REACT_APP_GRAPH_PROFILE_URL,
//       cache: this.cache,
//       headers: {
//         ...this.profileClient.link.options.headers,
//         "x-access-token": token,
//       },
//     });

//     // console.log(client.cache);
//     // console.log(client.defaultOptions);
//     // console.log(client.link);
//     // console.log(client.link.options.headers);
//     // console.log(client.queryDeduplication);
//     // console.log(client.version);
//   }
//   setAppToken(token) {
//     this.applicationClient = new ApolloClient({
//       uri: process.env.REACT_APP_GRAPH_APPLICATION_URL,
//       cache: this.cache,
//       headers: {
//         ...this.applicationClient.link.options.headers,
//         "x-access-token": token,
//       },
//     });
//   }
//   setLicenseToken(token) {
//     this.licenseClient = new ApolloClient({
//       uri: process.env.REACT_APP_GRAPH_LICENSE_URL,
//       cache: this.cache,
//       headers: {
//         ...this.licenseClient.link.options.headers,
//         "x-access-token": token,
//       },
//     });
//   }
//   clear() {
//     this.applicationClient = new ApolloClient({
//       uri: process.env.REACT_APP_GRAPH_APPLICATION_URL,
//       cache: this.cache,
//     });
//     this.profileClient = new ApolloClient({
//       uri: process.env.REACT_APP_GRAPH_PROFILE_URL,
//       cache: this.cache,
//     });
//     this.licenseClient = new ApolloClient({
//       uri: process.env.REACT_APP_GRAPH_LICENSE_URL,
//       cache: this.cache,
//     });
//   }
// }
// export default CommonDataManager.getInstance();

const ClientProvider = new ApolloClient({
  link: new HttpLink({
    uri: "https://qcsdzjvfg22gbmdmod32msvvwq0jqyex.lambda-url.ap-south-1.on.aws/api/application/graphql",
    useGETForQueries: true, // Optionally force the use of GET requests for queries
  }),
  cache: new InMemoryCache(),
});

export default ClientProvider;

export const ProfileService = new ApolloClient({
  link: new HttpLink({
    // uri: "https://szsjvegyj7nakddczwbh6mtwya0urpsf.lambda-url.ap-south-1.on.aws/api/profile/graphql", //dev
    uri: "https://api.splendid.app/api/profile/graphql",
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});
