class IsValid {
    static username(text) {
        const minUsernameLength = 4;
        const maxUsernameLength = 20;

        if (typeof text !== 'string') {
            return 'Pateiktas username netinkamo tipo';
        }
        text = text.trim();
        if (text === '') {
            return 'Pamirsai irasyti slapyvardi';
        }
        if (text.length < minUsernameLength) {
            return 'Per trumpas slapyvardis';
        }
        if (text.length > maxUsernameLength) {
            return 'Per ilgas slapyvardis';
        }
        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        for (const t of text) {
            if (!allowedSymbols.includes(t)) {
                return `Slapyvardyje yra neleistinas simbolis (${t})`;
            }
        }

        return true;
    }

    static email(text) {
        if (typeof text !== 'string') {
            return 'Pateiktas email netinkamo tipo';
        }
        text = text.trim();
        if (text === '') {
            return 'Pamirsai irasyti el.pasto adresa';
        };
        const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-@.';
        for (const t of text) {
            if (!allowedSymbols.includes(t)) {
                return `Emaile yra neleistinas simbolis (${t})`;
            }
        };
        if (!text.includes('@')) {
            return 'Nera @ zenkliuko'
        }
        if (text.includes('..')) {
            return 'Emaile yra panaudoti is eiles du ar daugiau tasku'
        }
        if (text.indexOf('.') === 0) {
            return 'Taskas negali buti emailo pradzioje'
        }
        const splitTextByEta = text.split('@');

        if (splitTextByEta[0] === '') {
            return '@ negali buti pradzioje'
        }
        if (splitTextByEta.length > 2) {
            return '@ zenkliukas naudojamas daugiau nei 1 karta'
        }

        if (text.length > 320) {
            return 'Per ilgas el.pasto adresas'
        }
        return true;

    }

    static password(text) {
        const minPasswordLength = 12;
        if (typeof text !== 'string') {
            return 'Slaptazodis netinkamo tipo';
        }
        if (text.includes(' ')) {
            return 'Negalima naudoti tarpo';
        }
        if (text === '') {
            return 'Pamirsai irasyti slaptazodi';
        }
        if (text.length < minPasswordLength) {
            return 'Per trumpas slaptazodis';
        }
        return true;
    }
}

export { IsValid };