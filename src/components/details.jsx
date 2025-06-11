import React from 'react'
import { useParams } from "react-router-dom";

const details = () => {
    const itemDescriptions = {
  1: "Description for Item 1",
  2: "Description for Item 2",
  3: "Description for Item 3",
};
  return (
    <div>
      const { id } = useParams();
  const title = `Item ${id}`;
  const description = itemDescriptions[id];

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
    </div>
  )
}

export default details
