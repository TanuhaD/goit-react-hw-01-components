import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

import { FriendList } from './FriendsList.styles';

export default function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          id={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendList>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
