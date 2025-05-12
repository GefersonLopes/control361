/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import MapPin from "../MapPin";

jest.mock("../../../store/mapStore", () => ({
  useMapStore: jest.fn(),
}));
jest.mock("../../../utils/generics/findLastByPlate", () => ({
  findLastByPlate: jest.fn(),
}));
jest.mock("../../../utils/generics/generateColorPalette", () => ({
  getColorByIndex: jest.fn(),
}));
jest.mock("@react-google-maps/api", () => ({
  __esModule: true,
  OverlayView: ({
    children,
    position,
    mapPaneName,
  }: {
    children: React.ReactNode;
    position: { lat: number; lng: number };
    mapPaneName: string;
  }) => (
    <div
      data-testid="overlay"
      data-lat={position.lat}
      data-lng={position.lng}
      data-pane={mapPaneName}
    >
      {children}
    </div>
  ),
}));
jest.mock("@mui/icons-material/LocalShippingOutlined", () => () => (
  <div data-testid="icon" />
));
jest.mock("../../layout/MapInfoWindow", () => () => (
  <div data-testid="map-info-window" />
));

import { useMapStore } from "../../../store/mapStore";
import type { LocationVehicle, Vehicle } from "../../../types/veicle";
import { findLastByPlate } from "../../../utils/generics/findLastByPlate";
import { getColorByIndex } from "../../../utils/generics/generateColorPalette";

const mockUseMapStore = useMapStore as unknown as jest.Mock<any, any>;
const mockFindLastByPlate = findLastByPlate as unknown as jest.Mock<any, any>;
const mockGetColorByIndex = getColorByIndex as unknown as jest.Mock<any, any>;

describe("MapPin component", () => {
  const item: Vehicle = {
    id: "1",
    plate: "ABC-123",
    fleet: null,
    type: "",
    model: "",
    nameOwner: "",
    status: "",
    createdAt: "",
  };
  const locations: LocationVehicle[] = [
    {
      id: "1",
      fleet: "",
      equipmentId: "",
      name: "",
      plate: "ABC-123",
      ignition: "",
      lat: 0,
      lng: 0,
      createdAt: "",
    },
    {
      id: "2",
      fleet: "",
      equipmentId: "",
      name: "",
      plate: "ABC-123",
      ignition: "",
      lat: 30,
      lng: 40,
      createdAt: "",
    },
  ];

  let setSelectedVehicleMock: jest.Mock;

  beforeEach(() => {
    setSelectedVehicleMock = jest.fn();
    mockUseMapStore.mockReturnValue({
      selectedVehicle: null,
      setSelectedVehicle: setSelectedVehicleMock,
    });
    mockFindLastByPlate.mockReturnValue(locations[1]);
    mockGetColorByIndex.mockReturnValue("rgb(1,2,3)");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("retorna null se `locations` for undefined ou vazio", () => {
    const { container: c1 } = render(
      <MapPin item={item} index={0} locations={[]} />,
    );
    expect(c1.firstChild).toBeNull();

    const { container: c2 } = render(
      <MapPin item={item} index={0} locations={[]} />,
    );
    expect(c2.firstChild).toBeNull();
  });

  it("retorna null se `findLastByPlate` der undefined", () => {
    mockFindLastByPlate.mockReturnValue(undefined);
    const { container } = render(
      <MapPin item={item} index={0} locations={locations} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("retorna null se o último location não tiver lat ou lng", () => {
    mockFindLastByPlate.mockReturnValue({
      ...locations[1],
      lat: null,
      lng: null,
    });
    const { container } = render(
      <MapPin item={item} index={0} locations={locations} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it("renderiza o pin dentro de OverlayView com posição e ícone", () => {
    render(<MapPin item={item} index={1} locations={locations} />);
    const overlay = screen.getByTestId("overlay");
    expect(overlay).toHaveAttribute("data-lat", "30");
    expect(overlay).toHaveAttribute("data-lng", "40");

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();

    const span = icon.parentElement!;
    expect(span).toHaveStyle({ backgroundColor: "rgb(1,2,3)" });
  });

  it("chama `setSelectedVehicle` ao clicar no pin", () => {
    render(<MapPin item={item} index={1} locations={locations} />);
    const containerDiv = screen.getByTestId("overlay").firstChild as Element;
    fireEvent.click(containerDiv);
    expect(setSelectedVehicleMock).toHaveBeenCalledWith(item);
  });

  it("mescla `className` customizado no container", () => {
    render(
      <MapPin
        item={item}
        index={1}
        locations={locations}
        className="minha-classe"
      />,
    );
    const containerDiv = screen.getByTestId("overlay").firstChild as Element;
    expect(containerDiv).toHaveClass("minha-classe");
  });

  it("renderiza a MapInfoWindow quando `selectedVehicle.id === item.id`", () => {
    mockUseMapStore.mockReturnValue({
      selectedVehicle: item,
      setSelectedVehicle: setSelectedVehicleMock,
    });
    render(<MapPin item={item} index={1} locations={locations} />);
    expect(screen.getByTestId("map-info-window")).toBeInTheDocument();
  });
});
