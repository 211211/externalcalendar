import React from "react";
import chroma from "chroma-js";
import Select from "react-select";
import "./selectFilter.scss";
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
      cursor: isDisabled ? "not-allowed" : "default"
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
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
          styles={colourStyles}
          options={this.state.optionsSelect}
          classNamePrefix="my-select"
        />
      </div>
    );
  }
}

export default SelectFilter;
