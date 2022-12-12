import PropTypes from 'prop-types';

import { Item, Status, Avatar, Name } from './FriendListItem.styles';
export default function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar"></Avatar>
      <Name>{name}</Name>
    </Item>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
