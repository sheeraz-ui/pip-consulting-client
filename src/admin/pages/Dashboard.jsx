import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MessageSquare,
  Star,
  Clock,
  ArrowRight
} from 'lucide-react'
import { dashboardAPI } from '../../utils/api'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

function Dashboard() {
  const [stats, setStats] = useState(null)
  const [activity, setActivity] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const [statsRes, activityRes] = await Promise.all([
        dashboardAPI.getStats(),
        dashboardAPI.getActivity()
      ])
      setStats(statsRes.data.data)
      setActivity(activityRes.data.data)
    } catch (error) {
      console.error('Failed to fetch dashboard data')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <LoadingSpinner />

  const statCards = [
    {
      title: 'Contact Messages',
      value: stats?.contacts?.total || 0,
      subtext: `${stats?.contacts?.unread || 0} unread`,
      icon: MessageSquare,
      color: 'bg-orange-500',
      link: '/admin/contacts'
    },
    {
      title: 'Testimonials',
      value: stats?.testimonials?.total || 0,
      subtext: `${stats?.testimonials?.active || 0} active`,
      icon: Star,
      color: 'bg-purple-500',
      link: '/admin/testimonials'
    }
  ]

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={stat.link}
              className="admin-card hover:shadow-md transition-shadow block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.subtext}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="admin-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Contacts</h2>
            <Link to="/admin/contacts" className="text-sm text-accent-600 hover:text-accent-700">
              View all
            </Link>
          </div>

          <div className="space-y-4">
            {activity?.contacts?.slice(0, 5).map((contact) => (
              <div
                key={contact.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  contact.is_read ? 'bg-gray-100' : 'bg-accent-100'
                }`}>
                  <MessageSquare className={`w-5 h-5 ${
                    contact.is_read ? 'text-gray-500' : 'text-accent-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{contact.name}</p>
                  <p className="text-sm text-gray-500 truncate">{contact.subject || 'No subject'}</p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDate(contact.created_at)}
                  </p>
                </div>
                {!contact.is_read && (
                  <span className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                )}
              </div>
            ))}

            {(!activity?.contacts || activity.contacts.length === 0) && (
              <p className="text-center text-gray-500 py-8">No recent contacts</p>
            )}
          </div>
        </motion.div>

        {/* Recent Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="admin-card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Testimonials</h2>
            <Link to="/admin/testimonials" className="text-sm text-accent-600 hover:text-accent-700">
              View all
            </Link>
          </div>

          <div className="space-y-4">
            {activity?.testimonials?.slice(0, 5).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{testimonial.client_name}</p>
                  <p className="text-sm text-gray-500 truncate">{testimonial.client_company}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      testimonial.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {testimonial.is_active ? 'Active' : 'Inactive'}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatDate(testimonial.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {(!activity?.testimonials || activity.testimonials.length === 0) && (
              <p className="text-center text-gray-500 py-8">No testimonials yet</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
