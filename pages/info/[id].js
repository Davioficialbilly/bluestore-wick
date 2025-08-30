
import { useRouter } from 'next/router'
import content from '@/data/content.json'

export default function InfoPage() {
  const router = useRouter()
  const { id } = router.query
  const item = content.find(i => i.id === id)

  if (!item) return <p>Carregando...</p>

  return (
    <div className="container">
      <h1>{item.title}</h1>
      <p><strong>Categoria:</strong> {item.category}</p>
      <p>{item.content}</p>
    </div>
  )
}
