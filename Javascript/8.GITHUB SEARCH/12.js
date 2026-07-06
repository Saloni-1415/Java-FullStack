const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const resultinput = document.getElementById("result");

function setState(state, message = "") {
  const states = {
    loading: '<p class="loading">LOADING...</p>',
    error: `<p class="error">${message}</p>`,
    empty: '<p class="muted">Search for GitHub user above</p>'
  };

  resultinput.innerHTML = states[state] || "";
}

async function searchUser(username) {
  if (!username.trim()) return;

  setState("loading");
  btn.disabled = true;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (response.status === 404) {
      throw new Error(`User ${username} not found`);
    }

    if (!response.ok) {
      throw new Error(`API Error : ${response.status}`);
    }

    const user = await response.json();

    resultinput.innerHTML = `
      <div class="user-card">
        <img src="${user.avatar_url}" alt="${user.login}">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || "No bio available"}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <a href="${user.html_url}" target="_blank">
          View Profile
        </a>
      </div>
    `;
  }
  catch (error) {
    setState("error", error.message);
  }
  finally {
    btn.disabled = false;
  }
}

btn.addEventListener("click", () => {
  searchUser(input.value);
});

setState("empty");