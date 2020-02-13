import React from 'react'


class User extends React.Component{
  
  render(){
    return(
      <div>
        User Profile

        Hello @username, you look good today!

        <button>Edit Profile</button>
        <button>Delete Profile</button>
      </div>
    )
  }
}




export default User