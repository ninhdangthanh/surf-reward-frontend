import locale_en from '@/locale/en.json';
import locale_vi from '@/locale/vi.json';

const useTranslate = (locale: string) => {
  const dictionaries: { [key: string]: any } = {
    en: locale_en,
    vi: locale_vi,
  };

  return dictionaries[locale];
};

export default useTranslate;
