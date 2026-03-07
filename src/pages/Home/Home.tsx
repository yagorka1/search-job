import { VacanciesList } from './components/VacanciesList/VacanciesList.tsx';
import { SearchForm } from './components/SearchForm/SearchForm.tsx';

export function Home() {
  return (
    <div className={"bg-blue-200 h-screen overflow-hidden p-12 box-border"}>
      <SearchForm></SearchForm>

      <VacanciesList></VacanciesList>
    </div>
  )
}
