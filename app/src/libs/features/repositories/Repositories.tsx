import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { thunks } from "../../data-access/repositories";

const Repositories = () => {
  const dispatch = useDispatch<any>();

  const { repositories }: any = useSelector<any>((state: any) => ({
    repositories: state.repositories,
  }));

  useEffect(() => {
    dispatch(thunks.getRepositories({}));
  }, [dispatch]);

  return (
    <section>
      <h2>Repositories</h2>
      {repositories.data?.items?.map((item: any) => (
        <div>{item.url}</div>
      ))}
    </section>
  );
};

export default Repositories;
