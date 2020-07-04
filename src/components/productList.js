import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


export default class ProductList extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {
        data: [],
        count:0
      }
    }

    increment = (e) =>{
        this.setState({count: this.state.count + 1});
        // var iniArr=[];
        // iniArr.push(this.state.count)
        // var jsonInarra = JSON.stringify(iniArr)
        // localStorage.setItem("product_count" , jsonInarra);
        // console.log(JSON.parse(localStorage['iniArr']))
    }

    decrement = (e) =>{
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }
    } 
    componentDidMount () {
        fetch("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad")
        .then(res => res.json())
        .then(json => {
          this.setState({
            data: json,
          })
        });
    }
    render() {
        
        const options = {
            rewind: false,
            autoplay: false,
            slideBy: 1,
            dots: false,
            margin:0,
            autoplayTimeout:1500,
            nav: true,
            loop:false,
            responsive:{
              0:{
                  items:1,
              },
              576:{
                  items:1,
              },
              767:{
                  items:1,
              },
              1000:{
                  items:1,
              },
              1400:{
                  items:1,
              }
          }
        }
        const { data } = this.state
            return (
            <div className="tab_main">
               
                {data.map((val,i) => (
                    <React.Fragment key={i}>
                     <Tabs>
                        <OwlCarousel className='owl-theme' {...options}>
                        <TabList>
                        {val.table_menu_list.map((item,i) => (
                            <Tab key={i}>{item.menu_category}</Tab>
                            
                            ))}
                        </TabList>
                        </OwlCarousel>
                        {val.table_menu_list.map((data,i) => (
                            <TabPanel key={i}>
                            {data.category_dishes.map((items,i) => (
                                <div key={i} className="food_list_main">
                                    <div className="food_list">
                                        <h6 >{items.dish_name}</h6>
                                        <div className="amount_list"><span className="amount_list1">{items.dish_currency} {items.dish_price}</span> <span className="calorie_list">{items.dish_calories} Calories</span></div>
                                <p className="description">{items.dish_description}</p>
                                <div className="add_remove"><button onClick ={this.increment} type="button" className="btn_cmnn add_btn">+</button> {this.state.count }<button onClick ={this.decrement} type="button" className="btn_cmnn remov_btn">-</button></div>
                                <div className="customization">{items.dish_Availability ? 'Customization Available' : '' }</div>
                                    </div>
                                    <div className="food_list_img">
                                        <div className="dishs_img">
                                            <img src={items.dish_image} className="img-fluid dish_img" alt="no-data"></img>
                                        </div>
                                    </div>
                                    
                                </div>
                           ))}
                           </TabPanel>
                           ))}
                            
                        </Tabs>
                    </React.Fragment>
                ))}
                 
            </div>
        )
    }
}
