
import { useState } from 'react';
import styles from '../styles/Chatbot.module.css';

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;

    const res = await fetch('/api/lex', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `You: ${input}`, `Bot: ${data.message}`]);
    setInput('');
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.chatlog}>
        {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
      </div>
      <input
        className={styles.chatinput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Say something..."
      />
    </div>
  );
}
