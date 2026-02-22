// settings.js - The Persistence Module
const STORAGE_KEY = 'user_preferences';

const defaultSettings = {
    darkMode: false,
    language: 'en'
};

// Save settings to localStorage
export function saveSettings(settings) {
    try {
        const serializedData = JSON.stringify(settings);
        localStorage.setItem(STORAGE_KEY, serializedData);
    } catch (error) {
        console.error("Could not save settings", error);
    }
}

// Load settings from localStorage
export function loadSettings() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        // If nothing is saved, return defaults
        return savedData ? JSON.parse(savedData) : defaultSettings;
    } catch (error) {
        console.warn("Error loading settings, using defaults", error);
        return defaultSettings;
    }
}