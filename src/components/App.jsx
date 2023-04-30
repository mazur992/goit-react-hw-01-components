import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

import User from './User';
import Statistic from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <User
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map(d => (
            <Statistic key={d.id} label={d.label} percentage={d.percentage} />
          ))}
        </ul>
      </section>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendList
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <TransactionHistory
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
