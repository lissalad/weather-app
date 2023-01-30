export default function RadioButton(props) {
  const { label, name, checked, onChange } = props;
  return (
    <label className="flex flex-row">
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
