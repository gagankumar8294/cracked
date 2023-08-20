import Navbar from '../comps/navbar/Navbar';
import withAuth from '../middleware/withAuth';

const Protected = () => {
  return (
    <div>
      <Navbar />
      <h1>This is a Protected Page!</h1>
      {/* Add your protected page content here */}
    </div>
  );
};

export default withAuth(Protected);