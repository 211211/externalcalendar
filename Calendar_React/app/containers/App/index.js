import React from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import getMonthCalendar from '../../redux/action/calendar';
import './app.scss';
import Calendar from '../Calendar';
import ModalEventDetail from '../ModalEventDetail';

const localizer = BigCalendar.momentLocalizer(moment);

const mapStateToProps = ({ calendar }) => ({
  calendar,
});
const mapDispatchToProps = dispatch => ({
  getMonthCalendar: (year, month) => dispatch(getMonthCalendar(year, month)),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearEvents: 2018,
      monthEvents: 0,
      isOpen: false,
      idEvent: 0,
    };
    this.filterEvents = [];
    this.searchEventDetail = {};
  }

  componentDidMount() {
    this.props.getMonthCalendar(this.state.yearEvents, this.state.monthEvents);
  }

  onSelectEvents = (a) => {
    this.setState({ isOpen: !this.state.isOpen, idEvent: a.id });
  };

  getOnNavigate = (date) => {
    const nextYear = date.getFullYear();
    const nextMonth = date.getMonth();
    if (this.state.yearEvents === nextYear) {
      if (this.state.monthEvents !== nextMonth) {
        this.props.getMonthCalendar(this.state.yearEvents, nextMonth);
        this.setState({ monthEvents: nextMonth });
      }
    } else {
      this.props.getMonthCalendar(nextYear, nextMonth);
      this.setState({ yearEvents: nextYear, monthEvents: nextMonth });
    }
  };

  filterMonthEvents = (events) => {
    const convertEvents = [];
    const hashMapEvents = {};
    const regExp = /\(([^)]+)\)/;
    events.forEach((item) => {
      const convertEvent = {
        title: item.eventName,
        id: item.eventId,
        desc: item.description,
        start: new Date(Number(regExp.exec(item.startDate)[1])),
        end: new Date(Number(regExp.exec(item.endDate)[1])),
      };
      convertEvents.push(convertEvent);

      hashMapEvents[item.eventId] = item;
    });
    this.searchEventDetail = hashMapEvents;
    this.filterEvents = convertEvents;
  };
  isOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    if (this.props.calendar.eventForMonth.length > 0) {
      this.filterMonthEvents(this.props.calendar.eventForMonth);
    }
    return (
      <div className="app-wrapper">
        <Calendar
          events={this.filterEvents}
          onNavigate={this.getOnNavigate}
          localizer={localizer}
          onSelectEvent={this.onSelectEvents}
        />
        <ReactModal
          ariaHideApp={false}
          isOpen={this.state.isOpen}
          className="Modal"
          shouldCloseOnOverlayClick
          onRequestClose={this.isOpenModal}
        >
          <ModalEventDetail eventDetail={this.searchEventDetail[this.state.idEvent]} />
        </ReactModal>
      </div>
    );
  }
}
App.propTypes = {
  getMonthCalendar: PropTypes.func.isRequired,
  calendar: PropTypes.shape({
    eventForMonth: PropTypes.array.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
