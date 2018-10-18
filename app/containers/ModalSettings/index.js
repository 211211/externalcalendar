import React from "react";
import "./ModalSettings.scss";
import iconTick from "../../assets/images/tick.png";

export default class ModalSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.skins
    };
  }
  changeColor = newColor => {
    this.setState({ color: newColor });
    this.props.changeColor(newColor);
  };
  render() {
    const arrColor = [
      "indigo",
      "cyan",
      "amber",
      "deep-orange",
      "pink",
      "blue",
      "deep-purple",
      "green",
      "dark-theme"
    ];
    return (
      <div className="modalSettings">
        <div className={`modalSettings_header ${this.state.color}`}>
          Service Panel
        </div>
        <div className="modalSettings_content">
          <span className="modalSettings_content-title">Sidenav</span>
          <ul className="modalSettings_content_list">
            {arrColor.map(item => {
              return (
                <li
                  className="modalSettings_content_list-item"
                  key={item}
                  onClick={() => this.changeColor(item)}
                >
                  <span
                    className={`modalSettings_content_list-item-span ${
                      item === this.state.color ? `${item} activeColor` : item
                    }`}
                  >
                    <img
                      className="modalSettings_content_list-item-span_img"
                      src={iconTick}
                      alt="iconTick"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
