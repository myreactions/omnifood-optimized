const yearEL=document.querySelector(".year"),currentYear=new Date().getFullYear();yearEL.textContent=currentYear;const btnNavEl=document.querySelector(".btn-mobile-nav"),headerEl=document.querySelector(".header");btnNavEl.addEventListener("click",function(){headerEl.classList.toggle("nav-open")});const allLinks=document.querySelectorAll("a:link");allLinks.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();let o=e.getAttribute("href");if(console.log(o),"#"===o&&window.scrollTo({top:0,behavior:"smooth"}),"#"!==o&&o.startsWith("#")){let n=document.querySelector(o);n.scrollIntoView({behavior:"smooth"})}e.classList.contains("main-nav-link")&&headerEl.classList.toggle("nav-open")})});const sectionHeroEl=document.querySelector(".section-hero"),obs=new IntersectionObserver(function(e){let t=e[0];!1===t.isIntersecting&&document.body.classList.add("sticky"),t.isIntersecting&&document.body.classList.remove("sticky")},{root:null,threshold:0,rootMargin:"-80px"});obs.observe(sectionHeroEl);