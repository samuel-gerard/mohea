/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

if (document.getElementById("header") && document.getElementById("home-screen-logo")) {
    document.addEventListener("scroll", function () {
        if ((document.documentElement.scrollTop != 0) || (document.body.scrollTop != 0)) {
            document.getElementById("header").classList.add("min");
        }
        else {
            document.getElementById("header").classList.remove("min");
        }
        if (document.getElementById("home-screen-logo").offsetTop - document.documentElement.scrollTop - document.body.scrollTop <= -50) {
            document.getElementById("header").classList.add("show-logo");
        }
        else {
            document.getElementById("header").classList.remove("show-logo");
        }
    }, { passive: true });
}

if (document.getElementById("home-cta")) {
    document.getElementById("home-cta").addEventListener("click", function () {
        scrollTo('home-presentation');
    });
}

function scrollTo(el) {
    if (typeof el == "string") {
        document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    }
    else {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}