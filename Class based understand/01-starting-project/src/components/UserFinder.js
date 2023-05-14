import { Fragment, useState, useEffect, Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];


class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [] ,
      searchTerm: '',
    }
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter(user => user.name.includes(this.state.searchTerm)),
      });
    }
  }


  searchChangeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render () {
    return (
      <Fragment>
          <input 
          className={classes.finder} 
          type='search' 
          onChange={this.searchChangeHandler.bind(this)}
          />
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
      </Fragment>
    )
  }
}


export default UserFinder;


// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   setFilteredUsers(
  //     DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
  //   );
  // }, [searchTerm]);

  // const searchChangeHandler = (event) => {
  //   setSearchTerm(event.target.value);
  // };

//   return (
//     <Fragment>
//       <input className={classes.finder} type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };
