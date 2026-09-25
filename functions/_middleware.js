
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Homepage par normal OG HTML
    if (url.pathname === "/") {
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Welcome</title>
  <meta name="description" content="Welcome to our website.">

  <meta property="og:title" content="Welcome">
  <meta property="og:description" content="https://www.google.com/share.google?q=bWVKydrAWbXIF82lN">
  <meta property="og:url" content="https://www.google.com">
  <meta property="og:type" content="website">
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`;

      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=UTF-8"
        }
      });
    }

    // Explicit redirect endpoint:
    if (url.pathname === "/go") {
      return Response.redirect("https://onsafe.online/news/eh41", 302);
    }

    return new Response("Not found", { status: 404 });
  }
};
