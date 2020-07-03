import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class productList extends Component {

    constructor(props) 
    {
      super(props);
      this.state = {
        data: [],
      }
    }
    componentDidMount () {
        fetch("https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad")
        .then(res => res.json())
        .then(json => {
            console.log(json)
          this.setState({
            data: json,
          })
        });
    }
    render() {
        // {item.menu_category}
        const { data } = this.state
            return (
            <div className="tab_main">
                {data.map((val,i) => (
                    <React.Fragment key={i}>
                     <Tabs>
                        <TabList>
                        {val.table_menu_list.map((item,i) => (
                            <Tab key={i}>{item.menu_category}</Tab>
                            
                            ))}
                        </TabList>
                        {val.table_menu_list.map((data,i) => (
                           <TabPanel key={i}>
                            {data.category_dishes.map((items,i) => (
                                <div key={i} className="food_list_main">
                                    <div className="food_list">
                                        <h2 >{items.dish_name}</h2>
                                        <div className="amount_list"><span className="amount_list1">{items.dish_currency} {items.dish_price}</span> <span className="calorie_list">{items.dish_calories} Calories</span></div>
                                <p className="description">{items.dish_description}</p>
                                <div className="add_remove"><button type="button" className="add_btn">+</button> 0 <button type="button" className="remov_btn">-</button></div>
                                <div>{items.dish_Availability ? 'Customization Available' : '' }</div>
                                    </div>
                                    <div className="food_list">
                                        <img src={items.dish_image} className="img-fluid dish_img"></img>
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
