import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props
        return (
            <div className='follower'>
                <img width={'200px'} src={follower.avatar_url} alt='Avatar'/>
                <h2>{follower.login}</h2>
                <a href={follower.url}>{follower.url}</a>
            </div>
        )
    }
}

export default Follower;