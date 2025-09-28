const DEFAULT_API_BASE_URL = "http://localhost:8080";

export function getApiBaseUrl() {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL;
  return url.replace(/\/$/, "");
}

export function getMockMode() {
  return process.env.NEXT_PUBLIC_USE_API_MOCKS === "true";
}
