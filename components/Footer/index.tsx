import { Text } from "@nextui-org/react";

import styles from "./Footer.module.scss";
import { useEffect, useState } from "react";

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export interface FooterProps {
  phrases?: string[];
}

const phraseList = [
  "🍪 Esse site não utiliza cookies",
  "👨‍💻 Desenvolvido por Tarcísio Surdi",
  "👩‍⚕️ Revisão por Julia Ellen",
  "🎓 Um trabalho proveniente da UNOESC",
];

const Footer: React.FC<FooterProps> = ({ phrases = phraseList }) => {
  const [phrasesArray, setPhrasesArray] = useState(phrases);
  const [phrase, setPhrase] = useState("🍪 Esse site não utiliza cookies");

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (phrasesArray.length === 0) {
        setPhrasesArray(phrases);
        return;
      } else {
        const updatedPhrase =
          phrasesArray[getRandomIntInclusive(0, phrasesArray.length - 1)];

        setPhrase(updatedPhrase);
        setPhrasesArray((prevState) => {
          prevState = prevState.filter((item) => item !== updatedPhrase);
          return prevState;
        });
      }
    }, 5 * 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [phrasesArray]);

  return (
    <footer className={styles.footer}>
      <Text h5 css={{ ta: "center" }}>
        {phrase}
      </Text>
    </footer>
  );
};

export default Footer;
