import Profile from './components/Profile/Profile';
import Statistic from 'components/Statistic/Statistic';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import transactions from 'data/transactions.json';
import user from 'data/user.json';
import data from 'data/data.json';
import friendsData from 'data/friends.json';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory data={transactions} />
    </div>
  );
}
