(()=>{"use strict";window.addEventListener("scroll",(function t(){const e=document.querySelector(".project");(function(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)})(e)&&(e.classList.add("animate"),window.removeEventListener("scroll",t))}))})();