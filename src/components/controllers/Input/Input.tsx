import { useController, type FieldPath, type FieldValues, type UseControllerProps } from 'react-hook-form';

type InputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> =
  UseControllerProps<TFieldValues, TName> & {
    label: string;
    type?: string;
  };

export function Input<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: InputProps<TFieldValues, TName>
) {
  const { field, fieldState } = useController(props);
  const { label, type = 'text' } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...field} placeholder={label} type={type} />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
}
