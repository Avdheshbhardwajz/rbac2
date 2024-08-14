## **API Documentation**

### **Base URL**
`http://localhost:3000/api`

### **Authentication Routes**

#### **1. Register a New User**
- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "role": "member" // or "manager", "admin"
  }
  ```
- **Responses:**
  - **201 Created:**
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "error": "Validation error message"
    }
    ```

#### **2. User Login**
- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Responses:**
  - **200 OK:**
    ```json
    {
      "token": "JWT_TOKEN"
    }
    ```
  - **401 Unauthorized:**
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

### **Task Routes**

#### **1. Create a Task**
- **Endpoint:** `/tasks`
- **Method:** `POST`
- **Description:** Creates a new task for the authenticated user.
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Request Body:**
  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```
- **Responses:**
  - **201 Created:**
    ```json
    {
      "message": "Task created successfully",
      "task": {
        "id": "task_id",
        "title": "string",
        "description": "string",
        "status": "pending",
        "createdAt": "timestamp"
      }
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "error": "Validation error message"
    }
    ```

#### **2. Get All Tasks for Today**
- **Endpoint:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieves all tasks for the authenticated user for the current day.
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Responses:**
  - **200 OK:**
    ```json
    [
      {
        "id": "task_id",
        "title": "string",
        "description": "string",
        "status": "pending",
        "createdAt": "timestamp"
      },
      ...
    ]
    ```
  - **401 Unauthorized:**
    ```json
    {
      "error": "Unauthorized access"
    }
    ```

#### **3. Update a Task Status**
- **Endpoint:** `/tasks/:taskId`
- **Method:** `PATCH`
- **Description:** Updates the status of a specific task.
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Request Body:**
  ```json
  {
    "status": "completed" // or "pending"
  }
  ```
- **Responses:**
  - **200 OK:**
    ```json
    {
      "message": "Task updated successfully",
      "task": {
        "id": "task_id",
        "title": "string",
        "description": "string",
        "status": "completed",
        "createdAt": "timestamp"
      }
    }
    ```
  - **400 Bad Request:**
    ```json
    {
      "error": "Validation error message"
    }
    ```
  - **404 Not Found:**
    ```json
    {
      "error": "Task not found"
    }
    ```

#### **4. Delete a Task**
- **Endpoint:** `/tasks/:taskId`
- **Method:** `DELETE`
- **Description:** Deletes a specific task.
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Responses:**
  - **200 OK:**
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```
  - **404 Not Found:**
    ```json
    {
      "error": "Task not found"
    }
    ```

### **User Management Routes**

#### **1. Get All Users**
- **Endpoint:** `/users`
- **Method:** `GET`
- **Description:** Retrieves a list of all users. (Accessible by Admin only)
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Responses:**
  - **200 OK:**
    ```json
    [
      {
        "id": "user_id",
        "username": "string",
        "role": "member", // or "manager", "admin"
        "status": "active"
      },
      ...
    ]
    ```
  - **403 Forbidden:**
    ```json
    {
      "error": "Access denied"
    }
    ```

#### **2. Get User by ID**
- **Endpoint:** `/users/:userId`
- **Method:** `GET`
- **Description:** Retrieves details of a specific user. (Admin and the user themselves can access)
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Responses:**
  - **200 OK:**
    ```json
    {
      "id": "user_id",
      "username": "string",
      "role": "member", // or "manager", "admin"
      "status": "active"
    }
    ```
  - **404 Not Found:**
    ```json
    {
      "error": "User not found"
    }
    ```

#### **3. Update User Status**
- **Endpoint:** `/users/:userId`
- **Method:** `PATCH`
- **Description:** Updates the status (active/inactive) of a specific user. (Admin only)
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Request Body:**
  ```json
  {
    "status": "active" // or "inactive"
  }
  ```
- **Responses:**
  - **200 OK:**
    ```json
    {
      "message": "User status updated successfully"
    }
    ```
  - **404 Not Found:**
    ```json
    {
      "error": "User not found"
    }
    ```

### **Admin Routes**

#### **1. Get Task Statistics**
- **Endpoint:** `/admin/statistics/tasks`
- **Method:** `GET`
- **Description:** Retrieves statistics about tasks added per day and the average completion rate. (Admin only)
- **Headers:**
  - `Authorization: Bearer <JWT_TOKEN>`
- **Responses:**
  - **200 OK:**
    ```json
    {
      "totalTasks": 123,
      "completedTasks": 100,
      "averageCompletionRate": 81.3 // Percentage
    }
    ```
  - **403 Forbidden:**
    ```json
    {
      "error": "Access denied"
    }
    ```

### **Error Responses**
Common error responses include:
- **400 Bad Request:**
  ```json
  {
    "error": "Validation error message"
  }
  ```
- **401 Unauthorized:**
  ```json
  {
    "error": "Invalid credentials"
  }
  ```
- **403 Forbidden:**
  ```json
  {
    "error": "Access denied"
  }
  ```
- **404 Not Found:**
  ```json
  {
    "error": "Resource not found"
  }
  ```
- **500 Internal Server Error:**
  ```json
  {
    "error": "Internal server error message"
  }
  ```

---

This documentation covers the key endpoints and functionality of your API. Adjust any details according to your specific implementation and requirements.