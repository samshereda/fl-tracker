const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();
    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload._embedded;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function listMonsters(signal) {
  const url = new URL(`${API_BASE_URL}/monsters`);
  const response = await fetchJson(url, { headers, signal }, []);
  return response.monsters;
}

export async function addMonster(monster, signal) {
  const url = new URL(`${API_BASE_URL}/monsters`);
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(monster),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function addEncounter(encounter, signal) {
  const url = new URL(`${API_BASE_URL}/encounters`);
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(encounter),
    signal,
  };
  return await fetchJson(url, options, {});
}
