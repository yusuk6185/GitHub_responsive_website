(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //Node List
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            // Off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)