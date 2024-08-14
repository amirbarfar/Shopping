import React, { Component } from 'react'
import Cart from './Cart.js'
import Table from './Table.js';

export default class Shopping extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : [
                {id :1 , img : "img/1.png" , title : "Navy KROOKED sweater" , text : "Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro colour way." , priceGT : "$100.00" , priceBT : 80 , count : 0},
                {id :2 , img : "img/2.png" , title : "Grey Civilist crew neck" , text : "100% cotton oversized Civilist crew neck sweater in steel grey with orange embroided logo." , priceGT : "$420.00" , priceBT : 399 , count : 0},
                {id :3 , img : "img/3.png" , title : "Krooked OG Bird Cuff beanie" , text : "Doubke stitched wool Orange krooked foldover beanie with yellow Bird Cuff logo" , priceGT : "$250.00" , priceBT : 210 , count : 0},
                {id :4 , img : "img/4.png" , title : "Coach bomber" , text : "Heavy duty, water resistant bomber jacket. Neoprene and polyester." , priceGT : "$610.00" , priceBT : 590 , count : 0},
                {id :5 , img : "img/5.png" , title : "Eco Theory autentic" , text : "Authentic Vans stle with white and navy mottled tie die. Made from 100% recycled materials." , priceGT : "$720.00" , priceBT : 690 , count : 0},
                {id :6 , img : "img/6.png" , title : "North Face 1990 wind breaker" , text : "Composition - 100% Polyester - a very strong synthetic fiber that." , priceGT : "$800.00" , priceBT : 790 , count : 0},
                {id :7 , img : "img/7.png" , title : "Milford Beanie" , text : "The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label." , priceGT : "$450.00" , priceBT : 410 , count : 0},
                {id :8 , img : "img/8.png" , title : "Cream Death Star hood" , text : "Reverse weave 100% cotton Death Star hoodie with scenic retro vinyl." , priceGT : "$350.00" , priceBT : 340 , count : 0},
                {id :9 , img : "img/9.png" , title : "Louis Lopez One Star" , text : "Worn and designed by Louie Lopez, young icon and member of the CONS skate team." , priceGT : "$950.00" , priceBT : 910 , count : 0},
                {id :10 , img : "img/10.png" , title : "Checkerboard slip ons" , text : "Classic checkerboard slip ons with off-white under tone and reinforced waffle cup soles." , priceGT : "$870.00" , priceBT : 840 , count : 0},
                {id :11 , img : "img/11.png" , title : "Navy KROOKED sweater" , text : "Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro colour way." , priceGT : "$780.00" , priceBT : 740 , count : 0},
                {id :12 , img : "img/12.png" , title : "Krooked OG Bird Cuff beanie" , text : "Doubke stitched wool Orange krooked foldover beanie with yellow Bird Cuff logo" , priceGT : "$620.00" , priceBT : 590 , count : 0},
            ] ,
            cart : []
        }
    }


    clickHandler(id){

        let findItem = this.state.items.find((item)=>{
           return item.id === id
        })

        let newItem = {
           id : findItem.id,
           img : findItem.img,
           name : findItem.title,
           price : findItem.priceBT,
           count : findItem.count + 1
        }

        this.setState({
            cart : [...this.state.cart , newItem],
        }) 
    }

    removeHandler(id){
        let findId = this.state.cart.find((item)=>{
            return item.id === id
         })

         this.state.cart.splice(findId , 1)

         this.setState({
            cart : [...this.state.cart]
         })
 
    }
  render() {
    return (
        <div>
            <nav>
                <ul className='flex justify-center items-center bg-slate-800 w-full gap-5 text-white p-8 font-mono text-xl mb-16'>
                    <li><a href="">Tops</a></li>
                    <li><a href="">Sweaters</a></li>
                    <li><a href="">Pants</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Underwear</a></li>
                    <li><a href="">Accesories</a></li>
                </ul>
            </nav>
            <div className='font-mono p-5 flex justify-start mb-96 items-center gap-5 mx-auto container flex-wrap px-[88px]'>
              {
                  this.state.items.map((item)=>
                      <Cart {...item} key={item.id} onGetId={this.clickHandler.bind(this)}/>
                  )
              }

              <table className='w-full text-xl mt-10'>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                        {
                            this.state.cart.map((item)=>
                                <Table {...item} key={item.id} onRemove={this.removeHandler.bind(this)}/>
                            )
                        }
                    </tbody>
              </table>
            </div>
        </div>
    )
  }
}
