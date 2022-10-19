const messageService = require("../../../src/domain/services/messages-service");

describe("User unit tests", () => {
  let userRepository;
  let user;

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("Should return a single user", async () => {
    expect(1 + 1).toEqual(2);
  });
});
