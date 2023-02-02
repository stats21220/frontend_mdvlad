import { WithLayout } from "../layout/layout";
import { Provider } from "../layout/Vendor/Vendor";

function PageProvider() {
  return (
    <>
      <Provider />
    </>
  );
}

export default WithLayout(PageProvider);
