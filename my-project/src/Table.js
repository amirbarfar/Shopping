import React, { Component } from 'react'

export default class Table extends Component {

    clickHandler(id){
        this.props.onRemove(id)
    }

    addHandler(id){
      this.props.onAddCount(id)
    }

    removeHandler(id){
      this.props.onRemoveCount(id)
    }

  render() {
    return (
            <tr>
                <td>{this.props.id}</td>
                <td><img className='w-20 h-20 mx-auto' draggable="false" src={this.props.img} alt="" /></td>
                <td>{this.props.name}</td>
                <td>${this.props.price}</td>
                <td>
                  <button onClick={this.addHandler.bind(this , this.props.id)} className='w-8 h-8 mx-2 bg-green-500 text-white rounded-md text-xl'>+</button>
                  {this.props.count}
                  <button onClick={this.removeHandler.bind(this , this.props.id)} className='w-8 h-8 mx-2 bg-red-500 text-white rounded-md text-xl'>-</button>
                </td>
                <td><button onClick={this.clickHandler.bind(this , this.props.id)} className='w-44 p-3 rounded-md text-white bg-red-500'>Remove</button></td>
            </tr>
    )
  }
}
