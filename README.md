# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.



Adatbázis létrehozása
```bash
npm run db:push
```

netlify adatkapcsolat?
https://docs.netlify.com/frameworks/sveltekit/
```bash
npm i -D @sveltejs/adapter-netlify
```

```js
import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter()
  }
};
```

weboldal elérhetősége:
https://fullstackaiven.netlify.app/demo/lucia


Semantic ui:
pl keresőbe írni: semantic ui cdnjs
https://cdnjs.com/libraries/semantic-ui/2.2.2

pl gomb beállítás:
https://semantic-ui.com/elements/button.html
class létrehozása: class="ui green button"


Svelte structure:
https://svelte.dev/docs/kit/project-structure


DB-n belül az aut.js fájlban a 38.sorban ki kell egészíteni a sessiont az új táblákkal, adatokkal, amiket át szeretnénk adni