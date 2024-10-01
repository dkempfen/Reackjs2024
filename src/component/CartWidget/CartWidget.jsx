import { CiShoppingCart } from "react-icons/ci";

export const CartWidget = () => {
return (
    <div
    style={{
        display: "flex",
        marginRight: "1.25rem",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between",
    }}
    >
    <CiShoppingCart size={30} />
    10
    </div>
);
};