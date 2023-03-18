import { Profile } from "./Profile/Profile";
import user from '../user.json';
import { Statistics } from "./Statistics/Statistics";
import data from '../data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div  
      style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Profile user= {user} />
      <Statistics title="Upload stats" stats= {data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};

