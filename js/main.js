// PATNERS SECTION
var slideshow = document.querySelector("#slideshow > div");
var patner_left = document.getElementById("control-to-left");
var patner_right = document.getElementById("control-to-right");


if (window.innerWidth > 896) {
    var partner_width = -1000;
    var move_per = 250;

} else if (window.innerWidth > 686) {
    var partner_width = -1500;
    var move_per = 250;

} else {
    var partner_width = -1250;
    var move_per = 285;
}


patner_right.addEventListener("click", () => {
    var current_margin = slideshow.style.marginLeft;
    current_margin = current_margin.slice(0, -2);

    if (current_margin > partner_width) {
        current_margin = current_margin - move_per + "px";
        slideshow.style.marginLeft = current_margin;
    }
})


patner_left.addEventListener("click", () => {
    var current_margin = slideshow.style.marginLeft;
    current_margin = current_margin.slice(0, -2);

    if (current_margin < 0) {
        current_margin = parseInt(current_margin) + move_per + "px";
        slideshow.style.marginLeft = current_margin;
    }
});




// BLOG POST SECTION
var blogPosts = document.getElementById("blog-container");
var blog_left = document.querySelector("#controllers-container button#left");
var blog_right = document.querySelector("#controllers-container button#right");

if (window.innerWidth > 896) {
    var blog_width = -1725;
    var move_blog_per = 425;

} else if (window.innerWidth > 686) {
    current_width = window.innerWidth;
    move_blog_per = current_width - 48;
    var blog_width = -2225;

} else {
    current_width = window.innerWidth;
    move_blog_per = current_width - 40;
    var blog_width = -2000;
}


blog_left.addEventListener("click", () => {
    var blog_margin = blogPosts.style.marginLeft;
    blog_margin = blog_margin.slice(0, -2);

    if (blog_margin < 0) {
        blog_margin = parseInt(blog_margin) + move_blog_per + "px";
        blogPosts.style.marginLeft = blog_margin;
    }
});


blog_right.addEventListener("click", () => {
    var blog_margin = blogPosts.style.marginLeft;
    blog_margin = blog_margin.slice(0, -2);
    
    if (blog_margin > blog_width) {
        blog_margin = blog_margin - move_blog_per + "px";
        blogPosts.style.marginLeft = blog_margin;
    }
});