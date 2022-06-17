import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { getRandomIntInclusive } from "../../helperFunctions";

const phrases = [
  "🍪 Esse site não utiliza cookies",
  "👨‍💻 Desenvolvido por Tarcísio Surdi",
  "👩‍⚕️ Revisão por Julia Ellen",
  "👩‍⚕️ Revisão por Eloisa Lopes",
  "🎓 Um trabalho proveniente da UNOESC",
  "👨‍⚕️ Revisão por Igor Augusto Louvatel",
  "👨‍⚕️ Revisão por Rodrigo Zanini",
  "👨‍⚕️ Revisão por Thiago Miranda",
  "🔓 Este é um projeto de código aberto!",
];

interface FooterContextValue {
  phrase: string;
  phrasesSet: Set<string>;
}

export const FooterContext = createContext<FooterContextValue>({
  phrase: "Carregando...",
  phrasesSet: new Set(phrases),
});

const FooterContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [phrase, setPhrase] = useState("Carregando...");
  const [phrasesSet, setPhrasesSet] = useState(new Set(phrases));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const phrasesArray = Array.from(phrasesSet);

      if (phrasesArray.length === 0) {
        const randomPhrase =
          phrases[getRandomIntInclusive(0, phrases.length - 1)];
        setPhrase(randomPhrase);
        setPhrasesSet((prevState) => {
          prevState = new Set(phrases);
          prevState.delete(randomPhrase);
          return prevState;
        });
        return;
      }

      const newPhrase =
        phrasesArray[getRandomIntInclusive(0, phrasesArray.length - 1)];
      setPhrase(newPhrase);
      setPhrasesSet((prevState) => {
        prevState.delete(newPhrase);
        return prevState;
      });
    }, 5 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <FooterContext.Provider value={{ phrase, phrasesSet }}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterContextProvider;
