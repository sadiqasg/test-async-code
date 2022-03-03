import { fetchAllCountries, fetchCountriesByRegion, fetchCountryByContinent, fetchCountryByName } from "../index";

describe("fetching countries from api using axios", () => {
    let originalTimeout: number;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it("expects getAllCountries to return all countries", async () => {
        const result = await fetchAllCountries();
        expect(result).toBeDefined();
    });
    it("expects fetchCountriesByRegion to return countries by region", async () => {
        const result = await fetchCountriesByRegion();
        expect(result).toBeTruthy();
    });
    it("expects fetchCountryByName to return country by name", async () => {
        const result = await fetchCountryByName();
        expect(result.length).toBeGreaterThan(1);
    });
    it("expects fetchCountryByContinent to return country by continent", async () => {
        const result = await fetchCountryByContinent();
        expect(result).toBeFalse();
    });
});
