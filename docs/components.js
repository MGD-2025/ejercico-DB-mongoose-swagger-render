module.exports = {
  components: {
    schemas: {
      Task: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6201064b0028de7866e2b2c4"
          },
          title: {
            type: "string",
            example: "Terminar Sprint"
          },
          completed: {
            type: "boolean",
            example: false
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          updatedAt: {
            type: "string",
            format: "date-time"
          }
        }
      }
    }
  }
};
