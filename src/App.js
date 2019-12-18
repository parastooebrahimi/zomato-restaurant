import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card.js';
import Cuisine from './Cuisine.js';
import Sidebar from './Sidebar.js';
import HeaderLeft from './HeaderLeft.js';
import InfiniteScroll from 'react-infinite-scroller';

class App extends React.Component {
  state = {
    resturants: [],
    SelectedCuisine:[],
    cuisine: [],
    selectedRestaurantId: null,
    nextPage:0,
    hasMore:true,
    isChecked:false,
  }

  componentDidMount() {
    axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=297&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
      response => {
        this.setState({
          cuisine: response.data.cuisines.splice(0,11)
          
        })
       
       
      }

    )
  }

  selectRestaurant(id) {
    this.setState({ selectedRestaurantId: id })

  }
  
  handleCuisineSearch(){
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&start=${this.state.nextPage}&cuisines=${this.state.SelectedCuisine}&q=Adelaide&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
      response => {
       
        this.setState({
          resturants: response.data.restaurants,
        hasMore: response.data.results_found == response.data.results_start ? false : true,
         nextPage: response.data.results_start<20 ? null : response.data.results_start + 20 ,

          
        })
        
      }
      

    )

  }
  handleLoadMore(){


    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&start=${this.state.nextPage}&cuisines=${this.state.SelectedCuisine}&q=Adelaide&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
      response => {
       
        this.setState(prevState =>({
          resturants:[...prevState.resturants ,...response.data.restaurants],
          //resturants: response.data.restaurants,
          hasMore: response.data.results_found == response.data.results_start ? false : true,
          nextPage: response.data.results_start + 20,
          
         
          
        }))
        
      }
      

    )
  }
  SelectedCuisineId(id){
    this.setState(prevState =>({
      SelectedCuisine:[...prevState.SelectedCuisine ,id],

    }))

  }

  render() {

    
    return (

      <div className="App">

        <div className="header">

          <div className="header-left">
            <HeaderLeft />
          
          </div>

          <div className="header-right">
          <div>
          <label style={{ fontSize: '15px', color: '#484848', fontWeight: 'bold' }}>CUISINE</label> 
          </div>
          {this.state.cuisine.map((item, index) =>
                 <Cuisine key={index} name={item.cuisine.cuisine_name} id={item.cuisine.cuisine_id} 
                  clicked={() => { this.SelectedCuisineId(item.cuisine.cuisine_id) }}
                  />)}
                  
           
          </div>

        </div>


        <div>
          <InfiniteScroll className="sideBar cursor"
            pageStart={0}
            loadMore={this.state.SelectedCuisine.length>0 ? this.handleCuisineSearch.bind(this) : this.handleLoadMore.bind(this)}
            hasMore={this.state.hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
             {this.state.resturants.map((item, index) =>
                 <Sidebar key={index} name={item.restaurant.name} id={item.restaurant.id}
                 clicked={() => { this.selectRestaurant(item.restaurant.id) }} />)}
          
          </InfiniteScroll>
         


        </div>

        <div className="content">

          <Card id={this.state.selectedRestaurantId} />


        </div>

      </div>
    );
  }
}

export default App;
