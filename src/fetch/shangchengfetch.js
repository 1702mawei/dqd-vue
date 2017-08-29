"use strict";
 import shangchengconstants from "../constants/shangchengconstants.js";

export default {

    getShangchenginfo: function (cb) {
        //var url = "http://localhost:8888/ShangCheng";
        fetch(shangchengconstants.ShangchengFetchURL).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        })
    }
}