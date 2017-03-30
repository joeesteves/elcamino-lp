import jquery from "jquery"
import "bootstrap"
import "./boilerPlate"
import {init} from "./init"
import body from "../views/body.pug"
require("../styles/_bootstrap.scss")
require("../styles/stylish-portfolio.css")
$(function () {
    $("#body").html(body)
    init()
})

