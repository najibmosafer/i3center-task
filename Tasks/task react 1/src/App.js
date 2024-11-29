// App.js
import React, { useState } from 'react';
import ChatWindow from './component/ChatWindow';

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, isSender, time, avatarUrl) => {
    setMessages([...messages, { text, isSender, time, avatarUrl }]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      {/* پنجره سمت چپ */}
      <ChatWindow
        messages={messages}
        addMessage={addMessage}
        isSender={false}
        avatarUrl="https://via.placeholder.com/40?text=B" // تصویر B
      />
      {/* پنجره سمت راست */}
      <ChatWindow
        messages={messages}
        addMessage={addMessage}
        isSender={true}
        avatarUrl="https://via.placeholder.com/40?text=A" // تصویر A
      />
    </div>
  );
};

export default App;
