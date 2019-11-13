const resolve = new Promise((resolve) => {
    return resolve();
});
const wait = (time) => {
    setTimeout(() => {

    }, time);
};

console.log(wait());
resolve.then(() => console.log('Revolved'));
resolve.catch(() => console.log('Error'));



//const data = fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}});