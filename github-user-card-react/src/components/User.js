import React from 'react'

class User extends React.Component{
    
    render() {
        const { userData } = this.props 
        return (
            <div>
                <h2>{userData.name}</h2>
                <h4>{userData.login}</h4>
                <h4>{userData.url}</h4>
                <h4>{userData.followers}</h4>
                <h4>{userData.following}</h4>
                <h4>{userData.location}</h4>
            </div>
        )
    }
}

export default User