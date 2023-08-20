import withAuth from "../utils/withAuth";

const ProtectedPage1 = () => {
  return (
    <div className="container">
      <h1>Protected Page 1</h1>
      {/* Content for the protected page */}
    </div>
  );
};

export default withAuth(ProtectedPage1);