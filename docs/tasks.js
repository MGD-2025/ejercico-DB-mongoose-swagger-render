module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Tasks: "Create a task",
        },
        description: "Create a new task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },

    "/": {
      get: {
        tags: {
          Tasks: "Get all tasks",
        },
        description: "Get all tasks",
        operationId: "getAllTasks",
        parameters: [],
        responses: {
          200: {
            description: "Tasks retrieved successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },

    "/id/{_id}": {
      put: {
        tags: {
          Tasks: "Update task",
        },
        description: "Update task title",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Task updated successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },

      delete: {
        tags: {
          Tasks: "Delete task",
        },
        description: "Delete task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Task deleted successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
    },
  },

};
