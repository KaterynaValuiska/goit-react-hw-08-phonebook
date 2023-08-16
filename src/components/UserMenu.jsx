import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  return (
    <div className="UserMenu">
      <p className="UserMenuText">Welkome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className="UserMenuBtn"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
