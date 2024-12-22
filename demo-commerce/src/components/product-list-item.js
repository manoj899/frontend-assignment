import { memo } from "react";


const ProductListItem = ({ item }) => {

    return (
        <tr role="row">
            <td role="cell">{item["s.no"]}</td>
            <td role="cell">{item["percentage.funded"]}</td>
            <td role="cell">{item["amt.pledged"]}</td>
        </tr>
    );
};

export default memo(ProductListItem);