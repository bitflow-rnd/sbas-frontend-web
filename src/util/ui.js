export let alertPopupClose = () => {
    console.log("실행")
    document.querySelector('.popup-alert').remove();
};

export let alertPopupOpen = (msg, func) => {

    let _str = ''

    _str += '<article class="popup popup-alert" style="display: block;">';
    _str += ' <div class="popup-wrapper">';
    _str += '   <div class="popup-contents py-10 px-10" style="width: 300px;">';
    _str += '     <article class="modal-alert-layout pb-10">';
    _str += '       <div class="alert-view-box pb-6">';
    _str += '         <img src="./img/common/ic_alert.svg" alt="이미지">';
    _str += '       </div>';
    _str += '       <div class="alert-msg-box">'+msg+'</div>';
    _str += '     </article>';
    _str += '     <article class="modal-menu-layout1">';
    _str += '       <div class="modal-menu-list">';
    _str += '         <a @click="alertClose" class="modal-menu-btn menu-primary" data-type=success>확인</a>';
    _str += '       </div>';
    _str += '     </article>';
    _str += '   </div>';
    _str += ' </div>';
    _str += '</article>';

    document.body.insertAdjacentHTML('beforeend', _str);

    if (func !== null) {
        console.log("null아님")
        var successElement = document.querySelector('article.popup-alert [data-type=success]');
        successElement.addEventListener('click', function() {
            func();
        });
    } else {
        console.log("null임")
        successElement = document.querySelector('article.popup-alert [data-type="success"]');
        successElement.removeEventListener('click', alertPopupOpen);
    }

}