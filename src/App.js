import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar';
import OrderReview from './Components/Order-Review/OrderReview';
import Shopping from './Components/Shopping/Shopping';

function App() {


  const [items, setItems] = useState([]);
  const [summery, setSummery] = useState({});
  useEffect(() => {
    fetch('ema-john-react/products.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  useEffect(() => {
    getDetails();
  }, [items]);

  const setToLs = id => {
    const lsItem = localStorage.getItem('selectedItems');
    let selectedItems = lsItem ? JSON.parse(lsItem) : {};

    let itemExists;
    for (const itemId in selectedItems) {
      if (itemId === id) {
        itemExists = true;
        break;
      }
    }

    itemExists ? selectedItems[id]++ : selectedItems[id] = 1;
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }

  const addToCart = id => {
    setToLs(id);
    getDetails();
  }

  const clearCart = () => {
    localStorage.removeItem('selectedItems');
    getDetails();
  }

  const getDetails = () => {

    let itemSelected = 0;
    let totalPrice = 0;
    let shippingCharge = 0;
    let tax = 0;
    let grandTotal = 0;

    if (items.length) {
      const lsItem = localStorage.getItem('selectedItems');
      let selectedItems = lsItem ? JSON.parse(lsItem) : {};

      for (const itemId in selectedItems) {
        const theItem = items.find(item => item.id === itemId);

        itemSelected += selectedItems[itemId];
        totalPrice += (theItem.price * selectedItems[itemId]);
        shippingCharge += (theItem.shipping * selectedItems[itemId]);
      }

      tax = Number((totalPrice / 10).toFixed(2)); // 10 percent
      grandTotal = totalPrice + shippingCharge + tax;
    }

    setSummery({ itemSelected, totalPrice, shippingCharge, tax, grandTotal });
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Shopping addToCart={addToCart} clearCart={clearCart} items={items} summery={summery} />
        },
        {
          path: '/order-review',
          element: <OrderReview clearCart={clearCart} summery={summery} items={items} getDetails={getDetails} />
        },
        {
          path: '/manage-inventory',
          element: <div>This is manage inventory</div>
        },
        {
          path: '/login',
          element: <div>This is login</div>
        }
      ]
    },
    {
      path: '/*',
      element: <div>
        <Navbar />
        <h2 className='text-center py-10 text-xl font-semibold'>404! Page is unavailable</h2>
      </div>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
