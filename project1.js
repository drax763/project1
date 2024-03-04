
const main_text = document.getElementsByClassName("main_text");
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(promise){
    return promise.json()
  })
  .then(function(data){
    data.splice(0,3);
    console.log(data.splice(0,3));
    document.querySelectorAll(".main_text")[0].innerHTML = data[0].title;
    document.querySelectorAll(".main_text")[1].innerHTML = data[1].title;
    document.querySelectorAll(".main_text")[2].innerHTML = data[2].title;
    document.querySelectorAll(".other_text")[0].innerHTML = data[0].body;
    document.querySelectorAll(".other_text")[1].innerHTML = data[1].body;
    document.querySelectorAll(".other_text")[2].innerHTML = data[2].body;
  })

