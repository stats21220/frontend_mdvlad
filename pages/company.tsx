import { Company } from "../layout/Company/Company";
import { WithLayout } from "../layout/layout";

function PageCompany() {
  return (
    <>
      <Company />
    </>
  );
}

export default WithLayout(PageCompany);
