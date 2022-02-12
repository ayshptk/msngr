import { send } from "../index";

describe.skip("success", () => {
  test("discord", async () => {
    expect(
      // feel free to use your own discord webhook :)
      (
        await send("https://discord.com/api/webhooks/../..", {
          message: "Hello, world!",
        })
      ).success
    ).toBe(true);
  });

  test.skip("slack", async () => {
    expect(
      // feel free to use your own slack webhook :)
      (
        await send("https://hooks.slack.com/services/../..", {
          message: "Hello, world!",
        })
      ).success
    ).toBe(true);
  });
});
describe("errors", () => {
  test("invalid webhooks", async () => {
    expect(
      (
        await send(
          "https://badwebhook.com", // feel free to use your own slack webhook :)
          {
            message: "Hello, world!",
          }
        )
      ).reason
    ).toBe("Invalid webhook");
  });
  test("expired webhooks", async () => {
    expect(
      (
        await send(
          "https://hooks.slack.com/services/T032WAH0TGU/B032WAKGF28/8F0LznNK6JRzpKR7R5srLXZ", // feel free to use your own slack webhook :)
          {
            message: "Hello, world!",
          }
        )
      ).reason
    ).toBe("Forbidden");
  });
});
