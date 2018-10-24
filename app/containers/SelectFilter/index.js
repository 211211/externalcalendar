import React from "react";
import Select from "react-select";
import chroma from "chroma-js";
import "./selectFilter.scss";
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isSelected, isFocused }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? "#edf0f2"
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "black"
            : "black"
          : data.color,
      ":before": {
        background: data.color
      }
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#edf0f2",
      paddingLeft: "5px",
      ":before": {
        background: data.color
      }
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
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
