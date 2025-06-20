interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

const FORM_ID = '1FAIpQLSdSKrKB3J52eO6q2higa8sZ9sVEbMr5xCmUVJDiLtQasxR_Og';
const FORM_FIELDS = {
  name: '1560897754',
  email: '1876128119',
  phone: '1142508015',
  company: '1672298949',
  service: '743687501',
  budget: '1903576456',
  timeline: '2080662489',
  message: '1867886907',
  originPage: '554108287',
  referrer: '851512370',
  medium: '534564891',
  urlParams: '1356471898'
};

export async function submitToGoogleForm(data: FormData, originPage: string = '') {
  try {
    const formData = new URLSearchParams();
    
    // Add form fields
    if (data.name) formData.append(`entry.${FORM_FIELDS.name}`, data.name);
    if (data.email) formData.append(`entry.${FORM_FIELDS.email}`, data.email);
    if (data.phone) formData.append(`entry.${FORM_FIELDS.phone}`, data.phone);
    if (data.company) formData.append(`entry.${FORM_FIELDS.company}`, data.company);
    if (data.service) formData.append(`entry.${FORM_FIELDS.service}`, data.service);
    if (data.budget) formData.append(`entry.${FORM_FIELDS.budget}`, data.budget);
    if (data.timeline) formData.append(`entry.${FORM_FIELDS.timeline}`, data.timeline);
    if (data.message) formData.append(`entry.${FORM_FIELDS.message}`, data.message);
    
    // Add tracking information
    formData.append(`entry.${FORM_FIELDS.originPage}`, originPage);
    formData.append(`entry.${FORM_FIELDS.referrer}`, document?.referrer || '');
    formData.append(`entry.${FORM_FIELDS.medium}`, 'website');
    formData.append(`entry.${FORM_FIELDS.urlParams}`, window?.location?.search || '');

    const response = await fetch(
      `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // This is required for Google Forms
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Since we're using no-cors, we won't get a meaningful response
    // We'll consider it successful if it doesn't throw an error
    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
}
