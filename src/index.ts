import axios from "axios";

export const fetchAllCountries = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchCountriesByRegion =async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/region/europe");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const fetchCountryByName =async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/name/nigeria");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchCountryByContinent = async () => {
    return false;
}