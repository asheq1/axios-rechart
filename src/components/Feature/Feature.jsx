import PropTypes from 'prop-types'
import { CiCircleCheck } from "react-icons/ci";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center '><CiCircleCheck className='mr-2' />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;