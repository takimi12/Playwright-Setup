import React, { useState, FormEvent } from 'react';

const List: React.FC = () => {

  const [elements, addElement] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addElement((prevElements) => [...prevElements, title]);
    setTitle(''); 
  }

  return (
    <div>
      <h2 data-testid="list-header">Element List</h2>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="element-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new element"
        />
        {/* Przycisk submit formularza */}
        <button data-testid="element-button" type="submit">Add</button>
      </form>
      <ul>
        {elements.map((item, index) => (
          <li key={index} data-testid="list-element">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
