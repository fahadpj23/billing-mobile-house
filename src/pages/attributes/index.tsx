import TableList from "components/commonComponent/tableList";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { fetchAttribute } from "store/slice/attributeSlice";
const Attributes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Dispatch fetchUser with a sample userId
    dispatch(fetchAttribute());
  }, [dispatch]);
  return (
    <div className="w-full overflow-hidden">
      <h1>attributes</h1>
      <TableList />
    </div>
  );
};
export default Attributes;
