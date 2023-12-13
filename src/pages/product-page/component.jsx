import { useGetHeadphonesQuery } from "../../redux/services/api";
import { NavLink } from "react-router-dom";
import { ProductContainer } from "../../components/product/container";
import { Outlet } from "react-router-dom";

export const ProductPage = () => {
  const { data, isLoading, isError, refetch } =
    useGetHeadphonesQuery(undefined);

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return (
      <div>
        Error
        <button onClick={() => refetch()}>refetch</button>
      </div>
    );
  }

  return (
    <div>
      {data.map(({ id, name }) => (
        <NavLink to={`/product/${id}`}>{name}</NavLink>
      ))}
      <Outlet />
    </div>
  );
};
