import '@testing-library/jest-dom'
import Pagination from "./components/pagination"; 
import { fireEvent, render, screen } from "@testing-library/react"; 

describe("Pagination Component", () => {
  
  // Mock function for `setPage`
  const mockSetPage = jest.fn();

  const renderPagination = (page_no, total_page) => {
    return render(<Pagination page_no={page_no} total_page={total_page} setPage={mockSetPage} />);
  };

  afterEach(() => {
    jest.clearAllMocks();  
  });

  test("renders pagination buttons correctly", () => {
    renderPagination(1, 5);
    
    const prevButton = screen.getByLabelText(/go to previous page/i);
    const nextButton = screen.getByLabelText(/go to next page/i);
    const page1Button = screen.getByText("1");
    const page2Button = screen.getByText("2");

    // Ensure buttons are rendered
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(page1Button).toBeInTheDocument();
    expect(page2Button).toBeInTheDocument();
  });

  test("prev button is disabled on the first page", () => {
    renderPagination(1, 5);
    const prevButton = screen.getByLabelText(/go to previous page/i);
    expect(prevButton).toBeDisabled();
    expect(prevButton).toHaveAttribute("aria-disabled", "true");
  });

  test("next button is disabled on the last page", () => {
    renderPagination(5, 5);
    const nextButton = screen.getByLabelText(/go to next page/i);
    expect(nextButton).toBeDisabled();
    expect(nextButton).toHaveAttribute("aria-disabled", "true");
  });

  test("clicking on a page number updates the page", () => {
    renderPagination(1, 5);
    const page2Button = screen.getByText("2");
    fireEvent.click(page2Button);
    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  test("clicking the prev button decreases the page number", () => {
    renderPagination(3, 5);
    const prevButton = screen.getByLabelText(/go to previous page/i);
    fireEvent.click(prevButton);
    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  test("clicking the next button increases the page number", () => {
    renderPagination(2, 5);
    const nextButton = screen.getByLabelText(/go to next page/i);
    fireEvent.click(nextButton);
    expect(mockSetPage).toHaveBeenCalledWith(3);
  });

  test("aria-current is set on the active page", () => {
    renderPagination(3, 5);
    const page3Button = screen.getByText("3");
    expect(page3Button).toHaveAttribute("aria-current", "page");
  });

  test("aria-label is set correctly for prev and next buttons", () => {
    renderPagination(1, 5);
    const prevButton = screen.getByLabelText(/go to previous page/i);
    const nextButton = screen.getByLabelText(/go to next page/i);

    expect(prevButton).toHaveAttribute("aria-label", "Go to previous page");
    expect(nextButton).toHaveAttribute("aria-label", "Go to next page");
  });   
});
