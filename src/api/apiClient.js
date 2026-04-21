const API_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Upload a file to the server
 * @param {File} file - The file to upload
 * @returns {Promise<{file_url: string}>} - The URL of the uploaded file
 */
export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('File upload error:', error);
    throw error;
  }
};

/**
 * Analyze an image using LLM to generate a professional score and analysis
 * @param {string} imageUrl - URL of the image to analyze
 * @param {object} options - Analysis options
 * @returns {Promise<{score: number, analysis: string}>}
 */
export const analyzeImage = async (imageUrl, options = {}) => {
  try {
    const response = await fetch(`${API_URL}/api/analyze-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl,
        ...options,
      }),
    });

    if (!response.ok) {
      throw new Error(`Analysis failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Image analysis error:', error);
    throw error;
  }
};

/**
 * Generate an enhanced image based on a prompt
 * @param {string} imageUrl - URL of the source image
 * @param {string} prompt - Description of the desired output
 * @param {object} options - Generation options
 * @returns {Promise<{url: string}>}
 */
export const generateImage = async (imageUrl, prompt, options = {}) => {
  try {
    const response = await fetch(`${API_URL}/api/generate-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl,
        prompt,
        ...options,
      }),
    });

    if (!response.ok) {
      throw new Error(`Image generation failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Image generation error:', error);
    throw error;
  }
};

/**
 * Edit an image with a mask and prompt (for inpainting)
 * @param {Object} params - Parameters object
 * @param {string} params.imageUrl - URL of the image to edit
 * @param {string} params.maskUrl - URL of the mask (optional)
 * @param {string} params.prompt - Description of the edits to make
 * @returns {Promise<{url: string}>}
 */
export const editImage = async ({ imageUrl, maskUrl, prompt }) => {
  try {
    const response = await fetch(`${API_URL}/api/edit-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl,
        maskUrl,
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`Image edit failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Image edit error:', error);
    throw error;
  }
};

/**
 * Save a photo session
 * @param {Object} sessionData - Session data to save
 * @returns {Promise<{id: string}>}
 */
export const savePhotoSession = async (sessionData) => {
  try {
    const response = await fetch(`${API_URL}/api/photo-sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sessionData),
    });

    if (!response.ok) {
      throw new Error(`Session save failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Session save error:', error);
    throw error;
  }
};

/**
 * Check user authentication status
 * @returns {Promise<{id: string, email: string, name: string}>}
 */
export const checkAuth = async () => {
  try {
    const response = await fetch(`${API_URL}/api/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      throw new Error(`Auth check failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Auth check error:', error);
    throw error;
  }
};

/**
 * Login user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{token: string, user: object}>}
 */
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Logout user
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/api/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Logout failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};
