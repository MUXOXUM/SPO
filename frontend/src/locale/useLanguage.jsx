import languages from './translation/translation';

const getLabel = (key) => {
  try {
    const lowerCaseKey = key
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/ /g, '_');

    // Получаем текущий язык из localStorage или по умолчанию
    const currentLang = window.localStorage.getItem('language') || 'en_us';
    const langPack = languages[currentLang] || languages['en_us'];

    // Если перевод найден — возвращаем его
    if (langPack && langPack[lowerCaseKey]) return langPack[lowerCaseKey];

    // Если не найден — fallback: формируем label из ключа
    const remove_underscore_fromKey = key.replace(/_/g, ' ').split(' ');
    const conversionOfAllFirstCharacterofEachWord = remove_underscore_fromKey.map(
      (word) => word[0] ? word[0].toUpperCase() + word.substring(1) : ''
    );
    const label = conversionOfAllFirstCharacterofEachWord.join(' ');
    return label;
  } catch (error) {
    return 'No translate';
  }
};

const useLanguage = () => {
  const translate = (value) => getLabel(value);
  return translate;
};

export default useLanguage;
