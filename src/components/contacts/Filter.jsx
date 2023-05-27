import PropTypes from 'prop-types';
import * as css from './contacts.styled';

export const Filter = ({ changeFilter }) => {
    return (
        <>
            <h3>Find contacts by name</h3 >
            <css.Input type="text" onChange={changeFilter} />
        </>

    )
}

Filter.propTypes = {
    changeFilter: PropTypes.func.isRequired,
};