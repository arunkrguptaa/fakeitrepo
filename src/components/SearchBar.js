import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  handleTerm = e => {
    this.setState({
      term: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    this.props.searchterm(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="ui raised segment">
            <label>Image Search</label>
            <input
              value={this.state.term}
              onChange={this.handleTerm}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
