import { withAuth } from "../utils/withAuth";

const ProtectedPage2 = () => {
  return <div>This is a protected page 2.</div>;
};

export default withAuth(ProtectedPage2);