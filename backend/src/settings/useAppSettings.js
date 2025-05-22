const useAppSettings = () => {
  let settings = {};
  settings['alex_app_email'] = 'noreply@alexapp.com';
  settings['alex_base_url'] = 'https://cloud.alexapp.com';
  return settings;
};

module.exports = useAppSettings;
