module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Proves that a hexadecimal number must be less than 256.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (
          node.parent.kind === "const" ||
          node.parent.kind === "let" ||
          node.parent.kind === "var"
        ) {
          if (
            node.init &&
            node.init.type === "Literal" &&
            node.init.raw.startsWith("0x")
          ) {
            const limit = 0xff;
            if (parseInt(node.init.value) > limit) {
              context.report({
                node,
                message:
                  "Value of '{{ variableName }}' must be less than 256. {{ over255Raw }} is greater than 255.",
                data: {
                  over255Raw: node.init.raw,
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
