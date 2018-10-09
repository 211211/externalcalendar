import GET_MONTH_CALENDAR from '../../constants/ActionTypes';

const initial = {
  eventForMonth: [],
};

const calendar = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_MONTH_CALENDAR:
      return {
        ...state,
        eventForMonth: data,
      };
    default:
      return state;
  }
};
export default calendar;
