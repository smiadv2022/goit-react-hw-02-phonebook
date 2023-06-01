import PropTypes from 'prop-types';
import { InputFilter, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="find">Find contacts by name</Label>
      <InputFilter
        type="text"
        name="find"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
