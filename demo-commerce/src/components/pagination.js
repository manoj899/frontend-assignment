import { memo, useState } from "react";

const Pagination = (props) => {
    const [page_numbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

    const prevPage = () => {
        const new_pages = [...page_numbers];
        if (page_numbers[page_numbers.length - 1] - 5 >= 1) {
            new_pages.pop();
            new_pages.unshift(page_numbers[0] - 1);
            setPageNumbers(new_pages);
        }

        props.setPage(props.page_no - 1);
    };

    const nextPage = () => {
        const new_pages = [...page_numbers];
        if (page_numbers[0] + 5 <= props.total_page) {
            new_pages.shift();
            new_pages.push(page_numbers[page_numbers.length - 1] + 1);
            setPageNumbers(new_pages);
        }

        props.setPage(props.page_no + 1);
    };

    return (
        <div id="pagination" style={{ display: "flex", alignItems: "center" }}>
            <button
                onClick={prevPage}
                style={{
                    padding: '3px',
                    display: 'block',
                    width: "40px",
                    margin: "5px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: "5px",
                    transition: "box-shadow 0.3s ease",
                    cursor: `${props.page_no === 1 ? "not-allowed" : "pointer"}`,
                }}
                disabled={props.page_no === 1}
                aria-label="Go to previous page"
                title="Previous Page"
                aria-disabled={props.page_no === 1 ? "true" : "false"}
            >
                prev
            </button>

            {page_numbers.map((val) => (
                <button
                    key={val}
                    onClick={() => props.setPage(val)}
                    style={{
                        padding: '3px',
                        display: 'block',
                        transition: "box-shadow 0.3s ease",
                        margin: "5px",
                        backgroundColor: `${val === props.page_no ? "#4CAF50" : "lightgrey"}`,
                        color: `${val === props.page_no ? "#fff" : ""}`,
                        width: "40px",
                        cursor: "pointer",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: "5px",
                        borderColor: "grey",
                    }}
                    aria-label={`Go to page ${val}`}
                    aria-current={val === props.page_no ? "page" : undefined}
                >
                    {val}
                </button>
            ))}

            <button
                onClick={nextPage}
                style={{
                    padding: '3px',
                    display: 'block',
                    width: "40px",
                    margin: "5px",
                    alignItems: 'center',
                    cursor: `${props.page_no === props.total_page ? "not-allowed" : "pointer"}`,
                    transition: "box-shadow 0.3s ease",
                    justifyContent: 'center',
                    borderRadius: "5px"
                }}
                disabled={props.page_no === props.total_page}
                aria-label="Go to next page"
                title="Next Page"
                aria-disabled={props.page_no === props.total_page ? "true" : "false"}
            >
                next
            </button>
        </div>
    );
};

export default memo(Pagination);