import React, { Component } from 'react'
import Cart from './Cart.js'
import Table from './Table.js';

export default class Shopping extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : [
                {id :1 , img : "img/1.png" , title : "Navy KROOKED sweater" , text : "Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro colour way." , priceGT : "$100.00" , priceBT : 80 , count : 1},
                {id :2 , img : "img/2.png" , title : "Grey Civilist crew neck" , text : "100% cotton oversized Civilist crew neck sweater in steel grey with orange embroided logo." , priceGT : "$420.00" , priceBT : 399 , count : 1},
                {id :3 , img : "img/3.png" , title : "Krooked OG Bird Cuff beanie" , text : "Doubke stitched wool Orange krooked foldover beanie with yellow Bird Cuff logo" , priceGT : "$250.00" , priceBT : 210 , count : 1},
                {id :4 , img : "img/4.png" , title : "Coach bomber" , text : "Heavy duty, water resistant bomber jacket. Neoprene and polyester." , priceGT : "$610.00" , priceBT : 590 , count : 1},
                {id :5 , img : "img/5.png" , title : "Eco Theory autentic" , text : "Authentic Vans stle with white and navy mottled tie die. Made from 100% recycled materials." , priceGT : "$720.00" , priceBT : 690 , count : 1},
                {id :6 , img : "img/6.png" , title : "North Face 1990 wind breaker" , text : "Composition - 100% Polyester - a very strong synthetic fiber that." , priceGT : "$800.00" , priceBT : 790 , count : 1},
                {id :7 , img : "img/7.png" , title : "Milford Beanie" , text : "The Milford Beanie is a 100% acrylic slouch beanie with an old school Vans OTW clip label." , priceGT : "$450.00" , priceBT : 410 , count : 1},
                {id :8 , img : "img/8.png" , title : "Cream Death Star hood" , text : "Reverse weave 100% cotton Death Star hoodie with scenic retro vinyl." , priceGT : "$350.00" , priceBT : 340 , count : 1},
                {id :9 , img : "img/9.png" , title : "Louis Lopez One Star" , text : "Worn and designed by Louie Lopez, young icon and member of the CONS skate team." , priceGT : "$950.00" , priceBT : 910 , count : 1},
                {id :10 , img : "img/10.png" , title : "Checkerboard slip ons" , text : "Classic checkerboard slip ons with off-white under tone and reinforced waffle cup soles." , priceGT : "$870.00" , priceBT : 840 , count : 1},
                {id :11 , img : "img/11.png" , title : "Navy KROOKED sweater" , text : "Hand-woven 100% cotton KROOKED rugby jearsey in baby blue/navy retro colour way." , priceGT : "$780.00" , priceBT : 740 , count : 1},
                {id :12 , img : "img/12.png" , title : "Krooked OG Bird Cuff beanie" , text : "Doubke stitched wool Orange krooked foldover beanie with yellow Bird Cuff logo" , priceGT : "$620.00" , priceBT : 590 , count : 1},
            ] ,
            cart : JSON.parse(localStorage.getItem("Items")) ?? [],
            allPrice : 0,
            allCount : 0,
            moz : []
        }
    }


    clickHandler(id){

        let findItem = this.state.items.find((item)=>{
           return item.id === id
        })
        

        if (this.state.cart.length  >= 0) {

            let newItem = {
                id : this.state.cart.length + 1,
                img : findItem.img,
                name : findItem.title,
                price : findItem.priceBT,
                count : findItem.count++
           }
           this.setState({
               cart : [...this.state.cart , newItem],
            })

            if (localStorage.getItem("Items")) {
                this.state.cart.map((item)=>{
                    let oldItem = JSON.parse(localStorage.getItem("Items"))
                    if (item.name === findItem.title) {
                        item.count++;
                        this.setState({
                            cart : [...this.state.cart ],
                        })
                        localStorage.setItem("Items" , JSON.stringify([...this.state.cart ]))
                    }else{
                        localStorage.setItem("Items" , JSON.stringify([...oldItem , newItem]))
                    }
                })
            }else{
                localStorage.setItem("Items" , JSON.stringify([newItem]))
            }

        }
}

    removeHandler(id){
        let finditem1 = this.state.cart.find((item)=>{
            return item.id === id
         })
         
         let findItem2 = JSON.parse(localStorage.getItem("Items"))
         findItem2.splice(finditem1 , 1)
         localStorage.setItem("Items" , JSON.stringify(findItem2))

            this.state.cart.splice(finditem1 , 1)

            this.setState({
            cart : [...this.state.cart],
        })

        if (this.state.allPrice < 0) {
            this.setState({
                allPrice : [],
            })
        }
 
    }

    addCountHandler(id){
        let addCountId = this.state.cart.find((item)=>{
            return item.id === id
        })

        addCountId.count = addCountId.count + 1
        

        this.setState({
            cart : [...this.state.cart],
        })

        localStorage.setItem("Items" , JSON.stringify([...this.state.cart ]))

    }

    removeCountHandler(id){
        let removeCountId = this.state.cart.find((item)=>{
            return item.id === id
        })

        if (removeCountId.count >= 1) {
            removeCountId.count = removeCountId.count - 1
        }else{
            removeCountId.count = 0
        }

        this.setState({
            cart : [...this.state.cart]
        })

        localStorage.setItem("Items" , JSON.stringify([...this.state.cart ]))
    }

    submitHandler(){
        let sum = 0
        let count = 0

        if (this.state.cart.length < 0) {
            alert("Please select a product first !");
        }else{
           this.state.cart.forEach((item)=>{
              sum = sum + (item.price * item.count) 
           })
           this.state.cart.map((item)=>{
            count = count + item.count
           })
           this.setState({
               allPrice : sum,
               allCount : count
           })
        }
    }

    buyNowHandler(){
        this.setState({
            cart : [],
            allPrice : 0,
            allCount: 0
        })
        localStorage.setItem("Items" , JSON.stringify([]))
        alert("اینجا دیگه وقتی زده میشه باید بره سمت درگاه پرداخت و پرداخت بشه واسه همون خالی میشه همه چی :)")
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
            <div className='font-mono p-5 flex justify-start items-center gap-5 mx-auto container flex-wrap px-[88px]'>
              {
                  this.state.items.map((item)=>
                      <Cart {...item} key={item.id} onGetId={this.clickHandler.bind(this)}/>
                  )
              }

              <table className='w-full text-xl mt-10'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>count</th>
                        <th>Total price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                        {
                            this.state.cart.map((item)=> <Table {...item} key={item.id} onRemove={this.removeHandler.bind(this)} onAddCount={this.addCountHandler.bind(this)} onRemoveCount={this.removeCountHandler.bind(this)}/>)
                        }
                    </tbody>
              </table>

              <button onClick={this.submitHandler.bind(this)} className='w-full h-12 bg-gray-800 text-white rounded-md mt-10'>Submit</button>
              {
                this.state.allPrice > 0 && 
                <div className='w-[50%] h-44 mx-auto bg-slate-900 rounded-md text-white p-5 flex justify-center items-center flex-col gap text-xl'>
                    <div>
                        allPrice : {this.state.allPrice.toLocaleString()}
                    </div>
                    <div>
                        allCount : {this.state.allCount}
                    </div>
                    <button onClick={this.buyNowHandler.bind(this)} className='w-full h-12 bg-slate-400 mt-5 rounded-md'>buy now</button>
                </div>
              }
            </div>
        </div>
    )
  }
}
