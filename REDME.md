
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById: Finds all elements by a id name.
2. getElementsByClassName: Finds data elements
3. querySelector: Finds the first matching element
4. querySelectorAll: Finds the all matching element

2. How do you create and insert a new element into the DOM?
ans: create with createElement(),
insert into DOM with applent;
give value with tex/attrubule

3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where when an event occurs on an element, it goes up step by step to its parent → grandparent → document.

exmple: button to div to body to html to document goes like this;
To stop it, use event.stopPropagation

4. What is Event Delegation in JavaScript? Why is it useful?
1. Event Delegation is a technique where we
instead of giving separate events to many child elements
we give a single event listener to their parent element

 5. What is the difference between preventDefault() and stopPropagation() methods?

1. stopPropagation() : this mathods stope bubbling;

2. Stops the default behavior of an element.