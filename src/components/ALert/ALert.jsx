import { useEffect, useContext } from "react";
import { ShopContext } from "../../Context/context";

const Alert = () => {
    const { alertName: displayName = "", closeAlert = Function.prototype } =
        useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [displayName]);

    return (
        <div id="toast-container">
            <div className="toast">{displayName} добавлен в корзину</div>
        </div>
    );
};

export default Alert;
