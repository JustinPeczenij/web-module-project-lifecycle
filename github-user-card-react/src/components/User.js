import axios from 'axios'
import React from 'react'
import Follower from './Follower'

class User extends React.Component{
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/justinpeczenij/followers')
        .then(res => {
            console.log(res.data)
            this.setState({
                followers: res.data
            })
            console.log(this.state)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const { userData } = this.props 
        return (
            <div className='user-container'>
                <div className='user-card'>
                    <h2>{userData.name}</h2>
                    <a href={userData.url}>{userData.url}</a>
                    <h4>Username: {userData.login}</h4>
                    <p>Location: {userData.location}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    <h3>Followers:</h3>
                </div>
                <div className='followers-container'> 
                    {this.state.followers.map(follower => {
                        return <Follower follower={follower} key={follower.id}/>
                    })}
                </div>
            </div>
        )
    }
}

export default User