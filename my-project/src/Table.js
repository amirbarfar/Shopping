import React, { Component } from 'react'

export default class Table extends Component {

    clickHandler(id){
        this.props.onRemove(id)
    }

  render() {
    return (
            <tr>
                <td>{this.props.id}</td>
                <td><img className='w-20 h-20 mx-auto' src={this.props.img} alt="" /></td>
                <td>{this.props.name}</td>
                <td>${this.props.price}</td>
                <td>{this.props.count}</td>
                <button onClick={this.clickHandler.bind(this , this.props.id)} className='w-44 p-3 rounded-md text-white bg-red-500'>Remove</button>
            </tr>
    )
  }
}
