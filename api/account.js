import { file } from "../lib/file.js";
import { IsValid } from "../lib/IsValid.js";
import { utils } from "../lib/utils.js";

const handler = {};

handler.account = async(data, callback) => {
    const acceptableMethods = ['get', 'post', 'put', 'delete'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return await handler._account[data.httpMethod](data, callback);
    }

    return callback(404, {
        status: 'error',
        msg: 'Tavo norimas HTTPmethod yra nepalaikomas'
    });
}

handler._account = {};

handler._account.post = async(data, callback) => {
    const userObj = data.payload;
    console.log(userObj);

    if (!userObj) {
        return callback(400, {
            status: 'error',
            msg: 'Nevalidus JSON objektas'
        });
    }

    const [usernameError, usernameMsg] = IsValid.username(userObj.username);
    if (usernameError) {
        return callback(400, {
            status: 'error',
            msg: usernameMsg
        });
    }

    const [emailError, emailMsg] = IsValid.email(userObj.email);
    if (emailError) {
        return callback(400, {
            status: 'error',
            msg: emailMsg
        });
    }

    const [passwordError, passwordMsg] = IsValid.password(userObj.pass);
    if (passwordError) {
        return callback(400, {
            status: 'error',
            msg: passwordMsg
        });
    }

    // sukuriam vartotoja
    // sukuriamas failas: /data/users/[email].json
    userObj.pass = utils.hash(userObj.pass);

    // patikrinti, ar vartotojas dar nera uzregistruotas
    const alreadyRegistered = false;
    if (alreadyRegistered) {
        return callback(400, {
            status: 'error',
            msg: 'Paskyra su tokiu el. pastu jau uzregistruota'
        });
    };
    const userData = {
        username: userObj.username,
        email: userObj.email,
        password: userObj.pass,
    }

    // jei dar nebuvo uzregistruotas - registruojame
    const creationStatus = await file.create('/data/users', userObj.email + '.json', userData);
    if (creationStatus !== true) {
        return callback(500, {
            status: 'error',
            msg: creationStatus
        });
    }

    return callback(200, {
        status: 'success',
        msg: 'Paskyra sukurta'
    });
}

handler._account.get = (data, callback) => {
    // gaunam
    return callback(200, {
        status: 'success',
        msg: 'Paskyros info'
    });
}

handler._account.put = (data, callback) => {
    // atnaujinam
    return callback(200, {
        status: 'success',
        msg: 'Paskyra atnaujinta'
    });
}

handler._account.delete = (data, callback) => {
    // istrinam
    return callback(200, {
        status: 'success',
        msg: 'Paskyra istrinta'
    });
}

export default handler;