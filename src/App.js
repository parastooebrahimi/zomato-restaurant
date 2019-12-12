import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card.js';
import Sidebar from './Sidebar.js';
import HeaderLeft from './HeaderLeft.js'
import InfiniteScroll from 'react-infinite-scroller';

class App extends React.Component {
  state = {
    resturants: [],
    selectedRestaurantId: null,
    nextPage:0,
    hasMore:true,
  }

  // componentDidMount() {
  //   axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&start=40&q=Adelaide&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
  //     response => {
  //       this.setState({
  //         resturants: response.data.restaurants,
          
  //       })
  //       console.log(response)
        


  //     }

  //   )
  // }

  selectRestaurant(id) {
    this.setState({ selectedRestaurantId: id })

  }
  handleLoadMore(){
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&start=${this.state.nextPage}&q=Adelaide&apikey=07f3b7cdf9aab5e68f4dfbb516560b4d`).then(
      response => {
       
        console.log(this.state.resturants)
        this.setState(prevState =>({
          resturants:[...prevState.resturants ,...response.data.restaurants],
          //resturants: response.data.restaurants,
          hasMore: response.data.results_found == response.data.results_start ? false : true,
          nextPage: response.data.results_start + 20,
          
         
          
        }))
        
      }
      

    )
  }

  render() {

    
    return (

      <div className="App">

        <div className="header">

          <div className="header-left">


            <HeaderLeft />


          </div>

          <div className="header-right">

          </div>

        </div>


        <div>
          <InfiniteScroll className="sideBar cursor"
            pageStart={20}
            loadMore={this.handleLoadMore.bind(this)}
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
