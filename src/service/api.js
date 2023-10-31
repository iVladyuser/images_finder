import axios from 'axios';
import { Notify } from 'notiflix';
import { paramsForNotify } from 'components/App';

const KEY = '39440146-e742bf3c7a957201e6286a658';
const URL = 'https://pixabay.com/api/';

export async function fetchPhoto(search, page, perPage) {
  const url = `${URL}?key=${KEY}&q=${search}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`;
  const response = await axios.get(url);
  return response.data;
}

export function onFetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    paramsForNotify
  );
}
