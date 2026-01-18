import { useEffect, useState } from 'react'
import { Plus, Edit2, Trash2, Star, Loader2, Quote } from 'lucide-react'
import toast from 'react-hot-toast'
import { testimonialAPI } from '../../utils/api'
import Modal from '../../components/ui/Modal'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

function ManageTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [formData, setFormData] = useState({
    client_name: '',
    client_role: '',
    client_company: '',
    client_image: '',
    content: '',
    rating: 5,
    is_featured: false,
    is_active: true,
    sort_order: 0
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data } = await testimonialAPI.adminGetAll()
      setTestimonials(data.data || [])
    } catch (error) {
      toast.error('Failed to fetch testimonials')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        ...formData,
        rating: parseInt(formData.rating),
        sort_order: parseInt(formData.sort_order) || 0
      }

      if (editingItem) {
        await testimonialAPI.update(editingItem.id, payload)
        toast.success('Testimonial updated successfully')
      } else {
        await testimonialAPI.create(payload)
        toast.success('Testimonial created successfully')
      }

      setIsModalOpen(false)
      resetForm()
      fetchTestimonials()
    } catch (error) {
      toast.error(error.response?.data?.error || 'Operation failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setFormData({
      client_name: item.client_name,
      client_role: item.client_role || '',
      client_company: item.client_company || '',
      client_image: item.client_image || '',
      content: item.content,
      rating: item.rating || 5,
      is_featured: item.is_featured,
      is_active: item.is_active,
      sort_order: item.sort_order || 0
    })
    setIsModalOpen(true)
  }

  const handleDelete = async () => {
    try {
      await testimonialAPI.delete(deleteId)
      toast.success('Testimonial deleted successfully')
      setDeleteId(null)
      fetchTestimonials()
    } catch (error) {
      toast.error('Failed to delete testimonial')
    }
  }

  const resetForm = () => {
    setEditingItem(null)
    setFormData({
      client_name: '',
      client_role: '',
      client_company: '',
      client_image: '',
      content: '',
      rating: 5,
      is_featured: false,
      is_active: true,
      sort_order: 0
    })
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Testimonials</h1>
          <p className="text-gray-600">Manage client testimonials and reviews</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setIsModalOpen(true)
          }}
          className="admin-btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Testimonial
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="admin-card relative group">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(item.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-700 italic mb-6 line-clamp-3">"{item.content}"</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center">
                  {item.client_image ? (
                    <img src={item.client_image} alt="" className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <span className="text-sm font-bold text-primary-600">{item.client_name?.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{item.client_name}</p>
                  <p className="text-xs text-gray-500">{item.client_role}, {item.client_company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteId(item.id)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              {item.is_featured && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Featured</span>
              )}
              <span className={`px-2 py-1 text-xs rounded-full ${
                item.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}>
                {item.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-12 admin-card">
          <p className="text-gray-500">No testimonials yet</p>
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? 'Edit Testimonial' : 'New Testimonial'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Client Name *</label>
              <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                required
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Role/Position</label>
              <input
                type="text"
                name="client_role"
                value={formData.client_role}
                onChange={handleChange}
                className="admin-input"
                placeholder="e.g., CEO"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Company</label>
              <input
                type="text"
                name="client_company"
                value={formData.client_company}
                onChange={handleChange}
                className="admin-input"
              />
            </div>
            <div>
              <label className="admin-label">Client Image URL</label>
              <input
                type="url"
                name="client_image"
                value={formData.client_image}
                onChange={handleChange}
                className="admin-input"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="admin-label">Testimonial Content *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={4}
              className="admin-textarea"
              placeholder="What the client said..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="admin-label">Rating (1-5)</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="admin-select"
              >
                {[5, 4, 3, 2, 1].map(num => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </select>
            </div>
            <div>
              <label className="admin-label">Sort Order</label>
              <input
                type="number"
                name="sort_order"
                value={formData.sort_order}
                onChange={handleChange}
                min="0"
                className="admin-input"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_featured"
                checked={formData.is_featured}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-accent-600"
              />
              <span className="text-sm text-gray-700">Featured</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_active"
                checked={formData.is_active}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-accent-600"
              />
              <span className="text-sm text-gray-700">Active</span>
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={() => setIsModalOpen(false)} className="admin-btn-secondary">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="admin-btn-primary flex items-center gap-2">
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {editingItem ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={!!deleteId} onClose={() => setDeleteId(null)} title="Delete Testimonial" size="sm">
        <div className="p-6">
          <p className="text-gray-600 mb-6">Are you sure you want to delete this testimonial?</p>
          <div className="flex justify-end gap-3">
            <button onClick={() => setDeleteId(null)} className="admin-btn-secondary">Cancel</button>
            <button onClick={handleDelete} className="admin-btn-danger">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ManageTestimonials

