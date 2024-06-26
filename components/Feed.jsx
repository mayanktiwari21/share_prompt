'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPrompts(data);
    };

    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          required
          type="text"
          className="search_input peer"
          placeholder="Search for a tag or a user"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
