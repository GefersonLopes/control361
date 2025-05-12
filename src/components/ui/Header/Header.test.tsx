import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("<Header />", () => {
  const TITLE = "Meu Título";

  it("renderiza o título dentro de um elemento h1", () => {
    render(<Header title={TITLE} />);

    const landmark = screen.getByRole("banner");
    expect(landmark).toBeInTheDocument();

    const heading = screen.getByRole("heading", { level: 1, name: TITLE });
    expect(heading).toBeInTheDocument();
  });

  it("aplica classes base e className extra passada via props", () => {
    render(<Header title={TITLE} className="minha-classe" />);

    const headerEl = screen.getByRole("banner");
    expect(headerEl).toHaveClass(
      "w-full",
      "h-[59px]",
      "bg-tertiary",
      "px-6",
      "shadow-md",
      "flex",
      "items-center",
      "justify-between",
    );
    expect(headerEl).toHaveClass("minha-classe");
  });

  it("não renderiza o container de children quando não há children", () => {
    render(<Header title={TITLE} />);

    const wrapper = screen.queryByTestId("header-children");
    expect(wrapper).toBeNull();
  });

  it("renderiza os children dentro de um container com espaçamento", () => {
    render(
      <Header title={TITLE}>
        <button>OK</button>
      </Header>,
    );

    const button = screen.getByRole("button", { name: /ok/i });

    const wrapper = button.parentElement as HTMLElement;

    expect(wrapper).toHaveClass("flex", "items-center", "space-x-4");

    expect(wrapper.closest("header")).toBeTruthy();
  });
});
