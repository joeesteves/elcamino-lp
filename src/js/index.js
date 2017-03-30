import jquery from "jquery"
import "bootstrap"
import "./boilerPlate"
import {init} from "./init"
import head from "../views/head.pug"
import body from "../views/body.pug"
$(function () {
    $("#head").html(head)
    $("#body").html(body)
    init()

})

