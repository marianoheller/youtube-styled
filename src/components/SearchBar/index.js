import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  border-width: 1px;
  border-color: rgba(10,10,10,0.25);
  border-style: solid;
`;

const StyledInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  padding-left: 0.25rem;

  margin: 0.1rem 0;
`;


const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  display: flex;
  justify-content: center;
  align-items: center;

  appearance: unset;
  &:focus {
    outline: none;
  }
`;


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleInputChange(e) {
    this.setState({ input: e.target.value })
  }

  handleEnter(e) {
    if (e.keyCode === 13) this.handleSearch();
  }

  handleSearch() {
    const { search } = this.props;
    const { input } = this.state;
    search(input);
  }

  render() {
    const { input } = this.state;
    return (
      <Container>
        <StyledInput
          type="text"
          value={input}
          onChange={this.handleInputChange}
          onKeyDown={this.handleEnter}
        />
        <SearchButton onClick={this.handleSearch}>
          <FaSearch />
        </SearchButton>
      </Container>
    );
  }
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
}

export default SearchBar;
