import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat'; //chat cuaderno

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const initializeChat = async () => {
      const apiKey = 'TU_API_KEY';
      const chatClient = new StreamChat(apiKey);

      await chatClient.setUser(
        {
          id: 'USER_ID',
          name: 'NOMBRE_USUARIO',
          image: 'URL_IMAGEN_USUARIO',
        },
        chatClient.devToken('USER_ID')
      );

      const channel = chatClient.channel('messaging', 'CHANNEL_ID');
      const response = await channel.query({ messages: { limit: 100 } });

      setMessages(response.messages);
    };

    initializeChat();
  }, []);

  const sendMessage = async () => {
    const apiKey = 'TU_API_KEY';
    const chatClient = new StreamChat(apiKey);
    await chatClient.setUser(
      {
        id: 'USER_ID',
        name: 'NOMBRE_USUARIO',
        image: 'URL_IMAGEN_USUARIO',
      },
      chatClient.devToken('USER_ID')
    );

    const channel = chatClient.channel('messaging', 'CHANNEL_ID');
    await channel.sendMessage({ text: newMessage });

    setNewMessage('');
    const response = await channel.query({ messages: { limit: 100 } });
    setMessages(response.messages);
  };

  return (
    <div>
      <h1>Chat de la Aplicación</h1>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <div className="new-message">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default App;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
