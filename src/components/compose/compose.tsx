import Sidebar from '../sidebar/sidebar.js'
import ProductList from '../productList/productList.js';




function Compose() {
  return (
    <main className="wrapper">
        <Sidebar />
        <ProductList />
    </main>
  );
}

export default Compose;
