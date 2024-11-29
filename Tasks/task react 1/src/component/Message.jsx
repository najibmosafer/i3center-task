// Message.jsx
import React from 'react';

const Message = ({ text, isSender, time, avatarUrl }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: isSender ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      marginBottom: '15px',
    }}>
      {!isSender && (
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '10px',
        }}>
          <img
            src={avatarUrl}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
      <div style={{
        maxWidth: '60%',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: isSender ? '#0078fe' : '#e5e5e5',
        color: isSender ? '#fff' : '#000',
        wordBreak: 'break-word',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isSender ? 'flex-end' : 'flex-start',
      }}>
        <div>{text}</div>
        <div style={{
          fontSize: '12px',
          color: '#aaa',
          marginTop: '5px',
          textAlign: isSender ? 'right' : 'left',
        }}>
          {time}
        </div>
      </div>
      {isSender && (
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginLeft: '10px',
        }}>
          <img
            src={avatarUrl}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
};

export default Message;
