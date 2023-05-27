import PropTypes from 'prop-types';
import * as css from './contacts.styled';

export const ContactList = ({ filter, render }) => {
    return (
        <css.UlContactList>{render(filter)}</css.UlContactList>
    )

}

ContactList.propTypes = {
    filter: PropTypes.array.isRequired,
    render: PropTypes.func.isRequired,
};