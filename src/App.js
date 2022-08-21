import './App.css'; 
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-input/searchbox.component';

const api = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);

  useEffect(()=> {
    fetch(api)
      .then(response => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
   });

   setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    // console.log(searchField);
  }
  
  return (
    <>
    
    <div className="App">
      <h1 className='amp-title'>Monsters Rolodex</h1>
      <Searchbox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' /> 
    
      {/* {filteredMonsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>
      })} */}

      <CardList monsters={filteredMonsters} />
    </div>
    </>
  );
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch(api)
//       .then(response => response.json())
//       .then((users) => this.setState(()=> {
//         return {monsters: users}
//       }, () => {
//         // console.log(users);
//       }))
//   }

//   onSearchChange = (e) => {  
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//     return { searchField };
//   })
// }

// render() {
//     const {searchField, monsters} = this.state;
//     const {onSearchChange} = this;

//     // console.log('render');
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <>
      
//       <div className="App">
//         <h1 className='amp-title'>Monsters Rolodex</h1>
//       <Searchbox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' /> 
      
//         {/* {filteredMonsters.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>
//         })} */}

//         <CardList monsters={filteredMonsters} />
//       </div>
//       </>
//     );
//   }
// }

export default App;
