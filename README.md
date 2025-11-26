<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grammar Checker</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: #f9fafb;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .container {
      background: #fff;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 90%;
      max-width: 600px;
    }
    h2 {
      margin-bottom: 1rem;
      color: #333;
      text-align: center;
    }
    textarea {
      width: 100%;
      height: 150px;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      resize: vertical;
    }
    button {
      margin-top: 1rem;
      width: 100%;
      padding: 0.75rem;
      background: #2563eb;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #1e40af;
    }
    #result {
      margin-top: 1.5rem;
      font-size: 0.95rem;
    }
    .error {
      color: #dc2626;
      font-weight: 600;
    }
    .suggestion {
      color: #16a34a;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>📝 Grammar Checker</h2>
    <textarea id="textInput" placeholder="Type your text here..."></textarea>
    <button onclick="checkGrammar()">Check Grammar</button>
    <div id="result"></div>
  </div>

  <script>
    async function checkGrammar() {
      const text = document.getElementById("textInput").value;
      const response = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `text=${encodeURIComponent(text)}&language=en-US`
      });
      const data = await response.json();
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = data.matches.map(m =>
        `<p><span class="error">⚠ ${m.message}</span><br>
         <span class="suggestion">Suggestion: ${m.replacements.map(r => r.value).join(", ")}</span></p>`
      ).join("");
    }
  </script>
</body>
</html>
