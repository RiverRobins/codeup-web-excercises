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
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': 'token ' + gitKey}})
        .then(response => response.json())
}

ping("RiverRobins").then((events) => {
    let newCommit = events.find(function (event) {
        return event.type === "PushEvent";
    });
    console.log(newCommit.created_at);
}).catch(error => console.log("nope"));
