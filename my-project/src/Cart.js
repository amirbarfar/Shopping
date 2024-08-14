import React, { Component } from 'react'

export default class Cart extends Component {

    clickHandler(id){
        this.props.onGetId(id)
    }


  render() {
    return (
        <div onClick={() => this.clickHandler(this.props.id)} className="w-80 h-[460px] p-5 bg-[#f2f2f2] rounded-md flex justify-start items-start flex-col">
            <img src={this.props.img} alt="" className='w-80 h-80 mb-2'/>
            <h1 className='font-bold mb-2'>{this.props.title}</h1>
            <p className='mb-3'>{this.props.text}</p>
            <p>${this.props.priceBT}<span className='line-through opacity-55 mx-1'>${this.props.priceGT}</span></p>
        </div>
    )
  }
}
