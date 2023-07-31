// SCROLLL EVENTS
const scrollToTop = document.getElementById("topIcon");
const interestedBtn = document.querySelector(".interested-btn");

window.addEventListener('scroll', () => {
    if (window.innerWidth >= "580") {
        scrollToTop.style.display = window.pageYOffset > 50 ? 'block' : 'none';
        scrollToTop.style.bottom = window.pageYOffset > 3200 ? '5rem' : '1rem';

        if(interestedBtn) {
            interestedBtn.style.display = window.pageYOffset > 50 ? 'block' : 'none';
            interestedBtn.style.position = window.pageYOffset > 3200 ? 'static' : 'fixed';
        }

    } else {
        scrollToTop.style.display = window.pageYOffset > 90 ? 'block' : 'none';
        if (interestedBtn) {
            interestedBtn.style.display = window.pageYOffset > 90 ? 'block' : 'none';
            
            if (window.pageYOffset > 5200) {
                interestedBtn.style.position = 'static';
                document.querySelector(".mobile-fade").style.display = "block";
            } else {
                interestedBtn.style.position = 'fixed';
                document.querySelector(".mobile-fade").style.display = "none";
            }
        }
    }
});

function scrollUp() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}


// SKILLS SCROLL
var skills = document.getElementById("skills-container");
if (skills) {
    let tween = TweenMax.from('#skills-container', 1, {autoAlpha:0, y:100, ease: Circ.easeOut,});

    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
    triggerElement: '#skills-container',
    offset: -190,
    reverse:false
    }).setTween(tween);
    controller.addScene([scene, ]);
}


// SERVICES SCROLL
var service = document.getElementById("services");
var services = document.querySelector("#services div.grid-2");
if (service) {
    let tween = TweenMax.from('.grid-2', 1, {autoAlpha:0, y:100, ease: Circ.easeOut,});

    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
    triggerElement: '.grid-2',
    offset: -190,
    reverse:false
    }).setTween(tween);

    controller.addScene([scene, ]);
}


// BLOG SCROLL
var blog_page = document.querySelector("#all-blog-posts");
if (blog_page) {
    let tween = TweenMax.from('#all-blog-posts', 1, {autoAlpha:0, y:100, ease: Circ.easeOut,});

    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
    triggerElement: '#all-blog-posts',
    offset: -190,
    reverse:false
    }).setTween(tween);

    controller.addScene([scene, ]);
}




// TYPEWRITER
var i = 0;
var paragragh = document.querySelector(".typewriter p");
var typetext = document.getElementById("type");
var firstletter = document.getElementById("firstletter");
if (typetext) typeWrite();

function typeWrite() {
    typetext.style.animation = "typing-erase 4s steps(50, end) infinite,blink-caret .5s step-end";
    typetext.innerHTML = "love coding Programmes";
    var fronttime = 4200;
    var backtime = 8200;
    var fulltime = 12200;

    setTimeout(() => {
        typetext.innerHTML = "am a Front End Developer";
    }, fronttime)

    setTimeout(() => {
        typetext.innerHTML = "am a Back End Developer";
    }, backtime)

    setTimeout(() => {
        typetext.innerHTML = "am a Fullsatck Web Developer";
    }, fulltime)
 
}

if(typetext) {
    setInterval(typeWrite, 15950);
}






const navBar = document.getElementById("nav");
const navicon = document.querySelector("#menu i")
const menu = document.getElementById("menu");
const menuZoom = document.getElementById("menu-container");
const navlinks = document.getElementsByClassName("nav-item");
const mobile = document.getElementById("mobile"); 
const mobileBar = document.querySelector("header");
const homePage = document.getElementById("home");
const secondBar = document.getElementById("second-navbar");
const secondBarTopNav = document.querySelector("#second-navbar #top-nav");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 90) {
        menuZoom.style.display = "none";
    } else {
        menuZoom.style.display = "block";
    }
})



menu.addEventListener("click", () => {
    if (navBar.style.left == "0%") {
        navBar.style.left = "-100%";
        navicon.classList.add("fa-sharp");
        navicon.classList.add("fa-bars");
        navicon.classList.remove("fa-xmark");

        menuZoom.style.animation = "zoom-in 1s infinite ease-in-out";
        if(mobileBar) {
            mobileBar.style.position = "unset";
            mobileBar.style.zIndex = "95";
            mobileBar.style.top = "unset";
        }

    } else {
        navBar.style.left = "0%";
        navBar.style.top = "90px";
        navicon.classList.remove("fa-sharp");
        navicon.classList.remove("fa-bars");
        navicon.classList.add("fa-xmark");
        menuZoom.style.animation = "zoom-out 1s infinite ease-in-out";

        if(mobileBar) {
            mobileBar.style.position = "fixed";
            mobileBar.style.zIndex = "125";
            mobileBar.style.top = "0";
            mobileBar.style.width = "100%";
        }

        if(window.innerWidth < 575) {
            navBar.style.top = "75px";
        }
    }

    var i;
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener("click", () => {
            navBar.style.left = "-100%";
            navicon.classList.add("fa-sharp");
            navicon.classList.add("fa-bars");
            navicon.classList.remove("fa-xmark");

            mobileBar.style.position = "unset";
            mobileBar.style.zIndex = "95";
            mobileBar.style.top = "unset";
        })
    }
})



if(mobileBar) {
    window.addEventListener("scroll", () => {
        if (window.innerWidth <= "896") {
            if(window.pageYOffset > 90) {
                mobile.style.position = "fixed";
                mobile.style.zIndex = "101";
                mobile.style.top = "0";
                mobile.style.right = "0";
                mobile.style.left = "0";
                mobile.style.backgroundColor = "#000";
                menuZoom.style.display = "none";
                mobile.style.transition = "all 1s ease-in-out";
                mobile.style.top = "all 0.5s ease-in-out";

                window.onscroll = (()=> {
                    let menuSection = document.querySelectorAll(".nav-link");
                    let mainSection = document.querySelectorAll(".section");
                
                
                    // console.log(mainSection);
                    mainSection.forEach((v,i)=> {
                    let rect = v.getBoundingClientRect().y;
                        if(rect < window.innerHeight-350){
                            menuSection.forEach(v=> v.classList.remove('active'));
                            menuSection[i].classList.add('active');
                        }
                    })
                })


            } else {
                mobile.style.top = "unset";
                mobile.style.top = "0";
                menuZoom.style.display = "block";
                mobile.style.backgroundColor = "#222";
                mobile.style.transition = "all 1s ease-in-out";
                mobile.style.position = "unset";
                mobile.style.top = "all 0.5s ease-in-out";

                if(secondBar) {
                    if(window.pageYOffset > 90) {
                        secondBar.style.display = "block";
                        secondBarTopNav.style.backgroundColor = "#000";
                        secondBar.style.animation = "move-down 0.7s ease-in-out";
                    } else {
                        secondBar.style.display = "none";
                        secondBarTopNav.style.backgroundColor = "#222";
                        secondBar.style.animation = "move-up 0.7s ease-in-out";
                    }
                }
            }


        } else if (window.innerWidth > "896") {
            mobile.style.top = "unset";
            mobile.style.top = "0";
            mobile.style.position = "unset";
            mobile.style.top = "all 1s ease-in-out";

            if(secondBar) {
                if(window.pageYOffset > 90) {
                    secondBar.style.display = "block";
                    secondBarTopNav.style.backgroundColor = "#000";
                    secondBar.style.animation = "move-down 0.7s ease-in-out";
                } else {
                    secondBar.style.display = "none";
                    secondBarTopNav.style.backgroundColor = "#333";
                    secondBar.style.animation = "move-up 0.7s ease-in-out";
                }
            }
        }
    });


    if (window.innerWidth > "896") {
        mobile.style.top = "unset";
        mobile.style.top = "0";
        mobile.style.position = "unset";
        mobile.style.top = "all 1s ease-in-out";
    }
}



// DISPLAY MODAL / HIDE MODAL 
var modal = document.getElementById("modal");
var modal_container = document.getElementById("modal-container");
var close_modal = document.getElementById("close");


function showModal() {
    modal.style.animation = "zoom-in 0.3s ease-in-out";
    modal_container.style.display = "block";
}

function closeModal() {
    modal_container.style.display = "none";
}


// LANGUAGES CIRCLES
let progressBar = document.querySelector(".language:first-child"),
    progressText = document.getElementById("english"),
    progressText1 = document.getElementById("french"),
    progressStartValue1 = 0;


var progressStartValue = 0;
    if(progressBar) {
    let progress = setInterval(() => {
        progressStartValue++;
        progressText.innerHTML = progressStartValue + '%';
        progressBar.style.background = 'conic-gradient(#007ced ' + (progressStartValue * 3.6) + 'deg, #dfdfdf 0deg)';

        if(progressStartValue == 100) {
            clearInterval(progress);
        }
    }, 10);
}


var progressBar1 = document.getElementById("French");
if(progressBar1) {
    let progress1 = setInterval(() => {
        progressStartValue1++;
        progressText1.innerHTML = progressStartValue1 + '%';
        progressBar1.style.background = 'conic-gradient(#007ced ' + (progressStartValue1 * 3.6) + 'deg, #dfdfdf 0deg)';
        
        if(progressStartValue1 == 40) {
            clearInterval(progress1);
        }
    }, 25);
}



// PROFESSIONAL SKILLS CIRCLES
let professionBar1 = document.getElementById("communication"),
    professionBar2 = document.getElementById("teamwork"),
    professionBar3 = document.getElementById("management"),
    professionBar4 = document.getElementById("creativity"),
    professionStartValue1 = 0,
    professionStartValue2 = 0,
    professionStartValue3 = 0,
    professionStartValue4 = 0;

if(professionBar1) {
    let profession1 = setInterval(() => {
        professionStartValue1++;
        var professionEndValue1 = 80;
        var professionText1 = document.querySelector("#communication p");
        professionText1.innerHTML = professionStartValue1 + '%';
        professionBar1.style.background = 'conic-gradient(#007ced ' + (professionStartValue1 * 3.6) + 'deg, #dfdfdf 0deg)';
        
        if(professionStartValue1 == professionEndValue1) {
            clearInterval(profession1);
        }
    }, 15); 
}

if(professionBar2) {
    let profession2 = setInterval(() => {
        professionStartValue2++;
        var professionEndValue2 = 60;
        var professionText2 = document.querySelector("#teamwork p");
        professionText2.innerHTML = professionStartValue2 + '%';
        professionBar2.style.background = 'conic-gradient(#007ced ' + (professionStartValue2 * 3.6) + 'deg, #dfdfdf 0deg)';
        
        if(professionStartValue2 == professionEndValue2) {
            clearInterval(profession2);
        }
    }, 15); 
}

if(professionBar3) {
    let profession3 = setInterval(() => {
        professionStartValue3++;
        var professionEndValue3 = 75;
        var professionText3 = document.querySelector("#management p");
        professionText3.innerHTML = professionStartValue3 + '%';
        professionBar3.style.background = 'conic-gradient(#007ced ' + (professionStartValue3 * 3.6) + 'deg, #dfdfdf 0deg)';
        
        if(professionStartValue3 == professionEndValue3) {
            clearInterval(profession3);
        }
    }, 15); 
}

if(professionBar1) {
    let profession4 = setInterval(() => {
        professionStartValue4++;
        var professionEndValue4 = 70;
        var professionText4 = document.querySelector("#creativity p");
        professionText4.innerHTML = professionStartValue4 + '%';
        professionBar4.style.background = 'conic-gradient(#007ced ' + (professionStartValue4 * 3.6) + 'deg, #dfdfdf 0deg)';
        
        if(professionStartValue4 == professionEndValue4) {
            clearInterval(profession4);
        }
    }, 15); 
}




// PORTFOLIO PAGE
f = document.getElementById("first-portfolio");
l = document.getElementsByClassName("last-portfolio");
if(f) {
    function checkScreenSize() {
        if ((window.innerWidth >= "757") && (window.innerWidth < 996)) {
            largeScreen();
        } else {
            smallScreen();
        }
    }


    function largeScreen() {
            f.style.animationName = "first-portfolio";
            f.style.transform = "translate(375px, -395px)";
            console.log(f);
            
            for (i = 0; i < l.length; i++) {
                l[i].style.animationName = "last-portfolio";
                l[i].style.transform = "translate(0px, -395px)";
            }
    }


    function smallScreen() {
            f.style.animationName = "remove-first-portfolio";
            f.style.transition = "all 0.5s ease";
            f.style.transform = "translate(0)";
            
        
            for (i = 0; i < l.length; i++) {
                l[i].style.animationName = "unset";
                l[i].style.transition = "all 0.5s ease";
                l[i].style.transform = "translate(0)";
            }
    }



    // PORFOLIO CATEGORY (ALL)
    filterSelection("all");
    function filterSelection(c) {
        var x, f, l, i; 
        x = document.getElementsByClassName("port");
        f = document.getElementById("first-portfolio");
        l = document.getElementsByClassName("last-portfolio");


        if (c == "all") {
            c = ""; 
            window.addEventListener("scroll", () => {
                checkScreenSize();
            })

        } else {
            f.style.animationName = "remove-first-portfolio";
            f.style.transition = "all 0.5s ease";
            f.style.transform = "translate(0)";
            
        
            for (i = 0; i < l.length; i++) {
                l[i].style.animationName = "unset";
                l[i].style.transition = "all 0.5s ease";
                l[i].style.transform = "translate(0)";
            }
        }

        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
    }


    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }
    

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
        }
        element.className = arr1.join(" ");
    }
}



// for window scrolldown event
window.onscroll = (()=> {
    let menuSection2 = document.querySelectorAll("#second-navbar .nav-link");
    let mainSection2 = document.querySelectorAll(".section");


    // console.log(mainSection);
    mainSection2.forEach((v,i)=> {
    let rect = v.getBoundingClientRect().y
        if(rect < window.innerHeight-350){
            menuSection2.forEach(v=> v.classList.remove('active'))
            menuSection2[i].classList.add('active')
        }
    })
})




// ACTIVE PORTFOLIO CATEGORY
var btnContainer = document.getElementById("porfolio-categories");

if(btnContainer) {
    var btns = btnContainer.getElementsByClassName("category");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var currentCategory = document.getElementsByClassName("active-portfolio");
            currentCategory[0].className = currentCategory[0].className.replace("active-portfolio", "");
            this.className += " active-portfolio";
        });
    }


    openDetails('all-portfolio');
    function openDetails(portfolio) {
        // Declare all variables
        var i, tabcontent;
    
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("portfolio-container");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    
        // Show the current tab
        document.getElementById(portfolio).style.display = "block";
        document.getElementById(portfolio).style.animation = "zoom-in 0.3s ease-in-out";
        scrollUp();
    }


    // IMAGE SCROLLER
    var arrow = document.getElementsByClassName("indicators");
    var blog = document.querySelectorAll(".portfolio-img-wrapper > div.flex");
    var movePer = 33;
    var maxmove_right = -100;
    var maxmove_left = 0;


    let mobile_view = window.matchMedia("(max-width: 519px)");
    if(mobile_view.matches) {
        movePer = 107;
        maxmove_right = -428;
        move_project_image();
    }

    function right_mover() {
        for(const i of blog) {
            var blog_right = i.style.left;
            blog_right = blog_right.slice(0, -1);
            blog_right = Number(blog_right);
            if (blog_right > maxmove_right) {
                blog_right -= movePer;
                    i.style.left = blog_right + "%";
            }
        }
    }

    function left_mover() {
        for(const i of blog) {
            var blog_left = i.style.left;
            blog_left = blog_left.slice(0, -1);
            blog_left = Number(blog_left);
            if (blog_left < maxmove_left) {
                blog_left += movePer;
                i.style.left = blog_left + "%";
            }
        }
    }
    
    function move_project_image() {
        for(const i of blog) {
            i.style.transition = "all 0.3s ease-in-out";
            setInterval(() => {
                var interval_place = i.style.left;
                interval_place = interval_place.slice(0, -1);
                interval_place = Number(interval_place);
                if (interval_place > maxmove_right) {
                    interval_place -= movePer;
                    i.style.left = interval_place + "%";
                }
            }, 4500)

            setInterval(() => {
                i.style.left = "0%";
            }, 25000);
        }
    }
}




// SHOW BLOG POST
post1 = document.getElementById("post1");
postContent = document.getElementsByClassName("blog-container");
if (post1) {
    openPost("all-blog-posts");
    function openPost(post) {
        var i, postContent;

        if (post != "all-blog-posts") {
            document.querySelector("#blog > p").style.display = "none";
        } else {
            document.querySelector("#blog > p").style.display = "block";
        }

        postContent = document.getElementsByClassName("blog-container");
        for (i = 0; i < postContent.length; i++) {
            postContent[i].style.display = "none";
        }

        document.getElementById(post).style.display = "block";
        document.getElementById(post).style.animation = "zoom-in 0.3s ease-in-out";
        scrollUp();
    }
}
