import { useEffect, useState } from 'react'
import { Eye, Trash2, CheckCircle, Mail, Phone, Building, Clock, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'
import { contactAPI } from '../../utils/api'
import Modal from '../../components/ui/Modal'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

function ManageContacts() {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [filterRead, setFilterRead] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [filterRead])

  const fetchContacts = async () => {
    try {
      const { data } = await contactAPI.getAll({ is_read: filterRead || undefined })
      setContacts(data.data || [])
    } catch (error) {
      toast.error('Failed to fetch contacts')
    } finally {
      setIsLoading(false)
    }
  }

  const handleView = async (contact) => {
    try {
      const { data } = await contactAPI.getById(contact.id)
      setSelectedContact(data.data)
      fetchContacts()
    } catch (error) {
      toast.error('Failed to load contact')
    }
  }

  const handleMarkReplied = async (id) => {
    try {
      await contactAPI.markAsReplied(id)
      toast.success('Marked as replied')
      setSelectedContact(prev => prev ? { ...prev, is_replied: true } : null)
      fetchContacts()
    } catch (error) {
      toast.error('Failed to update')
    }
  }

  const handleDelete = async () => {
    try {
      await contactAPI.delete(deleteId)
      toast.success('Contact deleted')
      setDeleteId(null)
      fetchContacts()
    } catch (error) {
      toast.error('Failed to delete')
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600">View and manage contact form submissions</p>
        </div>
        <select
          value={filterRead}
          onChange={(e) => setFilterRead(e.target.value)}
          className="admin-select w-auto"
        >
          <option value="">All Messages</option>
          <option value="false">Unread</option>
          <option value="true">Read</option>
        </select>
      </div>

      <div className="admin-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((contact) => (
                <tr 
                  key={contact.id} 
                  className={`hover:bg-gray-50 cursor-pointer ${!contact.is_read ? 'bg-accent-50/30' : ''}`}
                  onClick={() => handleView(contact)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {!contact.is_read && (
                        <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                      )}
                      <div>
                        <p className={`${!contact.is_read ? 'font-semibold' : 'font-medium'} text-gray-900`}>
                          {contact.name}
                        </p>
                        <p className="text-sm text-gray-500">{contact.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900 line-clamp-1">{contact.subject || 'No subject'}</p>
                    {contact.service_interest && (
                      <p className="text-xs text-gray-500">{contact.service_interest}</p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatDate(contact.created_at)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`status-badge ${
                        contact.is_read ? 'bg-gray-100 text-gray-700' : 'bg-accent-100 text-accent-700'
                      }`}>
                        {contact.is_read ? 'Read' : 'Unread'}
                      </span>
                      {contact.is_replied && (
                        <span className="status-badge bg-green-100 text-green-700">
                          Replied
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleView(contact)
                        }}
                        className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setDeleteId(contact.id)
                        }}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {contacts.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No contact messages</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Details Modal */}
      <Modal
        isOpen={!!selectedContact}
        onClose={() => setSelectedContact(null)}
        title="Contact Message"
        size="lg"
      >
        {selectedContact && (
          <div className="p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedContact.name}</h3>
                <p className="text-gray-500">{selectedContact.subject || 'No subject'}</p>
              </div>
              <div className="flex gap-2">
                {selectedContact.is_replied ? (
                  <span className="status-badge bg-green-100 text-green-700">Replied</span>
                ) : (
                  <button
                    onClick={() => handleMarkReplied(selectedContact.id)}
                    className="admin-btn-primary text-sm flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark Replied
                  </button>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href={`mailto:${selectedContact.email}`} className="text-accent-600 hover:underline">
                    {selectedContact.email}
                  </a>
                </div>
                {selectedContact.phone && (
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${selectedContact.phone}`} className="text-gray-700">
                      {selectedContact.phone}
                    </a>
                  </div>
                )}
                {selectedContact.company && (
                  <div className="flex items-center gap-3 text-sm">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{selectedContact.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500">{formatDate(selectedContact.created_at)}</span>
                </div>
              </div>

              {selectedContact.service_interest && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Service Interest</p>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {selectedContact.service_interest}
                  </span>
                </div>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Message</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <a
                href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject || 'Your inquiry'}`}
                className="admin-btn-primary flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Reply via Email
              </a>
              <button
                onClick={() => setSelectedContact(null)}
                className="admin-btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={!!deleteId} onClose={() => setDeleteId(null)} title="Delete Contact" size="sm">
        <div className="p-6">
          <p className="text-gray-600 mb-6">Are you sure you want to delete this contact message?</p>
          <div className="flex justify-end gap-3">
            <button onClick={() => setDeleteId(null)} className="admin-btn-secondary">Cancel</button>
            <button onClick={handleDelete} className="admin-btn-danger">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ManageContacts

