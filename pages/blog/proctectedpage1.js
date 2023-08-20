import { withAuth } from "../utils/withAuth";

const ProtectedPage1 = () => {
  return <div>This is a protected page 1.</div>;
};

export default withAuth(ProtectedPage1);