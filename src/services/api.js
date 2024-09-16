import axios from 'axios';

const API_URI = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
  const { params, urlParams, ...body } = requestData;

  return await axios({
    method: serviceUrlObject.method,
    url: `${API_URI}/${serviceUrlObject.endpoint}/${type}${urlParams ? `/${urlParams}` : ''}`,
    data: body, // Only sending the body part
    params: params, // Including any query parameters if provided
  });
}

export default API_GMAIL;
