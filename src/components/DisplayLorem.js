import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoremIpsum } from "../redux/action/fetchAction";

const DisplayLorem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loremipsum.content); 

  useEffect(() => {
    dispatch(fetchLoremIpsum());
  }, [dispatch]);

  return (
    <div>
      {data && (
        <div>
          <h1>A short Naration of Lorem Ipsum</h1>
          <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
          <ul>
          <li>{data.text}</li> 
          </ul>
                   
        </div>
      )}
    </div>
  );
};

export default DisplayLorem;
