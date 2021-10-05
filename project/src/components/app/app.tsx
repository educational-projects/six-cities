import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  cards: number[]
}

function App({cards}: AppScreenProps): JSX.Element {
  return <MainScreen cards={cards}/>;
}

export default App;
