import { useState } from 'react';
import styles from './BeldaranBot.module.css'; // Import CSS for the chatbot

export default function BeldaranBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleMessage = (message) => {
    const responses = [
      `Did you mean "${message}" or perhaps "cheese"?`,
      `Your thoughts are now... pancakes!`,
      `Beldaran suggests a wild turn: "${message}" becomes "ocean dreams".`,
    ];
    setResponse(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className={styles.chatbot}>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Talk to Beldaran..."
        className={styles.input}
      />
      <button onClick={() => handleMessage(input)} className={styles.button}>Send</button>
      {response && <p className={styles.response}>Beldaran says: {response}</p>}
    </div>
  );
}
