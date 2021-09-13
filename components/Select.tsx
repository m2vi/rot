interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  array: any[];
}

const Select = ({ array, ...props }: SelectProps) => {
  return (
    <div className='select'>
      <select {...props}>
        {array.map((v: number, i: number) => (
          <option selected={i + 1 === 13} key={i} value={i + 1}>
            ROT{i + 1}
          </option>
        ))}
      </select>
      <div className='select_arrow'></div>
    </div>
  );
};

export default Select;
