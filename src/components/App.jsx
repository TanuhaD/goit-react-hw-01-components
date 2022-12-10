import Profile from './Profile/Profile';
import user from '../assest/user.json';
import data from '../assest/data.json';
import friends from '../assest/friends.json';
import items from '../assest/transactions.json';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App(props) {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data}></Statistics>
      <FriendsList friends={friends}></FriendsList>
      <TransactionHistory items={items}></TransactionHistory>
    </>
  );
}
