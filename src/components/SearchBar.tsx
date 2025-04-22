import { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0366d6;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #0356b6;
  }
`;

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => (
  <SearchForm onSubmit={onSubmit}>
    <SearchInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter GitHub username"
    />
    <SearchButton type="submit">Search</SearchButton>
  </SearchForm>
);