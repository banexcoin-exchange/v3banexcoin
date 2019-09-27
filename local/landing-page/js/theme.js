function changeThemeHome(but) {
    if(but == true){
        $('section#home').attr('style', 'background-image: url(/local/landing-page/images/header-final.svg);');
        $('footer#contact').attr('class', 'chapter orange-style');
        $('nav.nav-top-container').addClass('orange-style');
        $('a.nav-logo-link img.ap-logo__img').attr('src', '/local/logos/logo-banexcoin-white.svg');
        $('body').addClass('whited');
    } else {
        $('section#home').attr('style', 'background-image: url(/local/landing-page/images/header-final-2.svg);');
        $('footer#contact').attr('class', 'chapter black-style');
        $('nav.nav-top-container').removeClass('orange-style');
        $('a.nav-logo-link img.ap-logo__img').attr('src', '/local/logos/logo-banexcoin.svg');
        $('body').removeClass('whited');
    }
}


const localStorageTheme = localStorage.getItem('apexTemplate');

const localTheme = {
    theme: null
}

if (localStorageTheme !== null) {
    const config = JSON.parse(localStorageTheme);
    // console.log("setting theme from local")
    localTheme.theme = config.theme;
}

// default to dark if all the above fails

if (localTheme.theme == null) {
    // console.log("null LS, defaulting to dark")
    localTheme.theme = 'light';
}

// console.log("localtheme set to ", localTheme.theme)

var fileref = document.createElement('link');
fileref.setAttribute('rel', 'stylesheet');
fileref.setAttribute('title', 'btheme');
fileref.setAttribute('type', 'text/css');
fileref.setAttribute(
    'href',
    `/local/overrides/css/banex-${localTheme.theme}.css`,
);
document.getElementsByTagName('head')[0].appendChild(fileref);

function makeTheme() {
    const localStorageTheme = localStorage.getItem('apexTemplate');
    //console.log(localStorageTheme);
    
    if (localStorageTheme !== null) {
        const config = JSON.parse(localStorageTheme);
        // console.log("setting theme from local")
        localTheme.theme = config.theme;
    }
    

    var selector = $("div.page-header__right-panel");
    if (selector.length) {
        var button_Switch = '<label class="switch"><input type="checkbox" id="changes-the-theme"><div></div></label>';
        selector.prepend(button_Switch);
        clearInterval(checkExist);
    }
    if(localTheme.theme == 'light'){
        var status = 'checked="checked"';
        $('#changes-the-theme').attr('checked', true);
        //changeThemeHome(true);
    } else {
        $('#changes-the-theme').attr('checked', false);
        //changeThemeHome(false);
    }
}
var checkExist = setInterval(function() {
    makeTheme();
    
}, 5000); // check every 100ms

makeTheme();
if(localTheme.theme == 'light'){
    changeThemeHome(true);
} else {
    changeThemeHome(false);
}
document.addEventListener("DOMContentLoaded", function(event) {
    $(document).on('click', 'input#changes-the-theme', function(){
        var but = $(this).is(':checked');
        if(but){
            //console.log("esta checado");
            var current = '{"theme":"light"}';
            var tema = localStorage.setItem('apexTemplate', current);
            document.querySelector('link[title=btheme]').href = "/local/overrides/css/banex-light.css";
            //document.location.href="/";
            changeThemeHome(true);
        } else {
            //console.log("no esta checado");
            var current = '{"theme":"dark"}';
            var tema = localStorage.setItem('apexTemplate', current);
            document.querySelector('link[title=btheme]').href = "/local/overrides/css/banex-dark.css";
            //document.location.href="/";
            changeThemeHome(false);
        }
        
    });
});