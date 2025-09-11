const fs = require("fs");
const path = require("path");

function replaceImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Regex: tìm import từ 'src/...'
  const updated = content.replace(/(['"])src\//g, "$1@src/");

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`✔ Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".ts")) {
      replaceImportsInFile(fullPath);
    }
  });
}

// chạy script
walkDir(path.join(__dirname, "src"));
