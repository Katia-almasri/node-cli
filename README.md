# 🛠️ node-cli

A simple Node.js CLI tool that fetches JSON data from a public API and appends it to a file.

---

## 📦 Features

- Fetch JSON data from a URL
- Validate the response format
- Append it to a local file
- Useful for automation, scraping, or logging APIs

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-cli.git
cd node-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create .env File

Create a .env file in the root of the project with:
FILE_PATH=./public/files/jsonResponse.json

```bash
npm install
```

### 4. 4. Link the CLI Globally (Optional)

To use the CLI tool from anywhere:

```bash
npm link
```

Run via globally linked CLI:

```bash
node-cli --url https://jsonplaceholder.typicode.com/users
```

Output:
Appends the fetched JSON array to the file defined in .env, like:

```bash
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    ...
  },
  ...
]
```

📁 Project Structure

```bash
node-cli/
│
├── public/
│   └── files/
│       └── jsonResponse.txt     # Output file
│
├── services/
│   ├── RouteService.js          # Fetch API data
│   └── WriteDataService.js      # Write JSON to file
│
├── utils/
│   ├── CheckJsonFormat.js       # Validate JSON format
│   └── FileUtil.js              # Append helper
│
├── index.js                     # CLI entry point
├── .env                         # Stores FILE_PATH variable
└── package.json                 # Project metadata

```

🧑‍💻 Author
Katia Almasri
Built with 💙 using Node.js

📝 License
This project is licensed under the MIT License.
