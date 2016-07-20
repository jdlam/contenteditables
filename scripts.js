// http://stackoverflow.com/questions/2875027/clean-microsoft-word-pasted-text-using-javascript
function cleanWordPaste( in_word_text ) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = in_word_text;
  var newString = tmp.textContent||tmp.innerText;
  // this next piece converts line breaks into break tags
  // and removes the seemingly endless crap code
  newString  = newString.replace(/\n\n/g, "<br />").replace(/.*<!--.*-->/g,"");
  // this next piece removes any break tags (up to 10) at beginning
  for ( i=0; i<10; i++ ) {
    if ( newString.substr(0,6)=="<br />" ) {
      newString = newString.replace("<br />", "");
    }
  }
  return newString;
}

(function($) {
  $(document).ready(function(){
    console.log('loaded');
    $('#hello').on('click', function(){
      $div = $('<div class="asdf" contenteditable=true">');
      $('body').append($div);
    });
  });
})(jQuery);

// Can't use this (maybe) due to commercial end user license = $29 per month
// (function($) {
//     var origAppend = $.fn.append;
//
//     $.fn.append = function () {
//       return origAppend.apply(this, arguments).trigger("append");
//     };
// })(jQuery);
//
// $("div").bind("append", function() { alert('Hello, world!'); });
//
// $("div").append("<span>");
//
// $(document).ready(function(){
//   $('body').bind("append", function() {
//     tinymce.init({
//       selector: 'div[contenteditable=true]',
//       statusbar: false,
//       toolbar: false,
//       menubar: false,
//       inline: true,
//       plugins: "paste",
//       forced_root_block: false
//       // paste_word_valid_elements: "b,strong,i,h1,h2"
//     });
//     console.log('append occurred');
//   });
//
//   $('#hello').on('click', function(){
//     $div = $('<div class="asdf" contenteditable=true style="width: 200px; min-height: 15px; background-color: lightblue;">');
//     $('body').append($div);
//     // tinymce.init({
//     //   selector: 'div[contenteditable=true]',
//     //   statusbar: false,
//     //   toolbar: false,
//     //   menubar: false,
//     //   inline: true,
//     //   plugins: "paste",
//     //   forced_root_block: false
//     //   // paste_word_valid_elements: "b,strong,i,h1,h2"
//     // });
//   });
// });
