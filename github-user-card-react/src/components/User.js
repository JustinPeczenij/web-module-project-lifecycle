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
        axios.get(this.props.userData.followers_url)
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
            <div>
                <h2>{userData.name}</h2>
                <a href={userData.url}>{userData.url}</a>
                <h4>{userData.login}</h4>
                <p>{userData.location}</p>
                <p>{userData.followers}</p>
                <p>{userData.following}</p>
                <div> Followers
                    {this.state.followers.map(follower => {
                        return <Follower follower={follower} key={follower.id}/>
                    })}
                </div>
            </div>
        )
    }
}

export default User