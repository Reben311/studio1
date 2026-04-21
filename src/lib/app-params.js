const isNode = typeof window === "undefined";
const storage = isNode
  ? {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    }
  : window.localStorage;

const toSnakeCase = (str) => str.replace(/([A-Z])/g, "_$1").toLowerCase();

const getAppParamValue = (
  paramName,
  { defaultValue = undefined, removeFromUrl = false } = {}
) => {
  if (isNode) return defaultValue ?? null;

  const storageKey = `app_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (removeFromUrl) {
    urlParams.delete(paramName);
    const newUrl =
      `${window.location.pathname}` +
      `${urlParams.toString() ? `?${urlParams.toString()}` : ""}` +
      `${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  if (searchParam) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }

  if (defaultValue !== undefined && defaultValue !== null && defaultValue !== "") {
    storage.setItem(storageKey, defaultValue);
    return defaultValue;
  }

  const storedValue = storage.getItem(storageKey);
  return storedValue || null;
};

const getAppParams = () => {
  return {
    apiBaseUrl: getAppParamValue("api_base_url", {
      defaultValue: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    }),
    fromUrl: !isNode ? window.location.href : null,
    model: getAppParamValue("model", {
      defaultValue: import.meta.env.VITE_IMAGE_MODEL || "black-forest-labs/FLUX.1-dev",
    }),
  };
};

export const appParams = {
  ...getAppParams(),
};