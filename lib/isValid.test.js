import { IsValid } from "./IsValid.js";

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            const [err, msg] = IsValid.username();
            expect(err).toBe(true);
            expect(msg).toBe('Netinkamo tipo "username" reiksme');
        });
        test('netinkamo tipo params', () => {
            const [err, msg] = IsValid.username(512);
            expect(err).toBe(true);
            expect(msg).toBe('Netinkamo tipo "username" reiksme');
        });
    })

    // describe('Tinkamo tipo parametrai', () => {
    //     test('tuscias tekstas', () => {
    //         expect(IsValid.username('')).toBe('Pamirsai irasyti slapyvardi');
    //     });
    //     test('per trumpas', () => {
    //         expect(IsValid.username('As')).toBe('Per trumpas slapyvardis');
    //     });
    //     test('per ilgas', () => {
    //         expect(IsValid.username('Asdrsthjhgfdearsgtrhr')).toBe('Per ilgas slapyvardis');
    //     });
    //     test('neleistinas simbolis (tarpas)', () => {
    //         expect(IsValid.username('John Doe')).toBe('Slapyvardyje yra neleistinas simbolis ( )');
    //     });
    //     test('geras username', () => {
    //         expect(IsValid.username('John')).toBe(true);
    //     });
    // })
})

describe('IsValid.email()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            const [err, msg] = IsValid.email();
            expect(err).toBe(true);
            expect(msg).toBe('Netinkamo tipo "email" reiksme');
        });
        test('netinkamo tipo params', () => {
            const [err, msg] = IsValid.email(512);
            expect(err).toBe(true);
            expect(msg).toBe('Netinkamo tipo "email" reiksme');
        });
    })

    //     describe('Tinkamo tipo parametrai', () => {
    //         test('validus email', () => {
    //             expect(IsValid.email('vardenis.pavardenis@pastas.com')).toBe(true);
    //         });
    //     })
})

describe('IsValid.password()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('nera params', () => {
            const [err, msg] = IsValid.password();
            expect(err).toBe(true);
            expect(msg).toBe('Netinkamo tipo "password" reiksme');
        });
        test('netinkamo tipo params', () => {
            const [err, msg] = IsValid.password(512);
            expect(err).toBe(true);
            expect(msg).toBe('Netinkamo tipo "password" reiksme');
        });
    })

    // describe('Tinkamo tipo parametrai', () => {
    //     test('tuscias tekstas', () => {
    //         expect(IsValid.password('')).toBe('Pamirsai irasyti slaptazodi');
    //     });
    //     test('per trumpas', () => {
    //         expect(IsValid.password('ertrhy')).toBe('Per trumpas slaptazodis');
    //     });
    //     test('validus password', () => {
    //         expect(IsValid.password('frsgtrdyukgu')).toBe(true);
    //     });
    // })
})


/*
import { IsValid } from "./IsValid.js";

//jei objektas ir pan

describe('IsValid.username()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('Netinkamas username', () => {
            expect(IsValid.username(true)).toBe('Pateiktas username netinkamo tipo');
        });
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
        test('Netinkamas email', () => {
            expect(IsValid.email(true)).toBe('Pateiktas email netinkamo tipo');
        });
        test('Tuscias el.pasto laukas', () => {
            expect(IsValid.email('')).toBe('Pamirsai irasyti el.pasto adresa');
        });
        test('Neleistinas simbolis emaile', () => {
            expect(IsValid.email('Jonas/gmail.com')).toBe('Emaile yra neleistinas simbolis (/)');
        });
        test('Nera @ zenkliuko', () => {
            expect(IsValid.email('Jonas')).toBe('Nera @ zenkliuko');
        });
        test('@ zenkliuko emailo pradzioje', () => {
            expect(IsValid.email('@Jonas')).toBe('@ negali buti pradzioje');
        });
        test('@ zenkliuko panaudojimas', () => {
            expect(IsValid.email('Jonas@gmail@com')).toBe('@ zenkliukas naudojamas daugiau nei 1 karta');
        });
        test('.. zenkliuko panaudojimas', () => {
            expect(IsValid.email('vardas..pavardeg@gmail.com')).toBe('Emaile yra panaudoti is eiles du ar daugiau tasku');
        });
        test('Taskas emailo pradzioje', () => {
            expect(IsValid.email('.vardas@gmail.com')).toBe('Taskas negali buti emailo pradzioje');
        });
        test('Per ilgas email', () => {
            expect(IsValid.email('contact-admin-hello-webmaster-info-services-peter-crazy-but-oh-so-ubber-cool-english-alphabet-loverer-abcdefghijklmnopqrstuvwxyz@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz.this-is-the-longest-email-address-known-to-man-but-to-be-honest.this-is-such-a-stupidly-long-sub-domain-it-could-go-on-forever.pacraig.com')).toBe('Per ilgas el.pasto adresas');
        });

    })
    describe('Tinkamo tipo parametrai', () => {
        test('Ne tuscias emailas', () => {
            expect(IsValid.email('mantas@gmail.com')).toBe(true);
        });
        test('Tinkamo ilgio ir simboliu emailas', () => {
            expect(IsValid.email('mantas@gmail.com')).toBe(true);
        });
    })
});

describe('IsValid.password()', () => {
    describe('Netinkamo tipo parametrai', () => {
        test('Tuscias slaptazodis', () => {
            expect(IsValid.password([])).toBe('Slaptazodis netinkamo tipo');
        });
        test('Tuscias slaptazodis', () => {
            expect(IsValid.password('')).toBe('Pamirsai irasyti slaptazodi');
        });
        test('Per trumpas slaptazodis', () => {
            expect(IsValid.password('512')).toBe('Per trumpas slaptazodis');
        });
        test('Naudojamas space', () => {
            expect(IsValid.password('slaptazodis  123')).toBe('Negalima naudoti tarpo');
        });
    })
    describe('Tinkamo tipo slaptazodis', () => {
        test('Ne tuscias slaptazodzio laukas', () => {
            expect(IsValid.password('slaptazodis123')).toBe(true);
        });
        test('Tinkamo ilgio slaptazdosi', () => {
            expect(IsValid.password('12344567890123456')).toBe(true);
        });
    })
})

*/