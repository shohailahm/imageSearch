import React from "react";
import './search.css';
import Tag from "./Tag";
const tags=['coffee','tea','marshmello','gold','silver','kitchen'];
class SearchBar extends React.Component {
  state = { term: "" };

  // By default, 'enter' refreshes page. Use preventDefault() to remove this default behavior.
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  onClicktag=(term)=>{
    this.props.onSubmit(term);
  }

  render() {
    return (
      <div className="scrsegment">
          <h3 style={{color:'#fff'}}>Free Stock Photos For Everything</h3>
          <div className="tags">
              <h5 style={{color:'#fff'}}>Searches: </h5>
              {
                  tags.map((tag)=>(<Tag tag={tag} clickable onClickTag={this.onClicktag}></Tag>))
              }
          </div>
        <form onSubmit={this.onFormSubmit} className="uiform">
          <div className="field">
            <input
              type="text"
              className="roundedInput"
              placeholder="Search Text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <button className="searchIcon" type="submit">
              &#9906;
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;