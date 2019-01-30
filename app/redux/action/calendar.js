import {
  GET_MONTH_CALENDAR,
  GET_FILTER_EVENTtYPE
} from "../../constants/ActionTypes";
import api from "../../api/index";
import helpers from "../../helpers/index";
import config from "../../config";

export function getMonthCalendar(year, month) {
  if (config.token === null) {
    return dispatch => {
      return dispatch({
        type: GET_MONTH_CALENDAR,
        data: []
      });
    };
  }

  const url = `${config.hrefUrl}events/external/${
    config.token
  }/${year}/${month + 1}`;

  return dispatch => {
    return api
      .get(url)
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({ type: GET_MONTH_CALENDAR, data: response.data })
      )
      .catch(error => {
        console.log("error getMonthCalendar", error);
      });
  };
}
export function getFilterEventType() {
  if (config.token === null) {
    return dispatch => {
      return dispatch({
        type: GET_FILTER_EVENTtYPE,
        data: []
      });
    };
  }

  const url = `${config.hrefUrl}lookups/eventTypes/external/${config.token}`;
  return dispatch => {
    return api
      .get(url)
      .then(helpers.checkStatus)
      .then(response =>
        dispatch({ type: GET_FILTER_EVENTtYPE, data: response.data })
      )
      .catch(error => {
        console.log("error GET_FILTER_EVENTtYPE", error);
      });
  };
}
