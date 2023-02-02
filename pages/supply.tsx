import { WithLayout } from "../layout/layout";
import { Supply } from "../layout/Supply/Supply";

function PageProvider() {
  return (
    <>
      <Supply />
    </>
  );
}

export default WithLayout(PageProvider);
