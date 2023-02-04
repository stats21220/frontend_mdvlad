import { Contacts } from "../layout/Contacts/contacts";
import { WithLayout } from "../layout/layout";

function PageContacts() {
  return (
    <>
      <Contacts />
    </>
  );
}

export default WithLayout(PageContacts);
