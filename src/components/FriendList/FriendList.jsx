import css from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendList = ({friends}) => {
  return (
      <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id}) => (

          <li className={css.item} key={id}>
            <span className={`${css.status} ${isOnline ?  css.offline : css.online}`}></span>
            <img className={css.avatar} src={avatar} alt={name}  width="48" />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
  );
}

FriendList.propTypes = {
  friends:propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
  }))
}