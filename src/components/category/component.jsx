export const Category = ({ codec, onClick }) => {
  // const { data, isFetching } = useGetCodecsQuery(undefined, {
  //   selectFromResult: (result) => {
  //     return {
  //       ...result,
  //       data: result?.data?.find(({ id: codecId }) => codecId === id),
  //     };
  //   },
  // });
  // console.log(data);

  if (!codec) {
    return null;
  }

  return <button onClick={onClick}>{codec.type}</button>;
};
