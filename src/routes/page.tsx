import { List } from 'antd';
import Avatar from '../components/Avatar';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

function App() {
  return (
    <div>
      <List
        dataSource={mockData}
        renderItem={({ name, email, avatar }) => (
          <List.Item key={name}>
            <List.Item.Meta
              avatar={<Avatar src={avatar} />}
              title={name}
              description={email}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
