// ==UserScript==
// @name         cursor-dance-army
// @namespace    https://github.com/Mark42XLII/cursor-dance-army
// @version      1.0
// @description  Robot takeover for www.cursordanceparty.com, one cursor at a time!
// @author       Mark42XLII
// @match        http://www.cursordanceparty.com/
// @grant        none
// @run-at      document-start
// ==/UserScript==

window.addEventListener('beforescriptexecute',
  function(event)
  {
    var originalScript = event.target;
    console.log('script detected:', originalScript.src);
    if('http://www.cursordanceparty.com/js/party-0.2.0.js' === originalScript.src)
    {
      var replacementScript = document.createElement('script');
      replacementScript.src = 'https://cdn.jsdelivr.net/gh/Mark42XLII/cursor-dance-army@master/party.js';
      originalScript.parentNode.replaceChild(replacementScript, originalScript);
      event.preventDefault();
    }
  }
);