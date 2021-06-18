let start = document.querySelector(".start");

inner = start.innerHTML;
console.log(inner);

/* value.innerHtml prints 
<h1>Hello</h1>
<hr>
<ul>
  <h2>A List</h2>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
*/
text = start.innerText;
console.log(text);

/*value.innerText prints
Hello
A List
item 1
item 2
item 3
*/

start.style.color = "red";

end = document.querySelector(".end");
end.style.color = "blue";

end.classList.add("demo");

// .classList.add adds a new class to the classlist of '.end' div
