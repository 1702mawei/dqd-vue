"use strict"
import shujuconstants from "../constants/shujuconstants";

export  default {
    getShujuinfo: function (cb) {
        fetch(shujuconstants.ShujuFetchURL).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        })
    },
}