import ENUMS from '../lib/enums';

export default function createResponse(response, httpStatusCode = ENUMS.HTTP_STATUS_CODES.OK) {
  return {
    status: httpStatusCode,
    body: response,
    contentType: 'application/json'
  };
}
