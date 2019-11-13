const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function ping(user) {
    const data = fetch(`https://api.github.com/users/:${user}/events/public`, {headers: {'Authorization': 'token ' + gitKey}})
        .then(response => {response.json()})
        // .then(users => users.map(user => user.login))
}

// /users/:username/events/public
// https://api.github.com/users/:

console.log(ping("RiverRobins"));