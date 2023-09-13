class User {
    constructor(email, username, passwordProperties) {
        this.email = email;
        this.username = username;
        this.passwordProperties = passwordProperties;
    }
}

const Ruzeda = new User('foxyLady@gmail.com', 'foxxyLady', '98703');
const Shekinah = new User('greazyOne4life@gmail.com', 'greazyLife', '45678');
const Desiree = new User('superHyphy@gmail.com', 'superHyphy', '32456');

console.log(Ruzeda);
console.log(Shekinah);
console.log(Desiree);