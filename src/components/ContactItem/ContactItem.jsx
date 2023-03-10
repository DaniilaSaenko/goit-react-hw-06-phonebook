import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Container, User, Button } from './ContactItem.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteUser = () => dispatch(deleteContact(id));
  return (
    <Container>
      <User>
        {name} :   {number}
      </User>
      <Button type="button" onClick={deleteUser}>
        Delete 🗑
      </Button>
    </Container>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
