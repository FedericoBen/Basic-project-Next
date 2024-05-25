
# Basic project with Next

This is a simple app create with Next, that pretend show how to use server side rendering pages
and a component Nav in client side rendering

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



## Generate image and container

To generate a image of the app with the tag "basic-project-next" run the code:

```
docker build -t basic-project-next .
```

To next run the command line :

```
docker run -dp 3000:3000 basic-project-next
```

