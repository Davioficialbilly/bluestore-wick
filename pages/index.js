
import Link from 'next/link'
import content from '@/data/content.json'

export default function Home() {
  return (
    <div>
      <header>
        <img src="https://i.postimg.cc/YCHPphjW/BLUE-STORE-29-08-2025.gif" alt="Blue Store Banner" />
      </header>
      <div className="container">
        <h1>Blue Store Hub - Steal a Brainrot</h1>
        <p>Bem-vindo ao portal de informações sobre o jogo Steal a Brainrot e a comunidade Blue Store!</p>
        <div className="grid">
          {content.map(item => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <Link href={`/info/${item.id}`}>Ver mais</Link>
            </div>
          ))}
        </div>
      </div>
      <footer>
        SITE HOSTED ON <a href="https://vercel.com">https://vercel.com</a>
      </footer>
    </div>
  )
}
