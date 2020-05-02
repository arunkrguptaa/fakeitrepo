import React from "react";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };

  handleSearchTerm = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar searchterm={this.handleSearchTerm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
