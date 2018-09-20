import React, { Component } from "react";
import "./FoodList.css";
import header from '../../config/keys';
import axios from "axios";


class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodForm: '',
      foods: []
    }
  }

  componentDidMount() {
    this.getFoods();
    setTimeout(() => console.log(this.state.foods), 2000)
  }

  getFoods = () => {
    axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=peach&detailed=true', { headers: header })
      .then(foods => {
        let food = [...foods.data.common];
        this.setState({ foods: food });
      });
  };

  filterFoods = (foodArr) => {
    let newFoods = foodArr.filter(food => {

    })
  }

  render() {
    return (
      <div className="foodlist">
        <form>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Todays Calories
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control float-right"
                placeholder="search for foods"
              />
            </div>
          </div>
        </form>
        <div>
          <ul className="list-group">
            {/* <h4>Common</h4> */}
            {this.state.foods.map(food => {
              return <li className="list-group-item">
                <img className='foodlist__photo' src={food.photo.thumb === null ? "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png" : food.photo.thumb} />
                <span className='foodlist__food-label'>{food.food_name}</span>
              </li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FoodList;
