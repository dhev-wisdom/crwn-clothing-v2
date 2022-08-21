import './cardlist.styles.css';
import Card from '../card/card.component';

const CardList = ({monsters}) => {
    return (
           <Card monsters={monsters} />
        )
}

// class CardList extends Component {
//     render() {
//         // Why does this render call log twice
//         // React renders when setState gets called and when props gets updated
//         // So summary. React renders on Mount and when setState gets called or when props gets updated
        
//         return (
//             <Card monsters={this.props.monsters} />
//         )
//     }
// }

export default CardList;