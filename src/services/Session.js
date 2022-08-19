/* global window, localStorage */
import Http from "./Http";

export default class SessionService {
  static NAME(params) {
    return Http.post("path", params, true);
  }
}
