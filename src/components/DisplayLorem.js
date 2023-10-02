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
          <h4>A short Naration of Lorem Ipsum</h4>
          <ul>
          <li>{data.text}</li> 
          </ul>
          
          
        </div>
      )}
    </div>
  );
};

export default DisplayLorem;
