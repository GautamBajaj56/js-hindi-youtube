/* basically in js two main ways to declare variables 
const and let */

/* In JavaScript, variables are dynamically typed, meaning you don’t need to specify 
their data type when declaring them. The type is determined automatically based on 
the assigned value. */

let x = 10;       // x is a number
let y = "Hello";  // y is a string
let z = true;    // z is a boolean
 




const accountId = 144553
/* use const ki agar fixed value variables assign karne ho 
jinki values future mei change karne ki need na ho and na hi 
karne ho */

let accountEmail = "hitesh@google.com"
/* use this when we know ki values change karne ki need pad 
sakti hai  */

var accountPassword = "12345" // dont use

accountCity = "Jaipur" /* bina const and let k bhi variables 
ko value assign kii jaa sakti hai remember that */



// accountId = 2 // not allowed

/* The const declaration declares block-scoped local variables. 
The value of a constant can't be changed through reassignment 
using the assignment operator, but if a constant is an object, 
its properties can be added, updated, or removed. */

/* ### **Understanding `const` in JavaScript**  

- `const` is used to declare variables **that cannot be reassigned**.  
- However, if the variable holds an **object or array**, its **properties or elements can be modified**.  

---

### **Example 1: Reassignment Not Allowed**

const num = 10;
num = 20; // ❌ Error: Assignment to constant variable
```
Here, `num` is a constant and cannot be changed.

---

### **Example 2: Modifying an Object's Properties (Allowed)**
```javascript
const person = { name: "John", age: 25 };

// ✅ Allowed: Changing properties
person.age = 30;  
console.log(person.age); // Output: 30

// ✅ Allowed: Adding new properties
person.city = "New York";
console.log(person.city); // Output: "New York"

// ✅ Allowed: Deleting properties
delete person.name;
console.log(person.name); // Output: undefined
```
Even though `person` is declared as `const`, we **can modify its properties** because objects are **reference types**.

---

### **Example 3: Reassigning an Object (Not Allowed)**
```javascript
const car = { brand: "Toyota", model: "Camry" };
car = { brand: "Honda", model: "Civic" }; // ❌ Error: Assignment to constant variable
```
Here, trying to assign a new object to `car` is not allowed.

---

### **Example 4: Modifying an Array (Allowed)**
```javascript
const numbers = [1, 2, 3];

// ✅ Allowed: Modifying elements
numbers[0] = 10;
console.log(numbers); // Output: [10, 2, 3]

// ✅ Allowed: Adding elements
numbers.push(4);
console.log(numbers); // Output: [10, 2, 3, 4]

// ✅ Allowed: Removing elements
numbers.pop();
console.log(numbers); // Output: [10, 2, 3]
```
Even though `numbers` is `const`, we can modify its contents.

---

### **Key Takeaways**
1. **Primitive values (numbers, strings, booleans) declared with `const` cannot be changed.**
2. **Objects and arrays declared with `const` can have their properties/elements modified but cannot be reassigned.**
3. **If you need full immutability, use `Object.freeze()`**:
   ```javascript
   const obj = Object.freeze({ key: "value" });
   obj.key = "newValue"; // ❌ No effect, still "value"
   ```

Would you like further clarification? 😊 */


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let accountState;
/* basically sometimes we don't know ki variable mei kya value 
aayegi so sometimes we don't assign any value at declaration so 
undefined hota hai display */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* The console.table() static method displays tabular data as a 
table.
basically baar baar multiple variables ki value print karvaani ho
 then console.table is helpful  */

 /* check outputs too */

 /* ++++++++++++++++++++lecture 4 finished++++++++++++++++++++ */