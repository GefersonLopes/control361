import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Button from "../Button";

describe("Button component", () => {
  it("renders with default variant (primary) e tamanho md", () => {
    render(<Button>Entrar</Button>);

    const btn = screen.getByRole("button", { name: /entrar/i });
    expect(btn).toHaveClass(
      "rounded-lg",
      "bg-primary",
      "px-5",
      "py-1.5",
      "text-sm",
    );
  });

  it("aceita variantes e tamanhos customizados", () => {
    render(
      <Button variant="secondary" size="lg">
        Click me
      </Button>,
    );

    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toHaveClass("bg-secondary", "px-6", "py-2", "text-base");
  });

  it("dispara o onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>OK</Button>);

    fireEvent.click(screen.getByRole("button", { name: /ok/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("aplica className adicional passada via props", () => {
    render(<Button className="minha-classe">Teste</Button>);
    expect(screen.getByRole("button")).toHaveClass("minha-classe");
  });
});
