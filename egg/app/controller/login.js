/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
"use strict";
const Controller = require("egg").Controller;
class LoginController extends Controller {
  async index() {
    let req = this.ctx.request.body;
    let res = await this.service.user.findOne(req, { password: 0 });
    this.ctx.body = res;
  }
}

module.exports = LoginController;
