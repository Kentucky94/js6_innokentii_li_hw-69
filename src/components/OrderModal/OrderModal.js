import React, {Component} from 'react';

import './OrderModal.css';

class OrderModal extends Component {
  state = {
    name: '',
    address: '',
    phone: 0,
  };

  onChangeDataHandler = (event) => {
    const data = event.target.name;

    this.setState({
      [data]: event.target.value,
    });
  };

  render(){
    const dishInfo = this.props.dishes;
    const customerInfo = this.state;

    return (
      <div className='Modal' style={{
        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: this.props.show ? '1' : '0'
      }}>
        <h3>Order details</h3>
        <input onChange={this.onChangeDataHandler} type="text" name='name' placeholder='Enter name'/>
        <input onChange={this.onChangeDataHandler} type="text" name='address' placeholder='Enter address'/>
        <input onChange={this.onChangeDataHandler} type="number" name='phone' placeholder='Enter phone number'/>
        <button onClick={() => this.props.postOrders(dishInfo, customerInfo)}>Send Order</button>
        <button onClick={this.props.close}>Close</button>
      </div>
    );
  }
}

export default OrderModal;