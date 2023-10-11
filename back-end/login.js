
const users = {
    'admin': 'password'
};
export const firstTimeLogin = {};
const profiles = {};

//Login Validation
export function login(username, password) {
    return users[username] && users[username] === password;
}

//Registration Validation
export function register(username, password) {
    if (!username || !password) {
        alert("Both username and password are required");
        return;
    }

    if (users[username]) {
        alert("This username is already taken");
        return;
    }

    users[username] = password;
    firstTimeLogin[username] = true;
}

//Profile Validation
export function saveProfileDetails(username, fullName, address1, address2, city, state, zipcode) {
    if (!fullName || fullName.length > 50) {
        alert("Full name (required)");
        return;
    }
    if (!address1 || address1.length > 100) {
        alert("Address 1 (required)");
        return;
    }
    if (address2 && address2.length > 100) {
        alert("Address 2");
        return;
    }
    if (!city || city.length > 100) {
        alert("City is (required)");
        return;
    }
    if (!state) {
        alert("State selection (required)");
        return;
    }
    if (!zipcode || zipcode.length < 5 || zipcode.length > 9) {
        alert("Zipcode is (required)");
        return;
    }

    profiles[username] = {
        fullName,
        address1,
        address2,
        city,
        state,
        zipcode
    };
}

