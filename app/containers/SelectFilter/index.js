import React from "react";
import Select from "react-select";
import "./selectFilter.scss";
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data }) => {
    return {
      ...styles,
      ":before": {
        background: data.color
      }
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#4A8AC0",
      paddingLeft: "5px",
      ":before": {
        background: data.color
      }
    };
  },
  multiValueRemove: styles => ({
    ...styles,
    color: "black",
    ":hover": {
      color: "white"
    }
  })
};
class SelectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      optionsSelect: [],
      eventsType: []
    };
  }
  handleChangeSelect = selectedOption => {
    const hashMapFilter = {};
    selectedOption.forEach(item => {
      hashMapFilter[item.value] = item;
    });
    this.props.filterTypeSelect(hashMapFilter);
    this.setState({ selectedOption });
  };
  selectOptions = () => {
    if (this.state.eventsType !== this.props.calendar.eventFilterTypes) {
      this.setState({ eventsType: this.props.calendar.eventFilterTypes });
      const options = [];
      this.props.calendar.eventFilterTypes.map(item => {
        return options.push({
          value: item.eventTypeId,
          label: item.eventTypeName,
          color: `#${item.eventColor}`
        });
      });
      this.setState({ optionsSelect: options });
    }
  };
  render() {
    return (
      <div className="app-wrapper-select" onClick={this.selectOptions}>
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChangeSelect}
          closeMenuOnSelect={false}
          isMulti
          hideSelectedOptions={false}
          styles={colourStyles}
          options={this.state.optionsSelect}
          classNamePrefix="my-select"
        />
      </div>
    );
  }
}

export default SelectFilter;
