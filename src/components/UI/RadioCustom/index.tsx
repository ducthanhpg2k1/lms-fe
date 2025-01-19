const RadioCustom = ({ value, onChange }: any) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          checked={value}
          onChange={(e) => {
            onChange && onChange(e.target.checked);
          }}
          name="custom-radio"
          className="custom-radio"
        />
      </div>
    </>
  );
};
export default RadioCustom;
