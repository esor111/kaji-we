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
      // Auth state change will automatically show dashboard
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
          className={activeTab === 'gallery' ? 'active' : ''}
          onClick={() => setActiveTab('gallery')}
        >
          Gallery
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
        {activeTab === 'gallery' && <GalleryManager />}
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

  // Extract YouTube ID from URL
  const extractYouTubeId = (input) => {
    // If it's already just an ID (no slashes or special chars), return it
    if (!/[\/\?=]/.test(input)) {
      return input;
    }

    // Try to extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/\s]+)/,
      /youtube\.com\/watch\?.*v=([^&\?\/\s]+)/,
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return input; // Return as-is if no pattern matches
  };

  const handleYouTubeIdChange = (value) => {
    const extractedId = extractYouTubeId(value);
    setFormData({...formData, youtube_id: extractedId});
  };

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
            placeholder="YouTube URL or Video ID (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
            value={formData.youtube_id}
            onChange={(e) => handleYouTubeIdChange(e.target.value)}
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

function GalleryManager() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    image_url: '',
    before_url: '',
    title_en: '',
    title_ne: '',
    description_en: '',
    description_ne: '',
    project_type: 'Basement',
    location: '',
    featured: false,
  })

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setItems(data || [])
    } catch (error) {
      console.error('Error fetching gallery:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { ...formData }
      if (!payload.before_url) delete payload.before_url
      const { error } = await supabase.from('gallery').insert([payload])
      if (error) throw error
      alert('Gallery item added!')
      setFormData({
        image_url: '',
        before_url: '',
        title_en: '',
        title_ne: '',
        description_en: '',
        description_ne: '',
        project_type: 'Basement',
        location: '',
        featured: false,
      })
      setShowForm(false)
      fetchItems()
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this gallery item?')) return
    try {
      const { error } = await supabase.from('gallery').delete().eq('id', id)
      if (error) throw error
      fetchItems()
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  if (loading) return <div>Loading gallery...</div>

  return (
    <div className="videos-manager">
      <div className="manager-header">
        <h2>Project Gallery</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Photo'}
        </button>
      </div>

      {showForm && (
        <form className="video-form" onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Image URL (e.g., /images/gallery/photo.jpg or https://...)"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Before Image URL (optional — enables Before/After slider)"
            value={formData.before_url}
            onChange={(e) => setFormData({ ...formData, before_url: e.target.value })}
          />
          <input
            type="text"
            placeholder="Title (English)"
            value={formData.title_en}
            onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Title (Nepali)"
            value={formData.title_ne}
            onChange={(e) => setFormData({ ...formData, title_ne: e.target.value })}
          />
          <textarea
            placeholder="Description (English)"
            value={formData.description_en}
            onChange={(e) => setFormData({ ...formData, description_en: e.target.value })}
          />
          <textarea
            placeholder="Description (Nepali)"
            value={formData.description_ne}
            onChange={(e) => setFormData({ ...formData, description_ne: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location (e.g., Kathmandu)"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          <select
            value={formData.project_type}
            onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
          >
            <option value="Basement">Basement</option>
            <option value="Roof">Roof</option>
            <option value="Wall">Wall</option>
            <option value="Foundation">Foundation</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Terrace">Terrace</option>
            <option value="Other">Other</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            />
            Featured
          </label>
          <button type="submit">Add Photo</button>
        </form>
      )}

      <div className="videos-list">
        {items.length === 0 ? (
          <p>No gallery items yet. Add your first photo!</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="video-item">
              <img src={item.image_url} alt={item.title_en || 'Gallery item'} />
              <div className="video-info">
                <h3>{item.title_en}</h3>
                <p>{item.description_en}</p>
                <span className="badge">{item.project_type}</span>
                {item.location && <span className="badge">{item.location}</span>}
                {item.featured && <span className="badge featured">Featured</span>}
                {item.before_url && <span className="badge">Before/After</span>}
              </div>
              <button onClick={() => handleDelete(item.id)} className="delete-btn">
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
