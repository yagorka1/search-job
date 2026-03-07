import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from '../../../../components/controllers/Input/Input.tsx';

type SearchFormValues = {
  query: string;
};

export function SearchForm() {
  const { control, handleSubmit, formState } = useForm<SearchFormValues>({
    defaultValues: {
      query: '',
    },
  });

  const onSubmit: SubmitHandler<SearchFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="query"
          control={control}
          label="Search"
          rules={{ required: 'Query is required' }}
        />

        <button type="submit" disabled={!formState.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
