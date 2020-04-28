import React, { Component } from "react";
import axios from "axios";
import Loading from "../Loading";
import Heading from "../Heading";
import BookCard from "../BookCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "Harry Potter",
      bookList: [],
      searchMessage: "",
      bookIsLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.searchTerm) {
      this.setState({ bookIsLoading: true, searchTerm: this.state.searchTerm });
      this.fetchBooks();
    }
  }

  fetchBooks() {
    const term = this.state.searchTerm;

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .then((response) => {
        this.setState({ bookIsLoading: false });

        if (response.data.totalItems === 0) {
          this.setState({
            bookList: [],
            searchMessage: `No books found for ${term}`,
          });
        } else {
          this.setState({
            bookList: response.data.items,
            searchMessage: `Your results for ${term}`,
          });
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Heading>Books App</Heading>
        <h1 className="heading2">Books App2</h1>
        <form onClick={this.handleSubmit}>
          <label htmlFor="searchTerm" style={{ display: "block" }}>
            Search for a book:
          </label>
          <br />
          <input
            id="searchTerm"
            name="searchTerm"
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <h4>{this.state.searchMessage}</h4>
        {this.state.bookIsLoading && <Loading />}
        {this.state.bookIsLoading && <Loading />}
        {this.state.bookIsLoading && <Loading />}
        {this.state.bookIsLoading && <Loading />}
        <div className="bookList">
          {this.state.bookList.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              link={book.volumeInfo.previewLink}
              description={book.volumeInfo.description}
              imgUrl={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail
              }
              categories={book.volumeInfo.categories}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
