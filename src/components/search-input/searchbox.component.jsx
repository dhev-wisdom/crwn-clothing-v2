import './searchbox.styles.css';

const Searchbox = ({onChangeHandler, placeholder, className}) => {
    return <input 
                className={`search-box ${className}`}
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />  
}


// class Searchbox extends Component {
//     render() {
//         const {onChangeHandler, placeholder, className} = this.props;
//         return (
//             <>
//                 <input 
//                     className={`search-box ${className}`}
//                     type='search' 
//                     placeholder={placeholder} 
//                     onChange={onChangeHandler}
//                 />
//             </>
//         )
//     }
// }

export default Searchbox;