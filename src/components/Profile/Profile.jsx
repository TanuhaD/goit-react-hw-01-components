import PropTypes from 'prop-types';

import {
  UserProfile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styles';

export default function Profile({
  username,
  tag = 'not tag',
  location,
  avatar,
  stats,
}) {
  return (
    <UserProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>

        {location && <Location>{location}</Location>}
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    views: PropTypes.number,
    followers: PropTypes.number,
    likes: PropTypes.number,
  }),
};
