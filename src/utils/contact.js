// Shop contact details shown in the footer and on the Contact page. Update these to the real ones.
export const CONTACT = {
  email: 'contactgmclanka@gmail.com',
  phone: '077 951 4443',
  addressLines: ['123 Industrial Zone', 'Colombo, Sri Lanka'],
  hours: [
    { days: 'Monday – Friday', time: '8.30 am – 5.30 pm' },
    { days: 'Saturday', time: '9.00 am – 1.00 pm' },
    { days: 'Sunday & public holidays', time: 'Closed' },
  ],
};

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const mapHref = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.addressLines.join(', '))}`;
