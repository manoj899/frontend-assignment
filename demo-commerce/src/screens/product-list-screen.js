import { connect } from "react-redux";
import { useEffect, useState } from "react";

import Pagination from "../components/pagination";
import ProductListItem from "../components/product-list-item";

import { ProductListGetData } from "../actions/product-list-action";

const page_size = 10;

const ProductListScreen = (props) => {
    const [page_no, setPage] = useState(1);  // on which you are e.g 1, 2
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        props.Product_List_Get_Data()
            .then(() => {
                setLoader(false);
            })
            .catch(() => {
                setLoader(true);
            });
    }, []);

    return (
        <>
            {loader && <div style={{ textAlign: "center" }}> Loading....</div>}

            <div style={{ margin: "2em" }}>
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="cell"> S.No </th>
                            <th role="cell"> Percentage Funded </th>
                            <th role="cell"> Amount Pledged </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.slice(page_size * page_no - 9, page_size * page_no + 1).map((item) => (
                            <ProductListItem item={item} key={item["s.no"]} />
                        ))}
                    </tbody>
                </table>

                <Pagination page_no={page_no} total_page={props.total_page} setPage={setPage} />
            </div>

        </>
    );
};

const mapStateToProps = (state) => ({
    data: state.product_list_store.data,
    total_page: state.product_list_store.total_page
});
const mapDispatchToProps = (dispatch) => ({
    Product_List_Get_Data: () => dispatch(ProductListGetData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);