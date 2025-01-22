export const mapRatingData = (rating: any) => {
  if (!rating) return {};
  const valueRating = rating?.value?.split('+');
  return {
    label: `From ${valueRating?.length && valueRating[0]}`,
    value: Number(valueRating?.length && valueRating[0]),
  };
};

export const clean = (arr: any) => {
  return arr.filter((element: any) => {
    return element !== undefined && element !== null;
  });
};
