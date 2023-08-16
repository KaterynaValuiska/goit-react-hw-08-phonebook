import { FcContacts } from 'react-icons/fc';
import '../index.css';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        fontSize: 40,
        color: '#010101',
      }}
    >
      Your contact book. Welcome.
      <FcContacts className="IconHome" />
    </div>
  );
};

export default Home;
