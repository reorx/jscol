// ==UserScript==
//
// @name           basecamp stairs
//
// @description    
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      https://nodemix.basecamphq.com
//
// @author         reorx
//
// @license        GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html) 
//
// @homepage       http://www.sarathonline.com/dyn/userscripts/hello/ 
//
// @version        1.0
//
// Urls process this user script on
// @include        https://*.basecamphq.com/projects/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// @require        
//
// @history        1.0 first version
//
// ==/UserScript==


(function () {
    function setCaretAtEnd(el) {
        var range = document.createRange();
        var sel = window.getSelection();
        var chi = el.childNodes[el.childNodes.length-1];
        range.setStart(chi, 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    var bindEvent = function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else {
            element.attachEvent('on'+type, handler);
        }
    }
    var str2HTML = function (str) {
        var parser = new DOMParser();
        var d = parser.parseFromString(str, "application/xml");
        return d.firstChild;
    }
    var dom = document;
    var sheet = dom.createElement('style');
    sheet.appendChild(
        dom.createTextNode(
            '.comment {position: relative;}'+
            '.comment .stair {'+
            'position: absolute;right: 5px;top: 5px;'+
            'color: #555;text-decoration: none;'+
            '}'+
            '.comment .stair:hover {'+
            'background: transparent;color: #333'+
            '}'+
            ''
            ));
    dom.body.appendChild(sheet);
    var comments = dom.getElementById('comments').children;
    var editor = dom.getElementById('comment_body_editor');
    var editor_input = dom.getElementById('comment_body');
    var at_stairs = new Array();
    for (i=0;i<comments.length;i++) {
        var stair = dom.createElement('a');
        stair.appendChild(dom.createTextNode('#'+(i+2)));
        stair.setAttribute('href', 'javascript:void(0)');
        stair.className = 'stair';
        bindEvent(stair, 'click', function () {
            // no need to do this
            //if (at_stairs.length == 0) {
                //at_stairs[0] = this.innerHTML;
            //} else {
                //for (i in at_stairs) {
                    //if (at_stairs[i] == this.innerHTML) {
                        //return false;
                    //} else {
                        //at_stairs[at_stairs.length] = this.innerHTML;
                    //}
                //}
            //}
            var head = '@ '+this.innerHTML+' '
            if (editor.children.length > 0) {
                editor.children[0].innerHTML = head + editor.children[0].innerHTML;
            } else {
                editor.innerHTML = '<div>' + head + '</div>';
            }
            editor_input.value = editor.innerHTML;
            setCaretAtEnd(editor);
            editor.focus();
        });
        comments[i].appendChild(stair);
    }
})();
