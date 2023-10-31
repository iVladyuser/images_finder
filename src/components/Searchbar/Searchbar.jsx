import { BiSearch } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styles';

const Searchbar = ({ onSubmitSearchBar }) => (
  <SearchbarHeader>
    <SearchForm onSubmit={onSubmitSearchBar}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        <BiSearch style={{ margin: 10, height: 20, width: 20 }} />
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images
            and photos"
      ></SearchFormInput>
    </SearchForm>
  </SearchbarHeader>
);

export default Searchbar;
