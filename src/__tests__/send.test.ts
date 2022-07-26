import { send } from "../index";

describe.skip("success", () => {
  test("discord", async () => {
    expect(
      // feel free to use your own discord webhook :)
      (
        await send(
          "https://discord.com/api/webhooks/978323868827652167/ouivuBEcfiQbm-VkrSFLRBDZVP9WF2A8NqKOn7ov1kt7nw4STIXz_Ii5T_oDAGHqDKzg",
          {
            message: "Hello, world!",
          }
        )
      ).success
    ).toBe(true);
  });

  test.skip("slack", async () => {
    expect(
      // feel free to use your own slack webhook :)
      (
        await send(
          "https://discord.com/api/webhooks/978323868827652167/ouivuBEcfiQbm-VkrSFLRBDZVP9WF2A8NqKOn7ov1kt7nw4STIXz_Ii5T_oDAGHqDKzg",
          {
            message: "Hello, world!",
          }
        )
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

describe("success", () => {
  test("discord embed", async () => {
    expect(
      // feel free to use your own discord webhook :)
      (
        await send(
          "https://discord.com/api/webhooks/978323868827652167/ouivuBEcfiQbm-VkrSFLRBDZVP9WF2A8NqKOn7ov1kt7nw4STIXz_Ii5T_oDAGHqDKzg",
          {
            embeds: [
              {
                author: {
                  name: "Birdie♫",
                  url: "https://www.reddit.com/r/cats/",
                  iconURL: "https://i.imgur.com/R66g1Pe.jpg",
                },
                title: "Title",
                url: "https://google.com/",
                description:
                  "Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`",
                color: 15258703,
                fields: [
                  {
                    name: "Text",
                    value: "More text",
                    inline: true,
                  },
                  {
                    name: "Even more text",
                    value: "Yup",
                    inline: true,
                  },
                  {
                    name: 'Use `"inline": true` parameter, if you want to display fields in the same line.',
                    value: "okay...",
                  },
                  {
                    name: "Thanks!",
                    value: "You're welcome :wink:",
                  },
                ],
                thumbnail: {
                  url: "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg",
                },
                image: {
                  url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg",
                },
                footer: {
                  text: "Woah! So cool! :smirk:",
                  iconURL: "https://i.imgur.com/fKL31aD.jpg",
                },
              },
            ],
          }
        )
      ).success
    ).toBe(true);
  });
});
