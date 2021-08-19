(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //Node List
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }
})(window, document)