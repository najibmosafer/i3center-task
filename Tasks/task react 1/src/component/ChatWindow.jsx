// ChatWindow.jsx
import React, { useState } from 'react';
import Message from './Message';

const ChatWindow = ({ messages, addMessage, isSender, avatarUrl }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const time = new Date().toLocaleTimeString();
      addMessage(input, isSender, time, avatarUrl);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      handleSend();
    }
  };

  return (
    <div style={{
      width: '350px', margin: '0 10px', display: 'flex', flexDirection: 'column', height: '500px',
    }}>
      <div style={{
        flexGrow: 1, border: '1px solid #ccc', padding: '10px', overflowY: 'auto',
        height: '100%', backgroundColor: '#f9f9f9',
      }}>
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            isSender={msg.isSender === isSender}
            time={msg.time}
            avatarUrl={msg.avatarUrl}
          />
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          style={{ flexGrow: 1, padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // رویداد برای ارسال پیام با Enter
          placeholder="Type a message"
        />
        <button
          style={{
            padding: '10px 15px', backgroundColor: input.trim() ? '#0078fe' : '#ccc', color: '#fff',
            borderRadius: '50%', marginLeft: '10px', border: 'none',
            cursor: input.trim() ? 'pointer' : 'not-allowed',
          }}
          onClick={handleSend}
          disabled={!input.trim()} // غیرفعال کردن دکمه
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
