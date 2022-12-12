import Profile from './Profile/Profile';
import user from '../assest/user.json';
import data from '../assest/data.json';
import friends from '../assest/friends.json';
import items from '../assest/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { Box } from './Box/Box';

export default function App(props) {
  return (
    <>
      <Box width={['100%', '400px', '700px', '1000px']}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Box width={['100%', '400px', '700px', '1000px']}>
        <Statistics title="Statistics" stats={data}></Statistics>
      </Box>
      <Box width={['100%', '400px', '700px', '1000px']}>
        <FriendsList friends={friends}></FriendsList>
      </Box>
      <TransactionHistory items={items}></TransactionHistory>
    </>
  );
}
