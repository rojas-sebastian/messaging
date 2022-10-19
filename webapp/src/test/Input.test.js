import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../components/form/input";

describe("Input component", () => {
  let textArea;
  let span;

  beforeEach(() => {
    render(<Input />);
    textArea = screen.getByTitle("cuerpo del mensaje");
    span = screen.getByTitle("mensaje de validacion");
  });

  test("el text area se encuentra en el documento", () => {
    expect(textArea).toBeInTheDocument();
  });

  test("el mensaje de validacion aparece en el documento", () => {
    expect(span).toBeInTheDocument();
  });
});
