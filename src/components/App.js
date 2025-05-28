import React from 'react'

const App = () => {
  const relatives = ['Grandparents', 'Uncle and Aunt', 'Cousins', 'Sister\'s Family', 'Family Friends'];

  return (
    <ol key="relativeList">
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
      ))}
    </ol>
  );
};

export default App
