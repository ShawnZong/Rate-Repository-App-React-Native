import React from "react";
import { SignInContainer } from "../components/SignIn";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

describe.only("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId("username"), "username");
      fireEvent.changeText(getByTestId("password"), "password");
      fireEvent.press(getByTestId("submit"));

      await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "username",
          pwd: "password",
        });
      });
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
