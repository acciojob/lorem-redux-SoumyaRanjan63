import { FETCHLOREM, RECEIVELOREM } from "./actionType"; 
import axios from "axios";

export const fetchlorem = () => {
  return {
    type: FETCHLOREM,
  };
};

export const receivelorem = (data) => {
  return {
    type: RECEIVELOREM,
    payload: data,
  };
};

export function fetchLoremIpsum() {
  return (dispatch) => {
    dispatch(fetchlorem());
    const apikey="tc0iUx2OggsS5car04TjBQ==i1aQ7HOEfY0SzoQo"
    const header ={
        "X-Api-Key":apikey
    }
    axios
      .get("https://api.api-ninjas.com/v1/loremipsum?paragraphs=5",{
        headers:header,
      })
      .then((response) => dispatch(receivelorem(response.data)))
      .catch((err) => console.error(err)); 
  };
}
