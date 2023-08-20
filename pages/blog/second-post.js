import requireAuthentication from "../utils/requireAuthentication";

const ProtectedPage2 = () => {
  return (
    <div className="container">
      <h1>Protected Page 2</h1>
      {/* Content for the protected page */}
    </div>
  );
};

export default requireAuthentication(ProtectedPage2);