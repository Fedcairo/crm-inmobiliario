import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaGlobe } from 'react-icons/fa'

export const CHANNELS: Record<string, { name: string; color: string; icon: any }> = {
  whatsapp: { name: 'WhatsApp', color: '#25D366', icon: FaWhatsapp },
  instagram: { name: 'Instagram', color: '#E4405F', icon: FaInstagram },
  facebook: { name: 'Facebook', color: '#1877F2', icon: FaFacebook },
  email: { name: 'Email', color: '#EA4335', icon: FaEnvelope },
  web: { name: 'Web Chat', color: '#667085', icon: FaGlobe },
}
