import { Outlet, useLoaderData } from '@remix-run/react'
import ListadoPosts from '~/components/listado-posts'
import { getPosts } from '~/models/posts.server'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

export function meta(){
  return (
    [
      {title: 'GuitarLA - Nuestro Blog'},
      {descripcion: 'GuitarLA, Blog de musica y venta de guitarras'}
    ]
  )
}

function Posts() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPosts 
        posts={posts}
      />
      <Outlet />
    </main>
  )
}

export default Posts