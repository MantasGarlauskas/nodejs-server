const IsValid = require("./IsValid.js");

//jei objektas ir pan

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('Tuscias username laukas', () => {
            expect(IsValid.username('')).toBe('Pamirsai irasyti slapyvardi');
        });
        test('Per trumpas slapyvardis', () => {
            expect(IsValid.username('abc')).toBe('Per trumpas slapyvardis');
        });
        test('Per ilgas slapyvardis', () => {
            expect(IsValid.username('123456789012345678901')).toBe('Per ilgas slapyvardis');
        });
        test('Neleistinas simbolis username', () => {
            expect(IsValid.username('Jon/as')).toBe('Slapyvardyje yra neleistinas simbolis (/)');
        });
        test('Naudojamas tarpas user name', () => {
            expect(IsValid.username('mano vardas')).toBe('Slapyvardyje yra neleistinas simbolis ( )');
        });

    });
    describe('Tinkamo tipo parametrai', () => {
        test('Ne tuscias slapyvardis', () => {
            expect(IsValid.username('abcd')).toBe(true);
        });
        test('Tinkamo ilgio slapyvardis', () => {
            expect(IsValid.username('abcd')).toBe(true);
        });
        test('Naudojami tinkami simboliai', () => {
            expect(IsValid.username('user_name123')).toBe(true);
        });
    })
});


describe('IsValid.email()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('Tuscias el.pasto laukas', () => {
            expect(IsValid.email('')).toBe('Pamirsai irasyti el.pasto adresa');
        });
        test('Neleistinas simbolis emaile', () => {
            expect(IsValid.email('Jon/as')).toBe('Emaile yra neleistinas simbolis (/)');
        });
        test('Nera @ zenkliuko', () => {
            expect(IsValid.email('Jonas')).toBe('Nera @ zenkliuko');
        });
        test('@ zenkliuko emailo pradzioje', () => {
            expect(IsValid.email('@Jonas')).toBe('@ negali buti pradzioje');
        });
        test('@ zenkliuko panaudojimas', () => {
            expect(IsValid.email('@Jonas')).toBe('@ zenkliukas naudojamas daugiau nei 1 karta');
        });
    })
});

// describe('IsValid.password()', () => {
//     describe('Netinkamo tipo parametrai', () => {
//         test('nera params', () => {
//             expect(IsValid.password()).toBe('Error');
//         });
//         test('', () => {
//             expect(IsValid.password(512)).toBe('Error');
//         });
//     })
// })