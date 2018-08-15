import React from 'react';
import styled from 'styled-components';
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


export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleInputChange(e) {
    const { onInputChange } = this.props;
    onInputChange(e.target.value);
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  }

  handleSearch() {
    const { searchInput, search } = this.props;
    search(searchInput);
  }

  render() {
    const { searchInput } = this.props;
    return (
      <Container>
        <StyledInput
          type="text"
          value={searchInput}
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
