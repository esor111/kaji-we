import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import './Admin.css'

export default function Admin() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('videos')

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      alert('Logged in successfully!')
    } catch (error) {
      alert(error.message)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return <div className="admin-loading">Loading...</div>
  }

  if (!user) {
    return (
      <div className="admin-login">
        <div className="login-card">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-user">
          <span>{user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="admin-tabs">
        <button 
          className={activeTab === 'videos' ? 'active' : ''} 
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button 
          className={activeTab === 'bookings' ? 'active' : ''} 
          onClick={() => setActiveTab('bookings')}
        >
          Bookings
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'videos' && <VideosManager />}
        {activeTab === 'bookings' && <BookingsManager />}
      </div>
    </div>
  )
}

function VideosManager() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    youtube_id: '',
    description: '',
    project_type: 'Basement',
    featured: false
  })

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setVideos(data || [])
    } catch (error) {
      console.error('Error fetching videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { error } = await supabase
        .from('videos')
        .insert([formData])
      
      if (error) throw error
      
      alert('Video added successfully!')
      setFormData({
        title: '',
        youtube_id: '',
        description: '',
        project_type: 'Basement',
        featured: false
      })
      setShowForm(false)
      fetchVideos()
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this video?')) return
    
    try {
      const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      fetchVideos()
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  if (loading) return <div>Loading videos...</div>

  return (
    <div className="videos-manager">
      <div className="manager-header">
        <h2>Project Videos</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Video'}
        </button>
      </div>

      {showForm && (
        <form className="video-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Video Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="YouTube Video ID (e.g., dQw4w9WgXcQ)"
            value={formData.youtube_id}
            onChange={(e) => setFormData({...formData, youtube_id: e.target.value})}
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
          <select
            value={formData.project_type}
            onChange={(e) => setFormData({...formData, project_type: e.target.value})}
          >
            <option value="Basement">Basement</option>
            <option value="Roof">Roof</option>
            <option value="Wall">Wall</option>
            <option value="Foundation">Foundation</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Other">Other</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({...formData, featured: e.target.checked})}
            />
            Featured
          </label>
          <button type="submit">Add Video</button>
        </form>
      )}

      <div className="videos-list">
        {videos.length === 0 ? (
          <p>No videos yet. Add your first video!</p>
        ) : (
          videos.map((video) => (
            <div key={video.id} className="video-item">
              <img 
                src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                alt={video.title}
              />
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <span className="badge">{video.project_type}</span>
                {video.featured && <span className="badge featured">Featured</span>}
              </div>
              <button onClick={() => handleDelete(video.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

function BookingsManager() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setBookings(data || [])
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this booking?')) return
    
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      fetchBookings()
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  if (loading) return <div>Loading bookings...</div>

  return (
    <div className="bookings-manager">
      <h2>Contact Form Submissions</h2>
      
      <div className="bookings-list">
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{new Date(booking.created_at).toLocaleDateString()}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.message}</td>
                  <td>
                    <button onClick={() => handleDelete(booking.id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
