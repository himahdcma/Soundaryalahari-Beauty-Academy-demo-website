import { businessData } from '../data/businessData.js';

/**
 * Builds the WhatsApp request message and wa.me link for appointment bookings
 * @param {Object} bookingDetails
 * @param {string} bookingDetails.serviceName
 * @param {string} bookingDetails.preferredDate
 * @param {string} bookingDetails.preferredTime
 * @param {string} bookingDetails.customerName
 * @param {string} bookingDetails.customerPhone
 * @param {string} [bookingDetails.customerNotes]
 * @returns {string} WhatsApp URL
 */
export function generateWhatsAppBookingUrl({
  serviceName,
  preferredDate,
  preferredTime,
  customerName,
  customerPhone,
  customerNotes,
}) {
  const lines = [
    'Hello Soundaryalahari 👋',
    '',
    'I would like to request an appointment.',
    '',
    `Service: ${serviceName}`,
    `Preferred Date: ${preferredDate}`,
    `Preferred Time: ${preferredTime}`,
    '',
    `Name: ${customerName}`,
    `Phone: ${customerPhone}`,
  ];

  if (customerNotes && customerNotes.trim()) {
    lines.push('', `Notes: ${customerNotes.trim()}`);
  }

  lines.push('', 'Please let me know if this time is available.', '', 'Thank you.');

  const message = lines.join('\n');
  const sanitizedNumber = businessData.whatsappNumber.replace(/\D/g, '');

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the WhatsApp request message and wa.me link for special offers inquiries
 * @param {string} offerTitle - e.g. "Ladies Special" or "Student Special"
 * @returns {string} WhatsApp URL
 */
export function generateWhatsAppOfferUrl(offerTitle) {
  const message = [
    'Hello Soundaryalahari 👋',
    '',
    `I would like to know more about the ${offerTitle}.`,
    '',
    'Please share the current offer details and terms.',
    '',
    'Thank you.',
  ].join('\n');

  const sanitizedNumber = businessData.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the WhatsApp inquiry URL for Beauty Academy training opportunities
 * @returns {string} WhatsApp URL
 */
export function generateWhatsAppAcademyUrl() {
  const message = [
    'Hello Soundaryalahari 👋',
    '',
    'I would like to know about any current beauty learning or training opportunities available at your academy.',
    '',
    'Please share the details.',
    '',
    'Thank you.',
  ].join('\n');

  const sanitizedNumber = businessData.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the general WhatsApp inquiry URL for beauty services
 * @returns {string} WhatsApp URL
 */
export function generateWhatsAppGeneralInquiryUrl() {
  const message = [
    'Hello Soundaryalahari 👋',
    '',
    'I would like to know more about your beauty services.',
    '',
    'Please share the details.',
    '',
    'Thank you.',
  ].join('\n');

  const sanitizedNumber = businessData.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}

