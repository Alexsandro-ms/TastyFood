import { useEffect, useState } from "react";

function usePersistedState(key, initialState) {
  // Armazenando o estado do valor inicial
  const [state, setState] = useState(() => {
    // Recuperando o item do localStoragem
    const storageValue = localStorage.getItem(key);
    // Retornando os dados do estado armazenado no localStorage
    if (storageValue) {
      return JSON.parse(storageValue);
      // Retornando o valor padrão
    } else {
      return initialState;
    }
  });
  useEffect(() => {
    // Armazenando o item no localstorage em forma de um objeto
    localStorage.setItem(key, JSON.stringify(state));
    // Atualizando o hook quando a key ou o estado mudar
  }, [key, state]);
  return [state, setState];
}

export default usePersistedState;
