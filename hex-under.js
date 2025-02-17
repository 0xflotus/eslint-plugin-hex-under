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
      valueOver:
        "Value of '{{ variableName }}' must be less than or equal {{ limit }}. {{ overValue }} ({{ over255Raw }}) is greater than {{ limit }}.",
    },
  },
  create(context) {
    const limit = context.options[0]?.limit || 255;
    return {
      VariableDeclarator(node) {
        if (["const", "let", "var"].some((el) => el === node.parent.kind)) {
          if (
            node.init &&
            node.init.type === "Literal" &&
            node.init.raw.startsWith("0x")
          ) {
            if (parseInt(node.init.value) > limit) {
              context.report({
                node,
                messageId: "valueOver",
                data: {
                  limit: limit,
                  over255Raw: node.init.raw,
                  overValue: node.init.value,
                  variableName: node.id.name,
                },
                fix(fixer) {
                  return fixer.replaceText(
                    node.init,
                    parseInt(node.init.value),
                  );
                },
              });
            }
          }
        }
      },
    };
  },
};
