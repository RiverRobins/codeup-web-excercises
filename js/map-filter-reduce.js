const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const atLeastThree = users.filter(n => n.languages.length >= 3);
console.log(atLeastThree);

const emails = users.map(n => n.email);
console.log(emails);

const avgExp = users.reduce((tot, user) => {return tot + user.yearsOfExperience}, 0) / users.length;
console.log(avgExp);

const userWithLongestEmail = users.reduce((hi, user) => {return user.email.length > hi.email.length ? user : hi});
console.log(userWithLongestEmail);

const userStr = users.reduce((str, user) => {return `${str} ${user.name}${user.id === 5 ? "." : ","}`}, 'These are our users:');
console.log(userStr);

//BONUS
//gets unique values
const getUnique = n => {
    let temp = [];
    n.forEach(item => {
        if (!temp.includes(item)){
            temp.push(item);
        }
    });
    return temp
};
//gets all values then passes the result into getUnique to filter.
const allLangs = getUnique(users.reduce((langs, current) => {
    return `${langs},${current.languages}`;
}, "Unique languages: ").split(","));

console.log(allLangs);