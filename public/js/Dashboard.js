const dashboard = async () => {
  const user_id = document.querySelector('#userId').value;
    const response = await fetch(`/user/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#Userpage').addEventListener('click', dashboard);