const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

async function fetchJson(url, options, onCancel) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  options.headers = headers;
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();
    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

async function sendURIList(url, options, onCancel) {
  const headers = new Headers();
  headers.append('Content-Type', 'text/uri-list');
  options.headers = headers;
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }
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
  const response = await fetchJson(url, { signal }, []);
  return response._embedded.monsters;
}

export async function getMonster(id, signal) {
  const url = new URL(`${API_BASE_URL}/monsters/${id}`);
  const response = await fetchJson(url, { signal }, []);
  return response;
}

export async function addMonster(monster, signal) {
  const url = new URL(`${API_BASE_URL}/monsters`);
  const options = {
    method: 'POST',
    body: JSON.stringify(monster),
    signal,
  };
  return await fetchJson(url, options, {});
}

export async function listEncounters(signal) {
  const url = new URL(`${API_BASE_URL}/encounters`);
  const response = await fetchJson(url, { signal }, []);
  return response._embedded.encounters;
}

export async function addEncounter(encounter) {
  const url = new URL(`${API_BASE_URL}/encounters`);
  const options = {
    method: 'POST',
    body: JSON.stringify(encounter),
  };
  return await fetchJson(url, options, {});
}

export async function listActiveEncounters(signal) {
  const url = new URL(`${API_BASE_URL}/activeEncounters`);
  const response = await fetchJson(url, { signal }, []);
  return response._embedded.activeEncounters;
}

export async function listActiveEncounterActiveMonsters(
  activeEncounterId,
  signal
) {
  const url = new URL(
    `${API_BASE_URL}/activeEncounters/${activeEncounterId}/activeMonsters`
  );
  const response = await fetchJson(url, { signal }, []);
  return response._embedded.activeMonsters;
}

export async function addActiveEncounter(encounter) {
  const url = new URL(`${API_BASE_URL}/activeEncounters`);
  const options = {
    method: 'POST',
    body: JSON.stringify(encounter),
  };
  return await fetchJson(url, options, {});
}

export async function addActiveMonster(monster) {
  const url = new URL(`${API_BASE_URL}/activeMonsters`);
  const options = {
    method: 'POST',
    body: JSON.stringify(monster),
  };
  return await fetchJson(url, options, {});
}

export async function addActiveMonstersToActiveEncounter(
  activeEncounter,
  encounterMonsters
) {
  const url = new URL(activeEncounter._links.activeMonsters.href);
  const options = {
    method: 'PUT',
    body: encounterMonsters
      .map((activeMonster) => activeMonster._links.self.href)
      .join('\n'),
  };
  return await sendURIList(url, options, {});
}

export async function editActiveMonster(activeMonster) {
  const url = new URL(activeMonster._links.self.href);
  const options = {
    method: 'PATCH',
    body: JSON.stringify(activeMonster),
  };
  return await fetchJson(url, options, {});
}
