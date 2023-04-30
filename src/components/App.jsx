import User from './User/User';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Statistics from './Statistics/Statistics';

import user from '../path/user.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';
import css from './App.module.css';

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
      <Statistics />

      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendList
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.transactionHistory__header}>
            <th className={css.transactionHistory__item}>Type</th>
            <th className={css.transactionHistory__item}>Amount</th>
            <th className={css.transactionHistory__item}>Currency</th>
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
