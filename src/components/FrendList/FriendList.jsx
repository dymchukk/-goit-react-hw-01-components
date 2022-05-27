import FriendInfo from './FriendInfo';

const FriendList = ({ friendsData }) => {
  return (
    <ul>
      {friendsData.map(f => (
        <FriendInfo
          key={f.id}
          status={f.isOnline}
          avatar={f.avatar}
          name={f.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;