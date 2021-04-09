
export const displayFormErrors = (
  key = "",
  errors = {},
  touched = {},
  submitCount = 1
) => {
  if (errors[key] !== undefined && errors[key] && submitCount) {
    return (
      <div className="text-danger input-feedback font12">{errors[key]}</div>
    );
  }
  return null;
};
