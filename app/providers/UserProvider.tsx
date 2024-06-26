import { createContext, useState, useContext, Dispatch, SetStateAction, ReactNode } from 'react';
import { userData } from "../common/types/User"

interface IContext {
  eventUser: userData | undefined;
  setEventUser: Dispatch<SetStateAction<userData | undefined>>;
}

interface ForumUserProviderProps {
  children: ReactNode;
}

const defaultContext: IContext = {
  eventUser: undefined,
  setEventUser: () => {},
};

const AppContext = createContext<IContext>(defaultContext);

export const useEventUserContext = () => useContext(AppContext);

const ForumUserProvider: React.FC<ForumUserProviderProps> = ({ children }) => {
  const [eventUser, setEventUser] = useState<userData | undefined>();
  return (
    <AppContext.Provider value={{ eventUser, setEventUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default ForumUserProvider;