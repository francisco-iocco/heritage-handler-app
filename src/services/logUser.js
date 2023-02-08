export default async function logUser({ email, password }) {
    let response = await fetch(
        `http://localhost:4000/users?email=${email}&password=${password}`
    );
    response = await response.json();
    return response;
}