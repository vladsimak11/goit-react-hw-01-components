import css from './Profile.module.css';
import propTypes from 'prop-types';

export const Profile = ({user}) => {

  const {username, avatar, tag, location, stats} = user;

  return (
    <div className={css.profile}>

      <div className={css.description}>
        <img
          src={avatar}
          alt={username}
          className={css.avatar}
        />

        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>

        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>

        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>

        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>

      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: propTypes.shape({
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
    })
  })
}