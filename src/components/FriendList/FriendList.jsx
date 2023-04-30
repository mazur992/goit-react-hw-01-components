import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ avatar, name, isOnline }) {
  const styleStatus = {
    backgroundColor: isOnline ? 'green' : 'red',
  };
  return (
    <li className={css.friendList__item}>
      <span className={css.friendList_status} style={styleStatus}></span>
      <img
        className={css.friendList_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendList_name}>{name}</p>
    </li>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
