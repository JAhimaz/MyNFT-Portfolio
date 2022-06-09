import { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../lang/Languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});

// it provides the language context to app
export function LanguageProvider({ children } : any) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage], 
    userLanguageChange: (selected : any) => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage);
      window.localStorage.setItem('rcml-lang', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

type TEXT_PROPS = {
  tid: string,
}

// get text according to id & current language
export function Text({ tid } : TEXT_PROPS) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};