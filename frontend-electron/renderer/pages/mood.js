import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import {
  reset,
  themes,
  List,
  Button,
  AppBar,
  Toolbar,
  Menu,
  LogoIcon,
  TextField,
  ListItem,
  Window,
  WindowContent,
  WindowHeader,
  Tabs,
  Tab,
  TabBody,
  Fieldset,
  NumberField,
  Checkbox,
  Divider
} from "react95";

export default class Main extends Component {
  componentWillMount() {
    this.setState({
      //images: this.props.images
      activeTab: 0,
      rating: 0
    });
  }

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  };

  changeTab = e => {
    this.setState({
      activeTab: e
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <Tabs value={activeTab} onChange={this.changeTab}>
          <Tab value={0}>Rate it!</Tab>
          <Tab value={1}>📈 Stats</Tab>
          <Tab value={2}>More stuff</Tab>
        </Tabs>
        <div style={{ height: 300 }}>
          {activeTab === 0 && (
            <TabBody>
              <Fieldset label="Rate your day:">
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="red"
                  starEmptyColor="white"
                  starDimension="40px"
                  starSpacing="15px"
                  changeRating={this.changeRating}
                  numberOfStars={6}
                  name="rating"
                />
              </Fieldset>
            </TabBody>
          )}
          {activeTab === 1 && <TabBody>wow wow..</TabBody>}
          {activeTab === 2 && (
            <TabBody>
              {" "}
              <Fieldset label="Order:">
                <div style={{ padding: "0.5em 0 0.5em 0" }}>Amount:</div>
                <NumberField
                  width={"100%"}
                  min={0}
                  value={0}
                  onChange={() => null}
                />
                <Checkbox
                  name="shipping"
                  value="fast"
                  label="Fast shipping"
                  onChange={() => null}
                  checked
                />
              </Fieldset>
            </TabBody>
          )}
        </div>
      </>
    );
  }
}
