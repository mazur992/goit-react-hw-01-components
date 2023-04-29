// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import userData from './user.json';

const user = (
  <div class="profile">
    <div class="description">
      <img src={userData.avatar} alt={userData.username} class="avatar" />
      <p class="name">{userData.username}</p>
      <p class="tag">@{userData.tag}</p>
      <p class="location">{userData.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{userData.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{userData.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{userData.stats.likes}</span>
      </li>
    </ul>
  </div>
);
ReactDOM.render(user, document.querySelector('#root'));
