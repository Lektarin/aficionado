const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding"),popupContent=document.querySelector(".popup__content");let unlock=!0;const timeout=500;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const o=popupLinks[e];console.log(o),o.addEventListener("click",(function(e){const t=o.getAttribute("value").replace("#","");console.log(t);popupOpen(document.getElementById(t)),e.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const o=popupCloseIcon[e];o.addEventListener("click",(function(e){popupClose(o.closest(".popup")),e.preventDefault()}))}function popupOpen(e){if(e&&unlock){const o=document.querySelector(".popup.open");o?popupClose(o,!1):bodyLock(),e.classList.add("open"),popupContent.classList.add("open"),e.addEventListener("mousedown",(function(e){e.target.closest(".popup__content")||popupClose(e.target.closest(".popup"))}))}}function popupClose(e,o=!0){unlock&&(e.classList.remove("open"),popupContent.classList.remove("open"),o&&bodyUnlock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0)for(let o=0;o<lockPadding.length;o++){lockPadding[o].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),500)}function bodyUnlock(){setTimeout((function(){if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),500),unlock=!1,setTimeout((function(){unlock=!0}),500)}document.addEventListener("keydown",(function(e){if(27===e.which){popupClose(document.querySelector(".popup.open"))}})),Element.prototype.closest||(Element.prototype.closest=function(e){for(var o=this;o;){if(o.matches(e))return o;o=o.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);