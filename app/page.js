export const dynamic = 'force-dynamic'
import { supabase } from '../lib/supabase'

export default async function Home() {
  const { data: cakes } = await supabase.from('cakes').select()
  const { data: events } = await supabase.from('events').select()

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#d4a373', textAlign: 'center' }}>🍰 Cakes & Events</h1>
      
      <h2>Our Cakes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {cakes?.map(cake => (
          <div key={cake.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img src={cake.image_url} alt={cake.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <p style={{ color: '#d4a373', fontWeight: 'bold' }}>${cake.price}</p>
          </div>
        ))}
      </div>

      <h2>Events</h2>
      {events?.map(event => (
        <div key={event.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>📅 {event.event_date} | 📍 {event.location}</p>
        </div>
      ))}
    </main>
  )
}
