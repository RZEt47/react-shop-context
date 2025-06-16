import { useEffect, useContext } from "react";

import { ShopContext } from "../../Context/context";
import Preloader from "../Preloader/Preloader";
import GoodsList from "./GoodsList/GoodsList";
import Cart from "../Cart/Cart";
import BasketList from "../Basket/BasketList";
import Alert from "../ALert/ALert";

import { API_KEY, API_URL } from "../../config";

const Shop = () => {
    const { setGoods, loading, order, isBasketShow, alertName } =
        useContext(ShopContext);

    // Get the data
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setGoods(data.shop);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}

            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
};

export default Shop;
