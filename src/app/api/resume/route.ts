export async function GET() {
  const path =
    "https://raw.githubusercontent.com/mmcxii/resume/refs/heads/master/resume_public.md";

  const response = await fetch(path, {
    method: "GET",
  });

  switch (response.status) {
    case 200:
      const data = await response.text();
      return Response.json({ data });

    default:
      return Response.error();
  }
}
