﻿var SMBtnClose = $('.close.float-right');
var CMBtnClose = $('.btn.btn-outline-reverse.close');
SMBtnClose.on('click', function () {
    coockieChange("SMFirstTimeFlag")
});

CMBtnClose.on('click', function () {
    coockieChange("CMFirstTimeFlag")
});

function coockieChange(cookieName) {   
    var expiresDate = new Date;
    expiresDate = expiresDate.setDate(expiresDate.getDate() + 1);
    expiresDate = new Date(expiresDate);
    expiresDate = expiresDate.toGMTString();
    document.cookie = cookieName + "=1;path=/;expires =" + expiresDate;
}


