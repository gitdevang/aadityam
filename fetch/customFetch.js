export async function refreshToken() {
    try {
        const response = await fetch('/api/auth/tokenRenew', {
            method: 'POST',
            credentials: 'include',
        });
        if (response.ok) {
            console.log('Access token refreshed successfully');
            return;
        }
        else {
            window.location.href = '/admin/login';
            return;
        }
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
}

const customFetch = async (url, options = {}) => {
    // If options.body exists and it's a FormData instance, don't set Content-Type header manually.
    if (options.body && options.body instanceof FormData) {
        // If you're sending files, FormData automatically handles the Content-Type header
        options.headers = {
            ...options.headers,
            // No need to set 'Content-Type' explicitly for FormData
        };
    } else if (options.body) {
        // For non-FormData bodies (like JSON), set the Content-Type header
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
    }

    // Set credentials to include cookies with the request
    options.credentials = 'include';

    let response;
    try {
        response = await fetch(url, options);
    } catch (error) {
        console.error('Network error:', error);
        throw error;
    }

    // If the response is 401, refresh the token and retry the request
    if (response.status === 401) {
        await refreshToken();
        response = await fetch(url, options);
    }

    return response;
};

export default customFetch;