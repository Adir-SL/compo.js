![Compo.js logo](https://adir-sl.github.io/compojs/logo.svg)

# Compo.js
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

## Basic Usage
All custom tags should be hyphenated eg. button-primary, custom-input, radoi-group etc.

This library will take code like:
```HTML
<button-primary>...</button-primary>
```

and replace it with the corresponding file named ```button-primary.html```.

Also the CSS coming from the file named ```button-primary.html``` should be scoped to not affect other buttons.

## Props
You can also add props to change some properties in the component you're loading.

All props should be inside curly brackets eg. {prop}.

In your host file:
```HTML
<button-primary {label}="button-1">...</button-primary>
<button-primary {label}="button-2">...</button-primary>
<button-primary {label}="button-3">...</button-primary>
```

In your component file:
```HTML
<button>{label}</button>
```

This will result in 3 buttons with numbered labels, all loaded from the same component file (button-primary.html).


## Support
This library is still under active development.

If you find any bugs or issues, please let me know.