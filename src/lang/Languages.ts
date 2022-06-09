import en from './en.json';

interface DICTIONARY_LIST_PROPS {
    [key: string]: any;
}

interface LANGUAGE_PROPS {
    [key: string]: string;
}

export const dictionaryList : DICTIONARY_LIST_PROPS = { en };

export const languageOptions : LANGUAGE_PROPS = {
  en: 'English',
};