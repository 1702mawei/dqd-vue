"use strict"
import zhiboconstants from "../constants/zhiboconstants.js";

export default {
    getShujuinfo: function (cb) {
        fetch(zhiboconstants.ShujuFetchURL).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        })
    }
}