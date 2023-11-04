import { BiSearch } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styles';

const Searchbar = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    return form;
  };
  <SearchbarHeader>
    <SearchForm onSubmit={handleSubmit}>
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
  </SearchbarHeader>;
};

export default Searchbar;
