import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features, details} = option;
    return (
        <div className='bg-blue-600 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <p className='text-xl text-center'>{details}</p>
            <div className='pl-4 flex-grow'>
                {
                    features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-500 w-full py-2 font-bold rounded-lg hover:bg-green-600'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object 
}

export default PriceOption;