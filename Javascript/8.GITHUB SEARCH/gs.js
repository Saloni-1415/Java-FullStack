const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const resultinput = document.getElementById("result");

function setState(state, message = "") {
  const states = {
    loading: '<p class="loading">LOADING...</p>',
    error: `<p class="error">ERROR.... ${message}</p>`,
    empty: '<p class="muted">Search for GitHub user above</p>'
  };

  resultinput.innerHTML = states[state] || "";
}

async function searchUser(username) {
  if (!username.trim()) return;
  setState("loading");
  btn.disabled = true;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) {
      throw new Error(`User ${username} not found`);
    } else if (!response.ok) {
      throw new Error(`API error : ${response.status}`);
    }

    const user = await response.json();

    
  }
  catch (error) {
    setState("error",error.msg)
  }
  finally {
    btn.disabled = false;
  }
}

// Event Listeners
btn.addEventListener("click", () => {
  searchUser(input.value);
});

setState("empty")