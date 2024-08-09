// import { toast } from "react-toastify";
import ClientProvider from "./ApolloService";

const graphHandler = () => {
  let inProgress = false;
  const parseGenericResponse = (response) => {
    // let data = JSON.parse(response);
    if (response.data) {
      // toast.success(response.data.status ? response.data.status : "Success");
      return true;
    } else if (response.message) {
      let error = "";
      let log = "";
      try {
        error = JSON.parse(response.message);
        log = JSON.parse(error.message);
      } catch (e) {
        console.log("Response Parsing Error", e);
      }
      // toast.error(
      //   log && log.message
      //     ? log.message.toString()
      //     : error.message
      //     ? error.message.toString()
      //     : error
      //     ? error.toString()
      //     : response.message.toString()
      // );
      return true;
    } else if (response.networkError) {
      // toast.error(response.networkError.toString());
    } else if (response.graphQLErrors && response.graphQLErrors.length > 0) {
      // toast.error(response.graphQLErrors[0].message.toString());
      // console.log("response.graphQLErrors[0].message.toString() error", response.graphQLErrors[0].message.toString())
      return true;
    } else if (response) {
      // toast.error(response.toString());
      // console.log("response.toString() error", response.toString())
      return true;
    }
  };

  const invoke = (
    request,
    variables = {},
    serviceType = 0,
    canToast,
    fetchPolicy = false,
    showError = true
  ) => {
    inProgress = true;
    let service = null;
    if (Number.isInteger(serviceType)) {
      switch (serviceType) {
        case 0:
          service = ClientProvider;
          break;
        default:
          break;
      }
    }

    return new Promise(async (resolve, reject) => {
      try {
        let response = {};
        if (JSON.stringify(request).includes("query")) {
          response = await service.query({
            query: request,
            variables,
            fetchPolicy: fetchPolicy ? "network-only" : "cache-first",
          });
        } else {
          response = await service.mutate({
            mutation: request,
            variables,
          });
        }
        // console.log("Syed Response in grapHandler:", response);
        const toResolve = canToast
          ? parseGenericResponse({ ...response })
          : true;
        if (toResolve) {
          resolve(response);
        } else {
          reject(response);
        }
        inProgress = false;
      } catch (error) {
        console.log("GraphHandler Error:", error);
        if (showError) {
          parseGenericResponse(error);
        }
        reject(error);
        inProgress = false;
        // if (canToast && error.graphQLErrors && error.graphQLErrors.length > 0) {
        //   toast.error(error.graphQLErrors[0].message.toString());
        // } else if (canToast && error) {
        //   toast.error(error.toString());
        //   // parseGenericRespone(error.response);
        // } else if (error.networkError) {
        //   console.log("error.networkError", error.networkError);
        //   toast.error(error.networkError.toString());
        // }
      }
    });
  };

  return { invoke, inProgress };
};

export default graphHandler;

export const serviceType = {
  profileService: 0,
  adminService: 1,
  licenseService: 2,
};
