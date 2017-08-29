"use strict"
import shujuconstant from "../constants/shujuconstant.js";

export default {
    getShujuinfo: function (cb) {
        fetch(shujuconstant.ShujuFetchURL).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        })
    }
}