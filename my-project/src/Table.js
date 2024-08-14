import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
            <tr>
                <td><img className='w-20 h-20 mx-auto' src={this.props.img} alt="" /></td>
                <td>{this.props.name}</td>
                <td>${this.props.price}</td>
                <td>{this.props.count}</td>
            </tr>
    )
  }
}
