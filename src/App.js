import React, { useState } from 'react';


const App = () => {
  const [user, setUser] = useState({
    name: '',
    email:'',
    country:'Nepal'}
  );
  
  const handleChange = (event) => {
    const fieldName=(event.target.name);
    setUser((prevState) =>{
      return{...prevState,[fieldName]: event.target.value }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
  
  };

  return (
    <div className='container'>
      <h1>Contact Form</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' >Name:</label>
          <input type='text' name='name' id='name' value={user.name} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='email' > Email:</label>
          <input type='text' name='email' id='email' value={user.email} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='country' > Country:</label>
          <select name='country' id='country' value= {user.country} onChange={handleChange}>
            <option value='nepal'> Nepal</option>
            <option value='india'> India</option>
            <option value='china'> China</option>

          </select>
        </div>
        <button type='submit'>send</button>
      </form>
    </div>

  );
}

export default App;
