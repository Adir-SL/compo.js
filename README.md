# compo.js
This project is meant to enable component based workflows within simple HTML files using only vanilla JavaScript.

Live Demo:
https://adir-sl.github.io/compojs/

## Main features:
1. Different HTML files store different components.
2. components can be reused with different props.
3. CSS can be scoped to the component it came from.
4. Easy to use and require no dependencies.


## Getting Started
Download the ```compo.js``` or use it as a link to this GitHub repo.

Always put the ```<script>``` tag linking to it at the **end** of your ```<body>``` tag.

```HTML
<script src="https://adir-sl.github.io/compojs/compo.js"></script>
```

OR
```HTML
<script src="compo.js"></script>
```

## Insturctions
All custom tags should be hyphenated eg. button-primary, custom-input, radoi-group etc.

This library will take code like:
```HTML
<button-primary>...</button-primary>
```

and replace it with the corresponding file named ```button-primary.html```.

Also the CSS coming from the file named ```button-primary.html``` should be scoped to not affect other buttons.