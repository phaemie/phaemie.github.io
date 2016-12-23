(function() {
    function isAncestor(el, an) {
        while (el) {
            if (el === an) {
                return el;
            }
            el = el.parentNode;
        }
        return null;
    }
    function toggleClass(el, className, bool) {
        bool ? el.classList.add(className) : e.classList.remove(className);
    }

    function initSkipLinks() {
        var skipLinks;
        var skipLinksFocused = false;
        [].forEach.call(document.querySelectorAll('.skip-links a'), function(skipLink) {
            skipLink.addEventListener('focus', function(e) {
                skipLinks = skipLinks || document.querySelector('.skip-links');
                skipLinksFocused = true;
                skipLinks.classList.remove('assistive');
            });
            skipLink.addEventListener('blur', function(e) {
                skipLinks = skipLinks || document.querySelector('.skip-links');
                skipLinksFocused = false;
                requestAnimationFrame(function() {
                    if (!skipLinksFocused) skipLinks.classList.add('assistive');
                });
            })
        });
    }
    function initRouter() {
        var routes = {
            '': viewHome,
            '/projects': viewProjects,
            '/bio': viewBio,
            '/blog': viewBlog,
            '/hire-me': viewHireMe
        };
        function routeForLocation() {
            var path = window.location.pathname;
            if (path[path.length - 1] === '/') path = path.substring(0, path.length - 1);
            return routes[path.toLowerCase()] || view404;
        }
        var currentView = routeForLocation()();
        window.addEventListener('popstate', function(e) {
            var path = window.location.pathname;
            if (path[path.length - 1] === '/') path = path.substring(0, path.length - 1);
            var route = routes[path.toLowerCase()];
            if (currentView.route !== route) {
                currentView.unload();
                currentView = { unload: route(currentView) || function() {}, route: route };
            }
        });
        document.documentElement.addEventListener('click', function(e) {
            if (e.target.href && e.target.href.startsWith(window.location.protocol + '//' + window.location.host)) {
                history.pushState(null, null, e.target.href);
                e.preventDefault();
            }
        });

        function viewHome(lastView) {
            if (lastView) {
                window.scrollTo(0, 0);
            }
        }
        function viewProjects(lastView) {}
        function viewBio(lastView) {}
        function viewBlog(lastView) {}
        function viewHireMe(lastView) {}
        function view404(lastView) {}
    }

    function init() {
        initSkipLinks();
        initRouter();
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') init();
    else document.addEventListener('DOMContentLoaded', init);
})();
