import user from './given/user.json'
import statisticalData from './given/statistical-data.json'
import friends from './given/friends.json'
import transactions from './given/transactions.json';
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'



export default function App() {
  return (
    <>
      <Profile props={user} />
      <Statistics title="Upload stats" props={statisticalData} />
      <FriendList props={friends} />
       <TransactionHistory props={transactions} />;
    </>
  );
}