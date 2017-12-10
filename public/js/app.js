function switchPage(pageName) {

    var link_pageName= document.querySelector("a#link-"+pageName);
    var profile_card = document.querySelectorAll("div.profile-card");
    var profile_card_pageName = document.querySelector("div#"+pageName);

    link_pageName.addEventListener("click", function () {
        // profile_card.style.visibility = 'hidden';
        console.log(profile_card_pageName );
        for (var i = 0; i < profile_card.length; i++) {
            profile_card[i].style.display = 'none';

        }
        profile_card_pageName.style.display = 'block';
    })
}

(function () {
    // console.log('12');
    var pageNameArr = ['home', 'resume', 'service', 'blog', 'contact'];
    for(var i=0;i<pageNameArr.length;i++){
        switchPage(pageNameArr[i]);
    }


})();