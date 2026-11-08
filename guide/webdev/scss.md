# SCSS
SCSS is a superset of CSS, which allows using modern CSS features also for older browsers,
plus some awesome features such as mixins (basically functions) to generate the style sheets.

While allowed in modern browsers (younger than 2022), older browsers (like IE) don't allow for nested rule definitions:
```scss
button {
    border-radius: 10px;
    
    &:hover {
        border-radius: 20px;
    }
}
```
as opposed to writing
```css
button {
    border-radius: 10px;
}

button:hover {
    border-radius: 20px;
}
```

Of course, in this simple example, this isn't as big of a deal, but consider this:
```scss
.my-class {
    button {
        background-color: red;
    }
}
```
if you wanted to do that in CSS, you need to write this:

```css
.my-class button {
    background-color: red;
}
```

Again, this is a simple example, so assume you have multiple rules like this and you can quite quickly see why `SCSS` is nice
