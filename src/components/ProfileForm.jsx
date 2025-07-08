import { useState } from 'react';

function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={subscribed}
            onChange={e => setSubscribed(e.target.checked)}
          />
          Subscribe to newsletter
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div style={{marginTop: '1em'}}>
          <h3>Submitted Values:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscribed: {subscribed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </>
  );
}

export default ProfileForm;