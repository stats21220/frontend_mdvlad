import { Contacts } from "../layout/Contacts/Contacts";
import { WithLayout } from "../layout/layout";

function PageContacts() {
  return (
    <>
      <Contacts />
    </>
  );
}

export default WithLayout(PageContacts);
