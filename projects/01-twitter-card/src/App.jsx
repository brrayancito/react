import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialisFollowing={true}
        userName="pedro"
        name="Pedrito José"
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialisFollowing={false}
        name="Ana Maria"
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        initialisFollowing
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      ;
    </div>
  );
}
