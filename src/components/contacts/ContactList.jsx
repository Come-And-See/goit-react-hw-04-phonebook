import PropTypes from 'prop-types';
import * as css from './contacts.styled';

export const ContactList = ({ data, deleteContact }) => {
    return (
        <css.UlContactList>
            {data.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button type='button' onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>))}
        </css.UlContactList>
    )

}

ContactList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};