import constant from "lodash/constant";

import {} from "./types";

export const handleError = ({ failed, err }) => ({
  type: ERROR_OCCURRED,
  err,
  failed,
});
