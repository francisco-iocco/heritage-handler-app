export default async function logUser({ username, password }) {
    let response = await fetch(
        `http://localhost:4000/users?username=${username}&password=${password}`
    );
    response = await response.json();
    return response;
}