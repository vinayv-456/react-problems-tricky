// data format to traverse for a gift
export const gifts = [
  {
    // level 1
    hasMore: [
      {
        // level 2
        hasMore: [{ hasGift: 1 }, { hasGift: 0 }, { hasGift: 0 }],
      },
    ],
  },
  {
    // level 1
    hasMore: [
      {
        hasMore: [{ hasGift: 1 }, { hasGift: 0 }, { hasGift: 0 }],
      },
      {
        hasMore: [{ hasGift: 1 }, { hasGift: 0 }, { hasGift: 0 }],
      },
      {
        hasMore: [{ hasGift: 1 }, { hasGift: 0 }, { hasGift: 0 }],
      },
    ],
  },
  {
    // level 1
    hasMore: [
      {
        // level 2
        hasMore: [
          {
            // level 3
            hasMore: [
              {
                // level 4
                hasMore: [
                  {
                    // level 5
                    hasMore: [
                      {
                        // level 6
                        hasMore: [
                          // level 7
                          { hasGift: 1 },
                          { hasGift: 0 },
                          { hasGift: 0 },
                        ],
                      },
                      { hasGift: 0 },
                      { hasGift: 0 },
                    ],
                  },
                  { hasGift: 0 },
                  { hasGift: 0 },
                ],
              },
              { hasGift: 0 },
              { hasGift: 0 },
            ],
          },
        ],
      },
    ],
  },
];
