$(document).ready(function(){
  $('#searchButton').click(function(){
    var searchInput=$('#searchInput').val();
    $.ajax({
      type: 'GET',
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchInput+"&format=json&callback=?",
      dataType: 'jsonp',
      success: function(data) {
        console.log(data[1][0]);
        console.log(data[2][0]);
        console.log(data[3][0]);
        for(var i=0;i<data[1].length;i++){
        $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      }
    });
  });
});
