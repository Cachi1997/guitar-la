import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({ params }){
  const { postUrl } = params
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response ('', {
      status: 404,
      statusText: 'Blog no encontrado'
    })
  }

  return post
}

export function meta({data}){
  
  return (
    [
      {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
      {descripcion: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`}
    ]
  )
}

export default function Post() {

  const post = useLoaderData()
  const { contenido, imagen, titulo, publishedAt } = post.data[0].attributes

  console.log(post)

  return (
    <article className='contenedor post mt-3'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen del blog ${titulo}`}/>
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className='texto'>{contenido}</p>
      </div>
    </article>
  )
}
