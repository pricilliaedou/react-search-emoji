import { useState } from "react";
import emojiList from "./assets/emojiList.json";

const List = () => {
  const [search, setSearch] = useState("");

  const filteredEmojiList = search
    ? emojiList.filter(
        (emoji) =>
          emoji.keywords.toLowerCase().includes(search.toLowerCase()) ||
          emoji.title.toLowerCase().includes(search.toLowerCase())
      )
    : emojiList.slice(0, 20);

  return (
    <div>
      <input
        type='text'
        placeholder='Recherchez un emoji'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='emoji-list'>
        {filteredEmojiList.length > 0 ? (
          filteredEmojiList.map((emoji) => (
            <div key={emoji.title} className='symbol-and-name'>
              <p className='symbol'>{emoji.symbol}</p>
              <h2>{emoji.title}</h2>
            </div>
          ))
        ) : (
          <p className='empty'>Aucun emoji trouvé</p>
        )}
      </div>
    </div>
  );
};

export default List;
