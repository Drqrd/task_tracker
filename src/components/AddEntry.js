// import PropTypes from 'prop-types';
import TimePicker from './TimePicker';
// import DatePicker from 'react-date-picker';


const AddEntry = (props) => {

    return (
        <form>
            <label>Entry</label>
            <input type='time'></input>
            <input type='date'></input>
            <input type='button'></input>
            <input type='submit'></input>
        </form>
    )
}

export default AddEntry
