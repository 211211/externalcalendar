import GET_MONTH_CALENDAR from '../../constants/ActionTypes';
import api from '../../api/index';
import helpers from '../../helpers/index';
import config from '../../config';

export default function getMonthCalendar(year, month) {
  return (dispatch) => {
    return api.get(`${config.hrefUrl}/${config.token}==/${year}/${month + 1}`)
      .then(helpers.checkStatus)
      .then(response => dispatch({ type: GET_MONTH_CALENDAR, data: response.data }))
      .catch((error) => {
        console.log('error getMonthCalendar', error);
      });
  };
}
