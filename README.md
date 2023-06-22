# Guitar-LA Remix

Welcome to my project, this is a Guitar store App, with the pourpose of letting the client buy guitars, also courses and read blogs. Its my first React project using Remix Run so feel free to provide any feedback, i'll be open for tips and ideas to make a better App.
The data (guitars, blogs and courses) was previously loaded on Strapi

## ¿What is Strapi?

Strapi is a Headless cms, which means, it allows the programmer to have a backend already done, so it can focus on the development of the frontend.

## What you need for Strapi

- Node 16+
- SQLite 3, PostgreSQL + 10, MySQL 5.7.8+, MariaDB 10.2.7+. 

Choose any of these database to store your data. Personally i chose PostgreSQL because i already have installed on my computer, but any other database works fine.

## Installation guide

From your terminal:

```sh
npx create-strapi-app@latest
```

Choose "Custom (manual settings)", follow all the steps and when it ask you for a database, you'll need to know the host, port, username and password of your chosen DB

Once you finish completing the data of your database, it will ask you if you want to enable SSL connections, I recommend that you put no, since I had problems leaving it enabled

Done! You have finished creating your strapi project

To start your project:

```sh
npm run develop
``` 

- [For more info](https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project)

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
