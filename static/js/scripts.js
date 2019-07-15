function get(){
    var request = new XMLHttpRequest(); 
    request.addEventListener("readystatechange", processRequest, false);
    request.open('GET', "http://localhost:5000/api/korobchansky", true);
    request.send();
    function processRequest(e){
          var response = JSON.parse(request.responseText);
          var html = "<div id='responseinner'><table>";
          for (var i = 0; i < response.korobchansky.length; i++) {
                html += '<tr>';
                html += "<td>" + response.korobchansky[i].subject + "</td>";
                html += '<td>' + response.korobchansky[i].rating + '</td>';
                html += '</tr>'
            }
          html += "</table></div>"
          document.getElementById('response').innerHTML = html;
          }
        } 
  document.getElementById("button_get").onclick = get;
  function get_by_id(){
    document.getElementById('response').innerHTML = "<div id='form'><input class='input' id='vvod' placeholder='enter id'/><div class='knopka'><a type='submit' id='send'>send </a></div></div>";
    document.getElementById('send').onclick = get_by_id_2;
  }
  function get_by_id_2(){
    var I = document.getElementById('vvod');
    var request = new XMLHttpRequest(); 
    request.addEventListener("readystatechange", processRequest, false);
    request.open('GET', "http://localhost:5000/api/korobchansky/"+I.value, true);
    request.send();
    function processRequest(e){
    console.log(request.responseText);  
    var response = JSON.parse(request.responseText)
    var myobj = response;
    myobj.subject;
    document.getElementById('response').innerHTML = "<div id='responseinner'><table><tr><td>"+response.subject+"</td><td>"+response.rating+"</td></tr></table></div>"
    }
  }
  document.getElementById("button_get_by_id").onclick = get_by_id;

  function post(){
    document.getElementById('response').innerHTML = "<div id = 'form'><input class='input' id='vvod1' placeholder='enter subject'/><div><input class='input' id='vvod2' placeholder='enter rating'/></div><div class='knopka'><a type='submit' id='send'>send</a></div></div>";
    document.getElementById('send').onclick = post_2;
    function post_2(){
      xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/api/korobchansky" , true);
      xhr.setRequestHeader("Content-type", "application/json");
      var data = JSON.stringify({"subject": document.getElementById("vvod1").value,"rating":document.getElementById("vvod2").value});
      xhr.send(data);
    document.getElementById('response').innerHTML = "<div id='suc'>success!</div>";
    }
  }
  document.getElementById('button_post').onclick = post;

  function put(){
    document.getElementById('response').innerHTML = "<div id = 'form'><div><input class='input' id='vvod1' placeholder='enter id'/></div><input class='input' id='vvod2' placeholder='enter subject'/><div><input class='input' id='vvod3' placeholder='enter rating'/></div><div class='knopka'><a type='submit' id='send'>send</a></div></div>";
    document.getElementById('send').onclick = put_2;
    function put_2(){
      var I = document.getElementById('vvod1');
      xhr = new XMLHttpRequest();
      xhr.open("PUT", "http://localhost:5000/api/korobchansky/"+I.value , true);
      xhr.setRequestHeader("Content-type", "application/json");
      var data = JSON.stringify({"subject": document.getElementById("vvod2").value,"rating":document.getElementById("vvod3").value});
      xhr.send(data);
      document.getElementById('response').innerHTML = "<div id='suc'>success!</div>";
    }
  }
  document.getElementById('button_put').onclick = put;

  function delet(){
    document.getElementById('response').innerHTML = "<div id='form'><input class='input' id='vvod' placeholder='enter id'/><div class='knopka'><a type='submit' id='send'>send </a></div></div>";
    document.getElementById('send').onclick = delet_2;
    function delet_2(){
    var I = document.getElementById('vvod');
    var request = new XMLHttpRequest();
    request.open('DELETE', "http://localhost:5000/api/korobchansky/"+I.value, true);
    request.send();
    document.getElementById('response').innerHTML = "<div id='suc'>success!</div>";
    }
  }
  document.getElementById('button_delete').onclick = delet;