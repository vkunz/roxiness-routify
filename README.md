# svelte-filerouter

###### Minimalist file router inspired by [Sapper router.](https://sapper.svelte.dev/docs#File_naming_rules)






## To install

``npm i -D svelte-filerouter``


```html
<!--App.svelte-->

<script>
    import { Router } from "svelte-filerouter";
</script>

<Router />

```

```javascript
// rollup.config.js
import { fileRouter } from 'svelte-filerouter'
...
    plugins: [
        fileRouter({}),
...

```
fileRouter accepters the following parameters:

``appFile: path/to/App.svelte`` (defaults to ./src/App.svelte)

``pages: path/to/pages`` (defaults to ./src/pages)


## Guide

#### File scheme

###### Basic
``src/pages/about.svelte`` corresponds to ``/about``

###### Parameters
``src/pages/admin/[business].svelte`` corresponds to ``/admin/:business``

###### To exclude
``src/admin/_navbar.svelte`` corresponds to nothing as _prefixed files are ignored.

###### Layouts
Layout files are named ``_layout.svelte`` and apply to all adjacent and nested svelte files. A file can have multiple layouts if multiple layouts are recursively present in parent folders.

#### Accessing route and parameters

```html
<!-- src/pages/admin/[business]/[project].svelte-->
<script>
	export let route
</script>

<a href="my/path">go somewhere</a>

<div>Business: {route.params.business}</div>
<div>Project: {route.params.project}</div>
```

## Notes
- ``<a href="my/path">`` tags are handled by svelte-router

## Roadmap
- ``<link path="pathname" params={params}>`` or similar for normalized link handling. As well as helper script to generate url from pathname and parameters.
- Example project

## Issues
Feel free to open an issue or a pull request, if there's anything you think could be improved.