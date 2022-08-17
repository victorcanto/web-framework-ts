import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'NAME', age: 25 });
const rootEl = document.getElementById('root');

if (rootEl) {
  const userEdit = new UserEdit(rootEl, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found.');
}
