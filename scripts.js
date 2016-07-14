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

console.log('loaded');

$(document).ready(function(){

  tinymce.init({
    selector: 'div[contenteditable=true]',
    statusbar: false,
    toolbar: false,
    menubar: false,
    inline: true,
    plugins: "paste",
    // paste_word_valid_elements: "b,strong,i,h1,h2"
  });

  $('#hello').on('click', function(){
    $div = $('<div class="asdf" contenteditable=true style="width: 200px; min-height: 15px; background-color: lightblue;">');
    $('body').append($div);
    tinymce.init({
      selector: 'div[contenteditable=true]',
      statusbar: false,
      toolbar: false,
      menubar: false,
      inline: true,
      plugins: "paste",
      // paste_word_valid_elements: "b,strong,i,h1,h2"
    });
  });
});
