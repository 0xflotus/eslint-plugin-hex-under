module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Proves that a hexadecimal number must be less than a specified value. Default is 255.",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          limit: {
            type: "integer",
            minimum: 1,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      valueOverGeneral:
        "This number must be less than or equal {{ limit }}. {{ overValue }} ({{ over255Raw }}) is greater than {{ limit }}.",
    },
  },
  create(context) {
    const limit = context.options[0]?.limit || 255;
    return {
      onCodePathEnd: function (_codePath, node) {
        const tokens =
          node.tokens?.filter(
            (token) => token.type === "Numeric" && token.value.startsWith("0x"),
          ) || [];
        for (const token of tokens) {
          if (token.value > limit) {
            context.report({
              node: token,
              messageId: "valueOverGeneral",
              data: {
                limit: limit,
                over255Raw: token.value,
                overValue: parseInt(token.value),
              },
              fix(fixer) {
                return fixer.replaceText(
                  token,
                  parseInt(token.value),
                );
              },
            });
          }
        }
      },
    };
  },
};
