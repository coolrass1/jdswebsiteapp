import React from 'react'

const Formcontact = () => {
  return (
    <form onSubmit={e=>e.preventDefault()}>
    <ul>
      <li>
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name" />
      </li>
      <li>
        <label for="mail">Email:</label>
        <input type="email" id="mail" name="user_email" />
      </li>
      <li>
        <label for="msg">Message:</label>
        <textarea id="msg" name="user_message"></textarea>
      </li>
    </ul>
  </form>
  
  )
}

export default Formcontact