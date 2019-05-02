import React, { Component } from "react";

import StarRatings from "react-star-ratings";

import { Fieldset, Button } from "react95";

import { fetchData, postMood } from "../api";

export default class StarRating extends Component {
  static async getInitialProps() {
    // const res = await fetch('http://localhost:4000/photos')
    // const images = await res.json()
    // return { images }
  }

  state = {
    //images: this.props.images
    rating: 0,
    mood: this.props.mood
  };

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  };

  componentWillMount() {
    console.log(this.props);
  }

  saveRating = async () => {
    // POST
    try {
      const mood = await postMood({
        mood: this.state.rating,
        date: this.props.today
      });
      console.log(mood);
    } catch (e) {
      console.log(e);
    }
    // REFETCH
    try {
      const mood = await fetchData();
      console.log(mood);
      this.setState({
        mood: mood
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { mood } = this.state;
    const isDisabled = mood === 0 ? false : true;
    return (
      <>
        {!isDisabled && (
          <StarRatings
            rating={this.state.rating}
            starRatedColor="red"
            starEmptyColor="white"
            starDimension="40px"
            starSpacing="15px"
            changeRating={this.changeRating}
            numberOfStars={6}
            name="rating"
            isSelectable={isDisabled}
          />
        )}
        {!isDisabled && (
          <Button
            style={{ width: "100px", marginTop: "20px" }}
            disabled={isDisabled}
            onClick={this.saveRating}
            size={"lg"}
            square
          >
            Save
          </Button>
        )}

        {isDisabled && (
          <Fieldset style={{ marginTop: "20px" }}>
            <p>You rated your day with {mood} stars. Rate again tomorrow! 😜</p>
          </Fieldset>
        )}
      </>
    );
  }
}
