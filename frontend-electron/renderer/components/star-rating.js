import React, { Component } from "react";

import StarRatings from "react-star-ratings";

import { Fieldset } from "react95";

export default class StarRating extends Component {
  static async getInitialProps() {
    // const res = await fetch('http://localhost:4000/photos')
    // const images = await res.json()
    // return { images }
  }

  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  };

  componentWillMount() {
    this.setState({
      //images: this.props.images
      rating: 0
    });
  }
  render() {
    const string = "Start";
    // const logoIcon =
    return (
      <>
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
        {this.state.rating !== 0 && <Fieldset style={{ marginTop: '20px' }}>
          <p>Thank you! 😃 Your rating: {this.state.rating} stars.</p>
        </Fieldset>}
      </>
    );
  }
}
