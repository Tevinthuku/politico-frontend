import { storeFactory } from "../../tests/testutils";

import { removeError } from "../errors";

test("should remove error item upon dispatching the removeError handler", () => {
  const store = storeFactory({
    errors: [
      {
        message: "not found"
      }
    ]
  });

  store.dispatch(
    removeError({
      message: "not found"
    })
  );
  const newState = store.getState();
  expect(newState.errors).toEqual([]);
});

test("should not delete error it wasnt meant to delete", () => {
  const store = storeFactory({
    errors: [
      {
        message: "not found"
      },
      {
        message: "does not exist"
      }
    ]
  });

  store.dispatch(
    removeError({
      message: "not found"
    })
  );
  const newState = store.getState();
  expect(newState.errors).toEqual([
    {
      message: "does not exist"
    }
  ]);
});
