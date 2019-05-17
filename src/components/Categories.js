import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/actions';

class Categories extends React.Component{

  componentDidMount() {
    this.props.loadData(); 
  }

  render(){
    let myMenus = [], myCatMenus = []
    if(this.props.bool){
      myMenus = this.props.menus
    }
    if(this.props.catBool){
      myCatMenus = this.props.menu_items
    }
    return(
      <div className="ParentCat">
        <div className="MyCategories">
          <h1>Menu Categories</h1>
          <div>
          {
            myMenus.map((item, index) =>{
              return <div key={item.id}><button className="LinkButton" onClick={() => this.props.onMenuClick(item.short_name)}>{item.name}({item.short_name})</button></div>
            })
          }
          </div>
        </div>
        <div>

          {
            this.props.catBool && 
            <div className="ItemsInCategories">
            <h2>Items in Category: {this.props.shortName}</h2>  
          <table>
            <thead>
                <tr><td><strong>Name</strong></td><td><strong>Description</strong></td></tr>
            </thead>
            <tbody>
            {
                myCatMenus.map(item =><tr key={item.id}><td>{item.name}</td><td> {item.description}</td></tr>)
            }
            </tbody>
          </table>
          </div>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        menus: state.menus,
        bool: state.bool,
        catBool: state.catBool,
        short_name: state.short_name,
        loadData: state.loadData,
        menu_items: state.menu_items
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadData: () => dispatch(actionCreator.loadData()),
        onMenuClick: (short_name) => dispatch(actionCreator.menuClick(short_name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);