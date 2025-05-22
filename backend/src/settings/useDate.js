const useDate = ({ settings }) => {
  const { alex_app_date_format } = settings;

  const dateFormat = alex_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
