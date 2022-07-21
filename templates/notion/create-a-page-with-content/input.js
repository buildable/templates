const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    notionVersion: "2022-02-22", // Required
    BUILDABLE_NOTION_API_TOKEN: $env.BUILDABLE_NOTION_API_TOKEN, // Required
    parent: { database_id: "{{DATABASE_ID}}" }, // Required
    properties: {
      Type: {
        select: { id: "f96d0d0a-5564-4a20-ab15-5f040d49759e", name: "Article", color: "default" },
      },
      "Score /5": {
        select: {
          id: "5c944de7-3f4b-4567-b3a1-fa2c71c540b6",
          name: "⭐️⭐️⭐️⭐️⭐️",
          color: "default",
        },
      },
      Name: { title: [{ text: { content: "New Media Article" } }] },
      Status: {
        select: {
          id: "8c4a056e-6709-4dd1-ba58-d34d9480855a",
          name: "Ready to Start",
          color: "yellow",
        },
      },
      Publisher: {
        select: { id: "01f82d08-aa1f-4884-a4e0-3bc32f909ec4", name: "The Atlantic", color: "red" },
      },
      "Publishing/Release Date": { date: { start: "2020-12-08T12:00:00Z", end: null } },
      Link: {
        url: "https://www.nytimes.com/2018/10/21/opinion/who-will-teach-silicon-valley-to-be-ethical.html",
      },
      Summary: {
        rich_text: [
          {
            type: "text",
            text: {
              content:
                "Some think chief ethics officers could help technology companies navigate political and social questions.",
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: "default",
            },
            plain_text:
              "Some think chief ethics officers could help technology companies navigate political and social questions.",
            href: null,
          },
        ],
      },
      Read: { checkbox: false },
    }, // Required

    // children: [
    //     {
    //       object: "block",
    //       type: "heading_2",
    //       heading_2: { rich_text: [{ type: "text", text: { content: "Lacinato kale" } }] }
    //     },
    //     {
    //       object: "block",
    //       type: "paragraph",
    //       paragraph: {
    //         text: [
    //           {
    //             type: "text",
    //             text: {
    //               content:
    //                 "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
    //               link: { url: "https://en.wikipedia.org/wiki/Lacinato_kale" }
    //             }
    //           }
    //         ]
    //       }
    //     }
    //   ],
  };
};
