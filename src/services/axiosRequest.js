import axios from 'axios';

const resources = new Map();

async function axiosRequest(serviceObject) {
  console.log('~ axiosRequest');

  // start cancel with undefined
  let cancel;

  if (cancel) {
    // Cancel the previous request before making a new request
    cancel.cancel();
  }

  // Create a new CancelToken
  cancel = axios.CancelToken.source();

  try {
    if (resources.has(serviceObject)) {
      // Return result if it exists
      return resources.get(serviceObject);
    }

    // cancelToken: new axios.CancelToken(c => (cancel = c)), this add request token to cancel value
    const res = await axios(serviceObject);
    const result = res.data;
    // Store response
    resources.set(serviceObject, result);
    return result;
  } catch (err) {
    if (axios.isCancel(err)) {
      // Handle if request was cancelled
      console.error('~ Request canceled', err);
    } else {
      // Handle usual errors
      console.error('~ Something went wrong: ', err);
    }
  }
}

export default axiosRequest;
