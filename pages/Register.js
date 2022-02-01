const PageTemplate = require("../lib/Page.js");

class PageRegister extends PageTemplate {
    constructor() {
        super();
        this.pageCSSfileName = 'auth';
        this.pageJSfileName = 'auth';
    }

    mainHTML() {
        return `<section class="container hero">
                    <div class="row">
                        <div class="left">
                            <h1>Register</h1>
                            <form class="form">
                            <div class="form-errors"></div>
                                <div class="form-row">
                                    <label for="username">Username</label>
                                    <input id="username" type="text" data-validation="username" placeholder="Type username" required value="Chuck">
                                </div>
                                <div class="form-row">
                                    <label for="email">Email</label>
                                    <input id="email" type="email" data-validation="email" placeholder="Type email" required value="chuck@gmail.com">
                                </div>
                                <div class="form-row">
                                    <label for="pass">Password</label>
                                    <input id="pass" type="password" data-validation="password" placeholder="Type password" required value="testtesttesttesttest">
                                </div>
                                <div class="form-row">
                                    <label for="repass">Repeat password</label>
                                    <input id="repass" type="password" data-validation="password" placeholder="Type password" required value="testtesttesttesttest">
                                </div>
                                <div class="form-row">
                                    <button type="submit" class="btn">Create account</button>
                                </div>
                            </form>
                        </div>
                        <div class="right">
                            <img src="../img/hero.png" alt="Hero image">
                        </div>
                    </div>
                </section>`;
    }
}

module.exports = PageRegister;