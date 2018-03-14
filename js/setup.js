(function(document, Showdown){
    var converter = new Showdown.converter();

    var container = document.createElement('div');
    container.setAttribute('class', 'words');

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(container);

    function onSuccess(data){
	      var html = converter.makeHtml(data);
	      container.innerHTML = html;
    };

    var request = new XMLHttpRequest();
    request.open('GET', 'woorden.md', true);
    request.send(null);
    request.onreadystatechange = function() {
	      if (request.readyState == 4) {
	          onSuccess(request.responseText);
	      }
    };
})(document, Showdown);
