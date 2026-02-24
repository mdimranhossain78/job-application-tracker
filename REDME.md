
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById:একটা ক্লাস নাম দিয়ে সব এলিমেন্ট খুঁজে বের করে।
2. getElementsByClassName: একাধিক এলিমেন্ট খুঁজে বের করে
3. querySelector: প্রথম maching element খুজে দেয়
4.  querySelectorAll: প্রথম maching element খুজে দেয়

2. How do you create and insert a new element into the DOM?

 ans: createElement() দিয়ে তৈরি করি ,
        applent দিয়ে ডম এ বসাই;
        tex/attrubule দিয়ে value দেই


3. What is Event Bubbling? And how does it work?
        Event Bubbling হলো এমন একটা প্রক্রিয়া যেখানে কোনো element এ event ঘটলে সেটা ধাপে ধাপে  আমরা তার parent → grandparent → document পর্যন্ত উঠে যায়।

        exmple:button থেকে div থেকে body থেকে html থেকে document এভাবে যায়;
        এটা বন্ধ করতে হলে event.stopPropagation ‍দিয়ে

4. What is Event Delegation in JavaScript? Why is it useful?
    1. Event Delegation হলো এমন একটি টেকনিক যেখানে আমরা
    অনেকগুলো child element এ আলাদা আলাদা event না দিয়ে
    তাদের parent element এ একটাই event listener দেই


 5. What is the difference between preventDefault() and stopPropagation() methods?

 1. stopPropagation() : this mathods stope bubbling;

 2. কোনো element-এর default behaviour বন্ধ করে দেয়।