import React, {Component} from 'react';
import './App.css'
import {getDishes} from "./store/actions/dishesActions";
import {connect} from "react-redux";
import DishItem from "./components/DishItem/DishItem";
import {addDish, getTotal, postOrder, removeDish} from "./store/actions/cartActions";
import CartItem from "./components/CartItem/CartItem";
import OrderModal from "./components/OrderModal/OrderModal";

class App extends Component {
  state = {
    isModal: false,
  };

  componentDidMount() {
    this.props.getDishes();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let total = 0;

    Object.keys(this.props.cartDishes).map(dishName => {
      const dishQty = this.props.cartDishes[dishName];
      const dishPrice = this.props.dishes.filter(dish => dish.name === dishName)[0].price;
      if(dishQty && dishPrice){
        total = total + dishPrice * dishQty
      }
    });

    this.props.getTotal(total);
  }

  modalShow = () => {
    this.setState({
      isModal: true,
    })
  };

  modalHide = () => {
    this.setState({
      isModal: false,
    })
  };

  render() {
    const dishes = this.props.dishes.map(dish =>
      <DishItem
        key={dish.name}
        name={dish.name}
        price={dish.price}
        image={dish.image}
        addDish={this.props.addDish}
      />
      );

    const cartDishes = Object.keys(this.props.cartDishes).map(cartDish => {
      const dishInfo = this.props.dishes.filter(dish => dish.name === cartDish)[0];

      if(dishInfo){
        const price = dishInfo.price * this.props.cartDishes[cartDish];

        return <CartItem
          key={cartDish}
          name={cartDish}
          qty={this.props.cartDishes[cartDish]}
          remove={this.props.removeDish}
          price={price}
        />
      }
    });

    return (
      <div className='App'>
        <div className="dishesContainer">
          {dishes}
        </div>
        <div className="cartContainer">
          {cartDishes}
          <h3>Delivery Price: {this.props.deliveryPrice}</h3>
          <h3>Total Price: {this.props.totalPrice}</h3>
          <button onClick={this.modalShow}>Place Order</button>
        </div>
        <OrderModal
          show={this.state.isModal}
          close={this.modalHide}
          dishes={this.props.cartDishes}
          postOrders={this.props.sendOrder}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dishes: state.dishes.dishes,
  cartDishes: state.cart.dishes,
  deliveryPrice: state.cart.deliveryPrice,
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  getDishes: () => dispatch(getDishes()),
  addDish: dishName =>  dispatch(addDish(dishName)),
  removeDish: dishName => dispatch(removeDish(dishName)),
  getTotal: orderSum => dispatch(getTotal(orderSum)),
  sendOrder: (dishesData, customerData) => dispatch(postOrder(dishesData, customerData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);