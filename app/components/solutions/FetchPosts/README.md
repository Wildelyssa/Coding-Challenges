# Some notes on Set

## Main Takeaways

- **A Set in JavaScript is a special object that only keeps unique values.**
- **Using this Set method instead of reduce() is often preferred because it’s shorter and avoids includes checks.**

Below is an alternative way to using reduce() to get all of the unique key values from the array of objects without duplicates- for example=> for the input of a dropdown to filter data by a key value.

Using reduce():

```js
const uniqueUserIds = posts.reduce<number[]>((acc, post) => {
  if (!acc.includes(post.userId)) {
    acc.push(post.userId);
  }
  return acc;
}, []);
```

- Start with an empty array [].

- Loop over each post.

- If acc (the accumulator) doesn’t already contain that userId, add it.

- Return the accumulator at the end.

Using Set for the same task:

```js
const uniqueUserIds = [...new Set(posts.map((post) => post.userId))];
```

Here is how it works:

1.

```js
posts.map((post) => post.userId);
```

map goes through the entire posts array.

It transforms each post object into just its userId.

So if your posts look like this:

```js [
  { "userId": 1, "id": 1, "title": "..." },
  { "userId": 1, "id": 2, "title": "..." },
  { "userId": 2, "id": 11, "title": "..." }
]
```

👉 The result of .map() is:

```js
[1, 1, 2];
```

2.

```js
new Set([...])
```

A Set in JavaScript is a special object that only keeps unique values.

So when we wrap our array

```js
[1, 1, 2] in new Set(...)
```

it automatically removes the duplicate 1:

```js
new Set([1, 1, 2]); // Set {1, 2}
```

3.

```js
[...new Set(...)]
```

A Set isn’t an array, it’s its own type.

Using the spread operator ..., we expand the values inside the Set into a new array.

So

```js
Set {1, 2}
```

becomes

```js
[1, 2];
```

✅ Final Result

```js
const uniqueUserIds = [...new Set(posts.map((post) => post.userId))];
// Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

This is essentially:

Take all the userIds

Remove duplicates automatically with Set

Convert back to a nice array
