// Base User class
class User {
    #name;
    constructor(name) { this.#name = name; }
    getName() { return this.#name; }
    display() { return `${this.getName()}`; }
}


class AdminUser extends User {
    display() { return `👑 Admin`; }
}


class NormalUser extends User {
    display() { return `🙂 User`; }
}


function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
}


function createUserObjects(apiUsers) {
    return apiUsers.map((u, i) => {
        return i % 2 === 0 ? new AdminUser(u.name) : new NormalUser(u.name);
    });
}


function displayUsers(users) {
    const container = document.getElementById('users');
    container.innerHTML = users.map(user => `
<div class="card">
<div class="role">${user.display()}</div>
<div class="name">${user.getName()}</div>
</div>
`).join('');
}


fetchUsers()
    .then(createUserObjects)
    .then(displayUsers)
    .catch(err => console.error(err)); 




