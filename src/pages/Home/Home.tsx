import { SearchBar } from './components/SearchBar/SearchBar.tsx';
import { VacanciesList } from './components/VacanciesList/VacanciesList.tsx';

export function Home() {
  return (
    <div className={"bg-blue-200 h-screen overflow-hidden p-12 box-border"}>
      <SearchBar></SearchBar>

      <VacanciesList></VacanciesList>
    </div>
  )
}
