/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import FilterTabs from "../FilterTabs";

jest.mock("../../../store/vehicleStore", () => ({
  useVehicleStore: jest.fn(),
}));
jest.mock("../../../hooks/useFilterForm", () => ({
  useFilterForm: jest.fn(),
}));

jest.mock("../../ui/Button", () => (props: any) => <button {...props} />);
jest.mock("../../ui/Radio", () => (props: any) => (
  <label>
    <input type="radio" {...props} />
    {props.label}
  </label>
));
jest.mock("../../ui/SearchInput", () => (props: any) => (
  <input type="search" {...props} />
));
jest.mock("../Title", () => (props: any) => <div>{props.title}</div>);

import { useFilterForm } from "../../../hooks/useFilterForm";
import { useVehicleStore } from "../../../store/vehicleStore";

const mockUseVehicleStore = useVehicleStore as unknown as jest.Mock;
const mockUseFilterForm = useFilterForm as unknown as jest.Mock;

describe("FilterTabs component", () => {
  let setType: jest.Mock;
  let setFilter: jest.Mock;
  let register: jest.Mock;
  let handleSubmit: jest.Mock;
  let watch: jest.Mock;
  let formState: any;

  beforeEach(() => {
    setType = jest.fn();
    setFilter = jest.fn();
    mockUseVehicleStore.mockReturnValue({
      type: "tracked",
      filter: "initial",
      setType,
      setFilter,
    });

    register = jest.fn().mockImplementation((name: string) => ({
      name,
      onChange: jest.fn(),
      onBlur: jest.fn(),
      ref: jest.fn(),
    }));
    handleSubmit = jest
      .fn()
      .mockImplementation((cb: () => void) => (e: any) => {
        e.preventDefault();
        cb();
      });
    watch = jest.fn().mockImplementation((field: string) => {
      if (field === "status") return "tracked";
      if (field === "search") return "";
    });
    formState = { errors: {} };

    mockUseFilterForm.mockReturnValue({
      register,
      handleSubmit,
      watch,
      formState,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders heading, radios, search input and button", () => {
    render(<FilterTabs />);

    expect(screen.getByText("Lista")).toBeInTheDocument();

    const tracked = screen.getByRole("radio", { name: /Rastreados/i });
    const others = screen.getByRole("radio", { name: /Outros/i });
    expect(tracked).toBeInTheDocument();
    expect(others).toBeInTheDocument();

    const form = screen.getByRole("search");
    expect(form).toBeInTheDocument();
    const searchInput = screen.getByPlaceholderText(
      /Buscar por placa ou frota/i,
    );
    expect(searchInput).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Novo/i })).toBeInTheDocument();
  });

  it("calls setType and setFilter on mount via useEffect", () => {
    render(<FilterTabs />);
    expect(setType).toHaveBeenCalledWith("tracked");
    expect(setFilter).toHaveBeenCalledWith("");
  });

  it("submits form by calling handleSubmit", () => {
    render(<FilterTabs />);
    const form = screen.getByRole("search");
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("shows error message when formState.errors.search is set", () => {
    formState.errors = { search: { message: "Invalid" } };
    mockUseFilterForm.mockReturnValueOnce({
      register,
      handleSubmit,
      watch,
      formState,
    });
    render(<FilterTabs />);
    expect(screen.getByText("Invalid")).toBeInTheDocument();
  });
});
