"use client";

import { useState, useEffect } from 'react';

interface GeocodingResult {
    formatted_address: string;
    // Add other properties you might need from the API response
}

interface GeocodingResponse {
    results: GeocodingResult[];
    status: 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR';
}

export interface State {
    status: "loading" | "error" | "done" | "not available" | "not found";
    error?: string;
    address: string;
    latitude: number;
    longitude: number;
}

const NO_ADDRESS_FOUND = new Error('No address found for these coordinates.');

const UseCurrentAddress = () => {
    

    const [state, setState] = useState<State>({
        status: "loading",
        address: "",
        latitude: -1,
        longitude: -1
    });

    const refresh = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const lat = position.coords.latitude;
                        const long = position.coords.longitude;

                        const address = await reverseGeocode(lat, long)

                        setState({
                            status: "done",
                            address: address,
                            latitude: lat,
                            longitude: long,
                        })

                    } catch(e) {
                        console.warn({e})
                        if (e == NO_ADDRESS_FOUND) {
                            setState({
                                status: "not found",
                                error: "no address found",
                                address: "",
                                latitude: -1,
                                longitude: -1
                            })

                            return
                        }

                        const errorMessage = e instanceof Error ? e.message : `${e}`
                        setState({
                            status: "error",
                            error: errorMessage,
                            address: "",
                            latitude: -1,
                            longitude: -1
                        })
                    }
                },

                (err) => {
                    setState((previous) => ({
                        status: "error",
                        error: `Error getting location: ${err.message}`,
                        address: "",
                        latitude: -1,
                        longitude: -1
                    }));
                }
            );
        } else {
            setState((previous) => ({
                status: "not available",
                address: "",
                error: 'Geolocation is not supported by this browser.',
                latitude: -1,
                longitude: -1
            }));
        }
    };

    const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            throw new Error('Google Maps API key is missing.');
        }

        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: GeocodingResponse = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
            if (data.results.length >= 11) {
                return data.results[10].formatted_address;
            }

            return data.results[0].formatted_address;
        }

        if (data.status === 'ZERO_RESULTS') {
            throw NO_ADDRESS_FOUND;
        }

        throw new Error(`Geocoding API error: ${data.status}`);

    };

    useEffect(() => {
        refresh();
    }, []);

    return {state, reverseGeocode, refresh}
};

export default UseCurrentAddress;