 import React from 'react';
 import './App.css';
  
 class SearchBar extends React.Component {
     state = { term: ''};
     
     onFormSubmit = (event) => {
         event.preventDefault();
        this.props.onSubmit(this.state.term);
     }
     render() {
         //renders a search bar --
         //the value of the input changes as the user enters stuff---
         //the value is getting saved in state
         return (
         <div className="ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">  
                 <div className="field">
                     <label>Search Weather</label>
                 <input type = "text" value = {this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
                 </div>
             </form>
         </div>
         );
     }
  }

 export default SearchBar;