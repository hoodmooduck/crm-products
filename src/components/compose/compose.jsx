import Sidebar from '../sidebar/sidebar.jsx'
import ProductList from '../productList/productList.jsx';
import Loader from '../loader/loader.jsx';
import { useSelector } from 'react-redux';



function Compose() {
  return (
    <main className="wrapper">
        <Sidebar />
        <ProductList />
    </main>
  );
}

export default Compose;
