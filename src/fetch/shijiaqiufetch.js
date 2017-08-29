"use strict";
import shijiaqiuconstants from "../constants/shijiaqiuconstants.js";

export default {

    getShijiaqiuinfo: function (cb) {
        fetch(shijiaqiuconstants.ShijiaqiuFetchURL).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        })
    }
}